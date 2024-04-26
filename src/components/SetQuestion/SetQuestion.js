import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './setQuestion.css'; // Import your CSS file

const SetQuestion = () => {
  return (
    <div className="set-question-container">
      <h2>Set Question</h2>
      <ul>
        <li>
          <Link to="/set-aptitude">Set Aptitude Question</Link>
        </li>
        <li>
          <Link to="/set-reasoning">Set Reasoning Question</Link>
        </li>
        <li>
          <Link to="/set-coding">Set Coding Question</Link>
        </li>
      </ul>
    </div>
  );
};

export default SetQuestion;
