import CourseRender from "./CourseRender"
import TestimonialRender from "./TestimonialRender"
import React, { useEffect, useState } from 'react';

function MainSection(){
    const [showTestimonial, setShowTestimonial] = useState(false)
    const [courseOne, setCourseOne] = useState(null);
    const [courseTwo, setCourseTwo] = useState(null);
    const [courseThree, setCourseThree] = useState(null);
    const [testOne, setTestOne] = useState(null);
    const [testTwo, setTestTwo] = useState(null);

    var selection = [0,1,2,3,4,5,6,7,8]
    var selectiont = [0, 1, 2, 3]

    const randmoize = (arr, count) => {
        const copy = [...arr];
        const result = [];
        for (let i = 0; i < count; i++){
            const index = Math.floor(Math.random() * copy.length)
            result.push(copy[index])
            copy.splice(index,1)
        }
        return result;
    }

    const [randomOne, randomTwo, randomThree] = randmoize(selection, 3)
    const [randomFour, randomFive] = randmoize(selectiont, 2)

    useEffect(() => {
        const getCourses = async (index, setter) => {
            const backendEndpoint = `http://127.0.0.1:5000/courses?number=${index}`;
            try{
                const response = await fetch(backendEndpoint);
                const data = await response.json();
                setter(data);
            } catch (error){
                alert("System error: Failed to fetch data")
            }
        };

        const getTestimonials = async (index, setter) => {
            const backendEndpoint = `http://127.0.0.1:5000/testimonials?number=${index}`;
            try{
                const response = await fetch(backendEndpoint);
                const data = await response.json();
                setter(data);
            } catch (error){
                alert("System error: Failed to fetch data")
            }
        };

        getCourses(randomOne, setCourseOne)
        getCourses(randomTwo, setCourseTwo)
        getCourses(randomThree, setCourseThree)

        getTestimonials(randomFour, setTestOne)
        getTestimonials(randomFive, setTestTwo)
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
                            <CourseRender course = {courseOne}></CourseRender>
					    </td>
					    <td>
                            <CourseRender course = {courseTwo}></CourseRender>
					    </td>
                        <td>
                            <CourseRender course = {courseThree}></CourseRender>
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
                            {showTestimonial && <TestimonialRender testimonial = {testOne}/>}
					    </td>
					    <td>
                            {showTestimonial && <TestimonialRender testimonial = {testTwo}/>}
					    </td>
				    </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default MainSection;