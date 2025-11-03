import React, { useState } from "react";
import courseImage from "../images/course2.jpg";
import "../App.css";

const CourseItem = ({ course, onEnroll }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="course-card"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={courseImage} alt={course.name} className="course-image" />
      <div className="course-info">
        <h3>{course.name}</h3>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Credit Hours:</strong> {18}</p>
        <p><strong>Course Code:</strong> {course.id}</p>
        {showDescription && <p className="course-description">{course.description}</p>}
        <button className="enroll-btn" onClick={() => onEnroll(course)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseItem;