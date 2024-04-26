import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./teacher.css"; // Import teacher-specific CSS

const TeacherSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to the backend endpoint
      const response = await axios.post(
        "http://localhost:4000/api/teacher/signup",
        formData
      );
      console.log("Signup successful!", response.data);
      // Optionally, you can redirect the user or perform other actions upon successful signup
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Teacher Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherSignup;
