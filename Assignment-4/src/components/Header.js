import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';

function Headers(){
    return(
        <div>
            <header>
                <img src={logo} alt="LMS Logo"></img>
                <h1>LMS - Learning Management System</h1>
            </header>
            <div>
                <nav>
                    <Link to={"/"}>Home</Link> |
                    <Link to={"/courses"}>Courses</Link> |
                    <Link to={"/login"}>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Headers;