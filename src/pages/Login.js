import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../App.css';
import { ValidateEmail, CheckEmpty } from "../marketFunctions";

const Login = () => {
    
    const [inputs, setInputs] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPassEmpty, setIsPassEmpty] = useState(false);
    const [data, setData] = useState(null);
    const redirect = useHistory();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPending(true);

        const email = inputs.email;
        const password = inputs.password;
        const loginData = {
            email,
            password,
        };
        setIsEmailWrong(false);
        setIsPassEmpty(false);
        if(!ValidateEmail(loginData.email)){
            setIsEmailWrong(true);
        }else if(!CheckEmpty(loginData.password)){
            setIsPassEmpty(true);
        }else{
            fetch('/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginData)
            }).then((res) => res.json())
            .then((data) => {setData(data.message);
                // console.log(data.condition);
                setIsPending(false);
                if(data.condition === "ok"){
                    // redirect.go(-1); // (-1) go back in history
                    redirect.push('/');
                    // setTimeout(() => {
                    //     window.location = "/";
                    // }, 2000);
            }})
            .then(()=>{
                
            })
        }
    }

    return(
        <>
            <div className='login-outer-container'>
            <div className='res-msg-container'>
                <h3 className='res-msg'>{!data ? "" : data}</h3>
            </div>
            <div className="login-container">
                {/* <h3 className='res-msg'>{!data ? "" : data}</h3> */}
                <h2>Log in</h2>
                <form>
                    <label>Email:
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        required
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        />
                        {isEmailWrong && <p className='wrong-msg'>You have entered an invalid email address!</p>}
                    </label>
                    <label>Password:
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Enter your password"
                            required
                            value={inputs.password || ""} 
                            onChange={handleChange} 
                        />
                        {isPassEmpty && (<p className='wrong-msg'>Enter your password</p>)}
                    </label>
                    <button onClick={handleSubmit}>Log in</button>
                    {/* { !isPending && <button onClick={handleSubmit}>Log in</button>}
                    { isPending && <button disabled>Loading...</button>} */}
                    <div className='register-link-container'>
                        <Link className="register-nav-link" to="/register"><button className='register-button'>Create new account</button></Link>
                        {/* <p><a className="nav-links" href="/register">Create new account?</a></p> */}
                    </div>
                    {/* <input type="submit" /> */}
                </form>
            </div>
            </div>
        </>
    );
};

export default Login;