import React, { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";
import "../App.css";

const EnrollmentList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState(null);
  const studentId = localStorage.getItem("studentId");

  const loadEnrolledCourses = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/student_courses/${studentId}`);
      const data = await res.json();
      setEnrolledCourses(data);
    } catch (err) {
      setError("Failed to load enrolled courses.");
    }
  };

  useEffect(() => {
    loadEnrolledCourses();

    const handleUpdate = () => loadEnrolledCourses();
    window.addEventListener("enrollmentUpdated", handleUpdate);
    return () => window.removeEventListener("enrollmentUpdated", handleUpdate);
  }, []);

  const handleDrop = async (course) => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/drop/${studentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      const data = await res.json();

      if (data.success) {
        window.dispatchEvent(new Event("enrollmentUpdated"));
      } else {
        alert(data.message || "Drop failed.");
      }
    } catch {
      alert("Error dropping course.");
    }
  };

  const totalCreditHours = enrolledCourses.reduce(
    (sum, course) => sum + (course.creditHours || 18),
    0
  );

  return (
    <section className="enrolled-section">
      <h2 className="text-format">Enrolled Courses</h2>
      <hr />
      {error && <p className="error-text">{error}</p>}
      <p>
        <strong>Total Credit Hours:</strong> {totalCreditHours}
      </p>
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
