import CourseRender from "./CourseRender"
import TestimonialRender from "./TestimonialRender"
import React, { useEffect, useState } from 'react';

var selection = [0,1,2,3,4,5,6,7,8]
var selectiont = [0, 1, 2, 3]
var randomIndexOne = Math.floor(Math.random()* selection.length)
var randomOne = selection[randomIndexOne]
selection.splice(randomIndexOne, 1)

var randomIndexTwo = Math.floor(Math.random()* selection.length)
var randomTwo = selection[randomIndexTwo]
selection.splice(randomIndexTwo, 1)

var randomIndexThree = Math.floor(Math.random()* selection.length)
var randomThree = selection[randomIndexThree]
selection.splice(randomIndexThree, 1)

var randomIndexFour =  Math.floor(Math.random()* selectiont.length)
var randomFour = selectiont[randomIndexFour]
selectiont.splice(randomIndexFour, 1)

var randomIndexFive =  Math.floor(Math.random()* selectiont.length)
var randomFive = selectiont[randomIndexFive]
selectiont.splice(randomIndexFive, 1)

function MainSection(){
    const [showTestimonial, setShowTestimonial] = useState(false)

    useEffect(() => {
        setShowTestimonial(true)
    }, []);

    return(
        <main id = "indexmain">
            <section id="about">
                <h2>About LMS</h2>
                <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
                <p>Key Features:</p>
                <ul>
                    <li>Enroll in courses</li>
                    <li>Attempt quizzes</li>
                    <li>View leaderboards</li>
                </ul>

                <h2>Featured Courses</h2>
                <hr></hr>
                <table id = "EnrolledTable">
                    <tbody>
                    <tr id = "row1">
					    <td>
                            <CourseRender value = {randomOne}></CourseRender>
					    </td>
					    <td>
                            <CourseRender value = {randomTwo}></CourseRender>
					    </td>
                        <td>
                            <CourseRender value = {randomThree}></CourseRender>
					    </td>
				    </tr>
                    </tbody>
                </table>

                <h2>Testimonials</h2>
                <hr></hr>
                <table id = "TestimonialTable">
                    <tbody>
                    <tr id = "row2">
					    <td>
                            {showTestimonial && <TestimonialRender value = {randomFour}/>}
					    </td>
					    <td>
                            {showTestimonial && <TestimonialRender value = {randomFive}/>}
					    </td>
				    </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default MainSection;