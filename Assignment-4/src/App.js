import React from "react"
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage"
import CoursePage from "./CoursePage"
import LoginForm from "./LoginForm"

//Group Number: 4
//Member: Ebitimi Dambo (30207054)
//Member: Erin Kim (30211474)


function App() {
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/login" element = {<LoginForm/>}/>
                <Route path = "/courses" element = {<CoursePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;