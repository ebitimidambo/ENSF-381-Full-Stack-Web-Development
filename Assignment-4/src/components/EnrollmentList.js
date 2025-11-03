import React, { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";
import "../App.css";

const EnrollmentList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const loadEnrolledCourses = () => {
      setEnrolledCourses(JSON.parse(localStorage.getItem("enrolledCourses")) || []);
    };

    loadEnrolledCourses(); 

    const handleEnrollmentUpdate = () => {
      loadEnrolledCourses();
    };

    window.addEventListener("enrollmentUpdated", handleEnrollmentUpdate);

    return () => {
      window.removeEventListener("enrollmentUpdated", handleEnrollmentUpdate);
    };
  }, []);

  const handleDrop = (course) => {
    const updatedCourses = enrolledCourses.filter((c) => c.id !== course.id);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));

    window.dispatchEvent(new Event("enrollmentUpdated"));
  };

  let totalCreditHours = enrolledCourses.reduce((sum, course) => sum + (course.creditHours || 18), 0);

  return (
    <section className="enrolled-section">
      <h2 class = "text-format">Enrolled Courses</h2>
      <hr />
      <p><strong>Total Credit Hours:</strong> {totalCreditHours}</p>
      <div className="course-grid">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <EnrolledCourse key={course.id} course={course} onDrop={handleDrop} />
          ))
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </div>
    </section>
  );
};

export default EnrollmentList;