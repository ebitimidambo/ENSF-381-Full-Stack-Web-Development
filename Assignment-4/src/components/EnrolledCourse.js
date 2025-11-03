import React from "react";
import courseImage from "../images/course1.jpg"; 
import "../App.css";

const EnrolledCourse = ({ course, onDrop }) => {
  return (
    <div className="course-card">
        <img src={courseImage} alt={course.name} className="course-image" />
        <h3>{course.name}</h3>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <button className="drop-btn" onClick={() => onDrop(course)}>
        Drop Course
      </button>
    </div>
  );
};

export default EnrolledCourse;