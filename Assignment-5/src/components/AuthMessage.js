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
                const backendEndpoint = 'http://127.0.0.1:5000/login';

                try {
                    const response = await fetch(backendEndpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({'username':username, 'password':password}),
                    });

                    const data = await response.json();

                    if (response.ok){
                        setStatus("Success");
                        console.log(data["success"]);
                        localStorage.setItem("studentId",data.Id)
                        setTimeout(() => {
                            navigate("/courses")
                            if (onHandled) onHandled()
                        }, 2000);
                    } else {
                        setStatus("Fail")
                        console.log("ready to go")
                        setTimeout(() => {
                            if (onHandled) onHandled()
                        }, 3000);
                    }
                } catch (error) {
                    alert("System error: Failed to fetch data")
                }
        }
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