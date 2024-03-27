import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSignup from "./components/Student/StudentSignup";
import StudentLogin from "./components/Student/StudentLogin";
import TeacherSignup from "./components/Teacher/TeacherSignup";
import TeacherLogin from "./components/Teacher/TeacherLogin";
import Welcome from "./components/Welcome/Welcome"; // Import Welcome component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/teacher/signup" element={<TeacherSignup />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
};

export default App;