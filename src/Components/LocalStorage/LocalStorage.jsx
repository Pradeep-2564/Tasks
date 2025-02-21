import { useState, useEffect } from "react"
 import './Local.css'
 
const LocalStorage = ()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [storedData,setStoredData] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState (false);
    const [error, setError] = useState("");
 

    const handleUsernameChange = (event)=>{
        setUsername(event.target.value);
    };
 
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }
 
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    const handleSignUpSubmit = (event)=>{
        event.preventDefault();
 
        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);

        setStoredData({username,email,password});
        setUsername("");
        setEmail("");
        setPassword("");
    };

    const handleLoginSubmit = (event)=>{
        event.preventDefault();
        const savedUsername = localStorage.getItem("username");
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
 
        if(username ===savedUsername && email === savedEmail && password === savedPassword){
            setIsLoggedIn(true);
            setError("");
        } else{
            setIsLoggedIn(false);
            setError("In valid data");
        };
    }
        useEffect(() => {
            const savedUsername = localStorage.getItem("username");
            const savedEmail = localStorage.getItem("email");
            const savedPassword = localStorage.getItem("password");
 
            if(savedUsername && savedEmail && savedPassword){
                setStoredData({username:savedUsername, email:savedEmail, password:savedPassword})
            }
        },[]);
   
    return(
        <div>
            <h2>{isLoggedIn ? 'Welcome Back' : 'Sign Up'}</h2>
        {!isLoggedIn ? (
            <>
            <form onSubmit={handleSignUpSubmit}>
                <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} required/>
                </label>
                </div>
               
                <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required/>
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required/>
                </label>
                </div>
               
                <button type="submit">Sign Up</button>
            </form>
 
            <h3>Login</h3>
            {/* Login Form */}
            <form onSubmit={handleLoginSubmit}>
                <div>
                <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} required/>
                </label>
                </div>
               
                <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required/>
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required/>
                </label>
                </div>
                </div>
                <button type="submit">Login</button>
            </form>
 
            {/* Error message if login fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </>
        ) : (

            <div id="output">
            <p>Username: {storedData.username}</p>
            <p>Email: {storedData.email}</p>
            <p>Password: {storedData.password}</p>
            </div>
        )}
        </div>
    );
 
}
 
export default LocalStorage