// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSignup from "./components/Student/StudentSignup";
import StudentLogin from "./components/Student/StudentLogin";
import TeacherSignup from "./components/Teacher/TeacherSignup";
import TeacherLogin from "./components/Teacher/TeacherLogin";
import Welcome from "./components/Welcome/Welcome";
import ExamOptionsPage from "./components/Exam/ExamOptionsPage";
import MCQExamPage from "./components/MCQ/MCQExamPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/teacher/signup" element={<TeacherSignup />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/exam/options" element={<ExamOptionsPage />} />
        <Route path="/exams/:examType" element={<MCQExamPage />} />
        {/* <Route
          path="/exams/cpp/questions"
          element={<MCQExamPage examType="cpp" />}
        />{" "} */}
        {/* Route for displaying C++ MCQ questions */}
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
