import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../App.css';
import { ValidateEmail, CheckPassword, checkDate, checkGender } from "../marketFunctions";

const Register = () => {
    
    const [inputs, setInputs] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPassWrong, setIsPassWrong] = useState(false);
    const [isDateWrong, setIsDateWrong] = useState(false);
    const [isGenderWrong, setIsGenderWrong] = useState(false);
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
        const birthday = inputs.birthday;
        const gender = inputs.gender;
        const signUpData = { email, password, birthday, gender};

        console.log(signUpData);

        setIsEmailWrong(false);
        setIsPassWrong(false);
        setIsDateWrong(false);
        setIsGenderWrong(false);

        if(!ValidateEmail(signUpData.email) || !CheckPassword(signUpData.password) || !checkDate(signUpData.birthday) || !checkGender(signUpData.gender)){
            setIsPending(false);
            if(!ValidateEmail(signUpData.email) && !CheckPassword(signUpData.password) && !checkDate(signUpData.birthday) && !checkGender(signUpData.gender)){
                setIsEmailWrong(true);
                setIsPassWrong(true);
                setIsDateWrong(true);
                setIsGenderWrong(true);
            }
            else if(!ValidateEmail(signUpData.email)){
                setIsEmailWrong(true);
            }else if(!CheckPassword(signUpData.password)){
                setIsPassWrong(true);
            }else if(!checkDate(signUpData.birthday)){
                setIsDateWrong(true);
            }else if(!checkGender(signUpData.gender)){
                setIsGenderWrong(true);
            }
        }else{
            fetch('/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(signUpData)
            })
            .then((res) => res.json())
            .then((data) => {
                setData(data.message);
                setIsPending(false);
                // redirect.go(-1); // (-1) go back in history
                setTimeout(() => {
                    redirect.push('/login');
                }, 2000);
                // setTimeout(() => {
                //     window.location = "/login";
                // }, 2000);
            })
        }
    }
    return(
        <>
            <div className='reg-outer-container'>
            <div className='res-msg-container'>
                <h3 className='res-msg'>{!data ? "" : data}</h3>
            </div>
            <div className="register-container">
                <h2>Create a new account</h2>
                <form onSubmit={handleSubmit}>
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
                        {isPassWrong && (<p className='wrong-msg'>Password should be between (8 - 15 characters) <br />which contain at least one lowercase letter, one numeric digit, <br />and one special character</p>)}
                    </label>
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" required value={inputs.birthday || new Date().toISOString().slice(0, 10)} onChange={handleChange}>
                    </input>
                    {isDateWrong && <p className='wrong-msg'>Invalid Year</p>}
                    <label className='radio-title'>Gender:</label>
                    <div className='radio-container'>
                        <input className='radio' type="radio" id="male" name="gender" value="male" onChange={handleChange}></input>
                        <label className='radio-text' htmlFor="male">Male</label>
                        <input className='radio' type="radio" id="female" name="gender" value="female" onChange={handleChange}></input>
                        <label className='radio-text' htmlFor="female">Female</label>
                    </div>
                    {isGenderWrong && <p className='wrong-msg'>You must choose a gender</p>}
                    {/* <button onClick={handleSubmit}>Sign Up</button> */}
                    {/* <button type='submit'>Sign Up</button> */}
                    { !isPending && <button type='submit'>Sign Up</button>}
                    { isPending && <button disabled>Loading...</button>}
                    <div className='login-link-container'>
                        <p><Link className="login-nav-links" to="/login">Already have an account?</Link></p>
                    </div>
                    {/* <input type="submit" /> */}
                </form>
            </div>
            </div>
        </>
    );
};

export default Register;