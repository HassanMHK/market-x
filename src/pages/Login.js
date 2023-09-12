import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavbarClean from "../components/cleanNavbar";
import { ValidateEmail, CheckEmpty } from "../functions/marketFunctions";

const Login = () => {
    
    const [inputs, setInputs] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPassEmpty, setIsPassEmpty] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

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
        setIsEmailEmpty(false);
        if(!ValidateEmail(loginData.email) || !CheckEmpty(loginData.email)){
            if(!CheckEmpty(loginData.email)){
                setIsEmailEmpty(true);
            }else{
                setIsEmailWrong(true);
            }
        }else if(!CheckEmpty(loginData.password)){
            setIsPassEmpty(true);
        }else{
            setTimeout(() => {
                navigate('/');
            }, 1000);
            // fetch('/login', {
            //     method: 'POST',
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(loginData)
            // }).then((res) => res.json())
            // .then((data) => {setData(data.message);
            //     setIsPending(false);
            //     if(data.condition === "ok"){
            //         navigate('/');
            // }})
        }
    }

    return(
        <div className='log-reg-container'>
            <NavbarClean />
            <div className='login-outer-container'>
            <div className='res-msg-container'>
                <h3 className='res-msg'>{!data ? "" : data}</h3>
            </div>
            <div className="login-container">
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
                        {isEmailEmpty && <p className='wrong-msg'>You need to enter your email address!</p>}
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
                    <div className='register-link-container'>
                        <Link className="register-nav-link" to="/register"><button className='register-button'>Create new account</button></Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;