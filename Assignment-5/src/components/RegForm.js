import { Link } from "react-router-dom"
import { useEffect, useState, createContext } from "react"
import ValidateSignup from "./RegMessage"
export const validate_signup = createContext(null);

function RegForm(){
    const [signupClicked, setSignupClicked] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [errorDisplay, setErrorDisplay] = useState(null)
    const [errorMessageU, setMessageU] = useState(null)
    const [errorMessageE, setMessageE] = useState(null)
    const [errorMessageP, setMessageP] = useState(null)
    const [errorMessageC, setMessageC] = useState(null)

    const userChange = (event) => {
        setUsername(event.target.value)
    }
    
    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const emailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const cPasswordChange = (event) => {
        setCPassword(event.target.value)
    }

    const validateLogin = async (event, username, email, password, cpassword) => {
        event.preventDefault();

        const username_pattern = /^[A-Za-z][A-Za-z0-9-_]{2,19}$/;
        const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=\+\[\]{}\\|;:'",.<>\/?`~])[A-Za-z0-9!@#$%^&*()\-_=\+\[\]{}\\|;:'",.<>\/?`~]{8,}$/;
        const email_pattern = /^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
        var met_requirements = true;

        if (!username_pattern.test(username)) {
            met_requirements = false;
            console.log("Username invalid")
            setMessageU("Error: Invalid Username")
            setErrorDisplay(true)
        }
        console.log(email_pattern.test("crazy@gmail.com"));
        if (!email_pattern.test(email)) {
            met_requirements = false;
            console.log("Email invalid")
            setMessageP("Error: Invalid Email Address")
            setErrorDisplay(true)
        }

        if (!password_pattern.test(password)) {
            met_requirements = false;
            console.log("Password invalid")
            setMessageE("Error: Invalid Password")
            setErrorDisplay(true)
        }

        if (password !== cpassword) {
            met_requirements = false;
            console.log("Passwords do not match")
            setMessageC("Error: Passwords do not match")
            setErrorDisplay(true)
        }

        if(met_requirements == true){
            setSignupClicked(true);
        } else {
            setTimeout(() => {
                setErrorDisplay(false)
                setMessageU(null)
                setMessageE(null)
                setMessageP(null)
                setMessageC(null)
            }, 3000);
        }
    }
   
    return(
        <div>
            <main id="signupmain">
                <h2>LMS Signup</h2>

                <form id="signup-form" onSubmit={(e) => validateLogin(e, username, email, password, cpassword)}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={userChange}></input><br></br><br></br>
            
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required onChange={emailChange}></input><br></br><br></br>
            
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={passwordChange}></input><br></br><br></br>
            
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required onChange={cPasswordChange}></input>

                    <div id = "signup">
                        <button type="submit" id="signupbutton">Sign Up</button>
                    </div>
                </form>
                {errorDisplay &&  
                    <div className = "Error">
                       {errorMessageU != null && <p>{errorMessageU}</p>}
                       {errorMessageE != null && <p>{errorMessageE}</p>}
                       {errorMessageP != null && <p>{errorMessageP}</p>}
                       {errorMessageC != null && <p>{errorMessageC}</p>}
                    </div>
                }
                {signupClicked &&  
                    <validate_signup.Provider value={{username, password, email}}>
                        <ValidateSignup onHandled = {() => setSignupClicked(false)}/>
                    </validate_signup.Provider>
                }
                <br></br>
                <div id = "links">
                    <Link to={"/login"}>Already have an account? Log in</Link>
                </div>
            </main>
        </div>
    )
}

export default RegForm;