import { useEffect, useState, useContext, useRef } from "react"
import { validate_signup } from "./RegForm" 
import DisplayStatus from "./DisplayStatus";
import { useNavigate } from 'react-router-dom';

function ValidateSignup({onHandled}){
    const {username, password, email} = useContext(validate_signup);
    const [status, setStatus] = useState(null)
    const hasRun = useRef(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(hasRun.current) return;
        hasRun.current = true;

        const checkCredentials = async () => {
            const backendEndpoint = 'http://127.0.0.1:5000/register';

            try {
                const response = await fetch(backendEndpoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({'username':username, 'password':password, 'email': email}),
                });

                const data = await response.json();
                //console.log(data)

                if (response.ok){
                    setStatus("Success");
                    console.log(data["success"]);
                    setTimeout(() => {
                        navigate("/login")
                        if (onHandled) onHandled()
                    }, 2000);
                } else {
                    setStatus("Fail")
                    console.log("ready to go")
                    setTimeout(() => {
                        if (onHandled) onHandled()
                    }, 3000);
                }

            } catch (error){
                alert("Fatal Error. Try again later...")
                if (onHandled) onHandled()
            }

        }
        checkCredentials();

    }, [username]
    )

    console.log("RegMessage state:", status);
    if (status === "Success"){
        return(
            <DisplayStatus type={"Success"} message={"Signup Successful! Redirecting..."}/>
        )
    } else if (status === "Fail"){
        return(
            <DisplayStatus type={"Error"} message={"Username taken. Please try another one"}/>
        )
    }
}

export default ValidateSignup