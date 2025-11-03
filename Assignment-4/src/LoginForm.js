import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import LoginFormComp from './components/LoginForm.js';
import Footer from './components/Footer.js';

function LoginForm() {
    return (
        <div>
            <Header />
            <LoginFormComp/>
            <Footer />
        </div>
    )
}

export default LoginForm