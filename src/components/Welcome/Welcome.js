import React, { useState } from "react";
import "./welcome.css"; // Import welcome-specific CSS
import { Link, Routes, Route } from "react-router-dom";
import StudentSignup from "../Student/StudentSignup";
import StudentLogin from "../Student/StudentLogin";
import TeacherSignup from "../Teacher/TeacherSignup";
import TeacherLogin from "../Teacher/TeacherLogin";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="welcome-container">
      <h2>Welcome to the Portal</h2>
      <div className="tabs">
        <button
          className={activeTab === "student" ? "active" : ""}
          onClick={() => setActiveTab("student")}
        >
          Student
        </button>
        <button
          className={activeTab === "teacher" ? "active" : ""}
          onClick={() => setActiveTab("teacher")}
        >
          Teacher
        </button>
      </div>
      <Routes>
        {activeTab === "student" && (
          <>
            <Route path="/" element={<StudentLogin />} />
            <Route path="/student/signup" element={<StudentSignup />} />
          </>
        )}
        {activeTab === "teacher" && (
          <>
            <Route path="/" element={<TeacherLogin />} />
            <Route path="/teacher/signup" element={<TeacherSignup />} />
          </>
        )}
      </Routes>
      {activeTab === "student" && (
        <p>
          Don't have an account? <Link to="/student/signup">Sign up here</Link>.
        </p>
      )}
      {activeTab === "teacher" && (
        <p>
          Don't have an account? <Link to="/teacher/signup">Sign up here</Link>.
        </p>
      )}
    </div>
  );
};

export default Welcome;
