import courses from "../data/courses"

function CourseRender(value){
    return(
        <div>
            <img src={courses[value.value].image} alt="Course" width="250"></img>
            <p><b>Course Name:</b> {courses[value.value].name}</p>
            <p><b>Course Instructor:</b> {courses[value.value].instructor}</p>
            <p><b>Course Description:</b> {courses[value.value].description}</p>
            <p><b>Course Duration:</b> {courses[value.value].duration}</p>
        </div>
    )
}

export default CourseRender