import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import coursesData from "../data/courses"; 
import "../App.css";

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  const loadCourses = () => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses"))||[];
    setCourses(coursesData.filter(course => !enrolledCourses.some(enrolled => enrolled.id === course.id)));
  };

  useEffect(() => {
    loadCourses(); // Load initially

    // Listen for enrollment updates
    const handleEnrollmentUpdate = () => {
      loadCourses();
    };

    window.addEventListener("enrollmentUpdated", handleEnrollmentUpdate);

    return () => {
      window.removeEventListener("enrollmentUpdated", handleEnrollmentUpdate);
    };
  }, []);

  const onEnroll = (course) => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const updatedEnrolledCourses = [...enrolledCourses, course];
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrolledCourses));

    window.dispatchEvent(new Event("enrollmentUpdated"));
  };

  return (
    <section className="pending-section">
      <h2 class = "text-format">Course Catalog</h2>
      <hr />
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem key={course.id} course={course} onEnroll={onEnroll} />
          ))
        ) : (
          <p>All courses are enrolled!</p>
        )}
      </div>
    </section>
  );
};

export default CourseCatalog;