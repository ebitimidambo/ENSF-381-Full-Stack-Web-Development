import { useEffect, useState, useContext, useRef } from "react"
import { LoginContext } from "./LoginForm";
import DisplayStatus from "./DisplayStatus";
import { useNavigate } from 'react-router-dom';


function AuthMessage({onHandled}){
    const {username, password} = useContext(LoginContext)
    const [state, setStatus] = useState(null)
    const hasRun = useRef(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(hasRun.current) return;
        hasRun.current = true
        
        const checkCredentials = async () => {
                console.log(username)
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const users = await response.json();
            
                    const user = users.find(user => user.username === username && user.email === password);
            
                    if (user) {
                        console.log("Success")
                        setStatus("Success")
                        setTimeout(() => {
                            navigate("/courses")
                            if (onHandled) onHandled()
                        }, 2000);
                    } else {
                        setStatus("Fail")
                        console.log("Fail")
                        setTimeout(() => {
                            if (onHandled) onHandled()
                        }, 3000);
                    }
                } catch (error) {
                    alert("System error: Failed to fetch data")
                }
        };
        console.log("called")
        checkCredentials();

        }, [username, password]
    )

    console.log("AuthMessage state:", state);
    if (state === "Success"){
        return(
            <DisplayStatus type={"Success"} message={"Login Successful! Redirecting..."}/>
        )
    } else if (state === "Fail"){
        return(
            <DisplayStatus type={"Error"} message={"Invalid username or password"}/>
        )
    }

}

export default AuthMessage