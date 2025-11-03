import { useEffect, useState, createContext } from "react"
import AuthMessage from "./AuthMessage"
import { Link } from "react-router-dom"
export const LoginContext = createContext(null)

function LoginFormComp(){
    const [loginClicked, setLoginClicked] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userChange = (event) => {
        setUsername(event.target.value)
        console.log(username)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }

    const validateLogin = () => {
        var validUsername = username.length > 0
        var validPassword = password.length >= 8

        if (validUsername && validPassword){
            setLoginClicked(true)
        } else {
            if (!validUsername) alert("Username must not be null")
            if (!validPassword) alert("Password must be at least eight characters")
        }
    }

    return(
        <main id="loginmain">
            <h2>LMS Login</h2>

            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"  onChange={userChange} required></input><br></br>
                <label for="password">Password:</label> 
                <input type="password" id="password" name="password" onChange={passwordChange} required></input><br></br>
            </form>
            <div id="login">
                <button id = "loginbutton" onClick={() => validateLogin()}>Login</button>
                <br></br>
                <a href="#">Forgot Password?</a> 
                <br></br>
                <Link to={"/signup"}>Don't have an account? Sign Up</Link>
            </div>
            {loginClicked && (
                <LoginContext.Provider value={{username, password}}>
                    <AuthMessage onHandled = {() => setLoginClicked(false)}/>
                </LoginContext.Provider>
            )}
        </main>
    )
}

export default LoginFormComp