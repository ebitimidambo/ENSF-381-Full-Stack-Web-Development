import React from "react";

import logo from '../images/course1.jpg'

function CourseRender({ course }) {
  if (!course) return null;

  return (
    <div>
      <img src={logo || "/default-course.jpg"} alt="Course" width="250" />
      <p><b>Course Name:</b> {course.name}</p>
      <p><b>Course Instructor:</b> {course.instructor}</p>
      <p><b>Course Description:</b> {course.description}</p>
      <p><b>Course Duration:</b> {course.duration}</p>
    </div>
  );
}

export default CourseRender;