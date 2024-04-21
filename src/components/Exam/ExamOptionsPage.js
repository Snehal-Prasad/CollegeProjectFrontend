// ExamOptionsPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./examOptions.css"; // Import CSS file for ExamOptionsPage

const ExamOptionsPage = () => {
  return (
    <div className="exam-options-container">
      <div className="exam-option">
        <h3>C++ Exam</h3>
        <p>Description of C++ Exam</p>
        <Link to="/exams/cpp">Start Exam</Link> {/* Link to C++ MCQ exam */}
      </div>
      <div className="exam-option">
        <h3>Java Exam</h3>
        <p>Description of Java Exam</p>
        <Link to="/exams/java">Start Exam</Link>
      </div>
      <div className="exam-option">
        <h3>Python Exam</h3>
        <p>Description of Python Exam</p>
        <Link to="/exams/python">Start Exam</Link>
      </div>
    </div>
  );
};

export default ExamOptionsPage;

