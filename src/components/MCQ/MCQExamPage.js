// MCQExamPage.js

import React from "react";
import { useParams } from "react-router-dom";
import "./mcqExam.css"; // Import CSS file for MCQExamPage

const MCQExamPage = () => {
  const { examType } = useParams();

  // Hardcoded MCQ questions based on exam type
  let questions = [];
  if (examType === "cpp") {
    questions = [
      {
        question: "What does 'cin' stand for in C++?",
        options: [
          "Console Input",
          "Character Input",
          "Clear Input",
          "None of the above",
        ],
        correctAnswer: "Console Input",
      },
      {
        question: "What is the output of 'cout << 5 / 2;'?",
        options: ["2.5", "2", "2.0", "None of the above"],
        correctAnswer: "2",
      },
      {
        question: "Which keyword is used to define a class in C++?",
        options: ["class", "Class", "define", "None of the above"],
        correctAnswer: "class",
      },
      // Add more questions for C++ exam as needed
    ];
  } else if (examType === "java") {
    questions = [
      {
        question: "What is the correct syntax to create an object in Java?",
        options: [
          "ObjectName = new ObjectType();",
          "ObjectType ObjectName = new ObjectType();",
          "new ObjectType() ObjectName;",
          "None of the above",
        ],
        correctAnswer: "ObjectType ObjectName = new ObjectType();",
      },
      // Add more questions for Java exam as needed
    ];
  } else if (examType === "python") {
    questions = [
      {
        question: "What is the output of print(2**3**2)?",
        options: ["64", "512", "72", "None of the above"],
        correctAnswer: "512",
      },
      // Add more questions for Python exam as needed
    ];
  }

  return (
    <div className="container">
      <h2>{examType ? examType.toUpperCase() : ""} Exam</h2>
      {questions.map((question, index) => (
        <div className="question" key={index}>
          <h3>{question.question}</h3>
          <ul className="options">
            {question.options.map((option, idx) => (
              <li className="option" key={idx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="submit-button">Submit Exam</button>
    </div>
  );
};

export default MCQExamPage;