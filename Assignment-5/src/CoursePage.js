import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCatalog from "./components/CourseCatalog";
import EnrollmentList from "./components/EnrollmentList";
import "./App.css";


const CoursesPage = () => {
  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog />
        <EnrollmentList />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoursesPage;