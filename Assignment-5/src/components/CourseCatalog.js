import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import CourseRender from "./CourseRender";
import "../App.css";

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const studentId = localStorage.getItem("studentId");

  const loadCourses = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/courses");
      const allCourses = await res.json();

      const enrolledRes = await fetch(`http://127.0.0.1:5000/student_courses/${studentId}`);
      const enrolled = await enrolledRes.json();

      const notEnrolled = allCourses.filter(
        (course) => !enrolled.some((c) => c.id === course.id)
      );

      setCourses(notEnrolled);
    } catch (err) {
      setError("Failed to load courses.");
    }
  };

  useEffect(() => {
    loadCourses();

    const handleUpdate = () => loadCourses();
    window.addEventListener("enrollmentUpdated", handleUpdate);
    return () => window.removeEventListener("enrollmentUpdated", handleUpdate);
  }, []);

  const onEnroll = async (course) => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/enroll/${studentId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      const data = await res.json();

      if (data.success) {
        window.dispatchEvent(new Event("enrollmentUpdated"));
      } else {
        alert(data.message || "Enrollment failed.");
      }
    } catch {
      alert("Error connecting to server.");
    }
  };

  return (
    <section className="pending-section">
      <h2 className="text-format">Course Catalog</h2>
      <hr />
      {error && <p className="error-text">{error}</p>}
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem
              key={course.id}
              course={course}
              onEnroll={onEnroll}
              onClick={() => setSelectedCourse(course)}
            />
          ))
        ) : (
          <p>All courses are enrolled!</p>
        )}
      </div>

      {selectedCourse && (
        <div className="popup-card">
          <CourseRender course={selectedCourse} />
          <button onClick={() => setSelectedCourse(null)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default CourseCatalog;