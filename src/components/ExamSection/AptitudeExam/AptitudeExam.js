import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./aptitudeExam.css"
const AptitudeExam = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend when the component mounts
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/question');
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelect = (questionId, answer) => {
    // Implement your logic to handle selected answers
  };
  return (
    <div>
      <h1>Aptitude Exam</h1>
      <form>
        {questions.map((question, index) => (
          <div className="question-container" key={question._id}>
            <p>{index + 1}. {question.question}</p>
            <ol className="options-list" type="a">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <input
                    type="radio"
                    id={`option-${optionIndex}`}
                    name={`question${question._id}`}
                    value={option}
                    onChange={() => handleSelect(question._id, option)}
                  />
                  <label htmlFor={`option-${optionIndex}`}>{option}</label>
                </li>
              ))}
            </ol>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AptitudeExam;
