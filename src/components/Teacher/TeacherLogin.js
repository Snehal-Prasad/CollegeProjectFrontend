import React, { useState } from "react";
import "./teacher.css"; // Import teacher-specific CSS
import axios from "axios"; // Import axios package
const TeacherLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/teacher/login", formData);
      console.log(response.data); // Handle success response
      // Redirect to exam page if login is successful
      // window.location.href = "/exam/options";
      window.location.href = "/setQuestion";
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div className="form-container">
      <h2>Teacher Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;

