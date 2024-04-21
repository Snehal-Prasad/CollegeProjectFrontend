import React from 'react';
import { Link } from 'react-router-dom';

import "./examLink.css"

const ExamLinks = () => {
    return (
      <div className='exam-container'>
        <div className="exam-links">
          <h2>Choose an Exam:</h2>
          <ul>
            <li className="aptitude"><Link to="/aptitude">Aptitude Exam</Link></li>
            <li className="reasoning"><Link to="/reasoning">Reasoning Exam</Link></li>
            <li className="coding"><Link to="/coding">Coding Exam</Link></li>
          </ul>
        </div>
        <div className='exam-instructions'>
  <h2>Exam Instructions:</h2>
  <p>Welcome to your examination. Please read the following instructions carefully before starting the exam:</p>
  <ol>
    <li>Ensure that you have only the necessary materials on your desk: writing utensils, blank paper if permitted, and any approved aids as specified by your instructor.</li>
    <li>Silence all electronic devices and place them out of reach. Any use of unauthorized aids or communication devices during the exam will result in disciplinary action.</li>
    <li>Keep your eyes on your own paper at all times. Any form of cheating, including looking at another student's paper, will result in immediate disqualification.</li>
    <li>Listen attentively to any additional instructions provided by the invigilator before starting the exam.</li>
    <li>Write your answers clearly and legibly. Illegible handwriting may result in points being deducted.</li>
    <li>Manage your time wisely. Be mindful of the allotted time for each section or question and pace yourself accordingly.</li>
    <li>If you have any questions or concerns during the exam, raise your hand and wait for assistance. Do not communicate with other students or attempt to leave your seat without permission.</li>
    <li>When you have completed the exam, remain seated until all papers have been collected. Do not leave the examination room until instructed to do so by the invigilator.</li>
    <li>Remember to review your answers if time permits. Ensure that you have responded to all questions before submitting your exam paper.</li>
    <li>Finally, maintain academic integrity throughout the examination process. Honesty and integrity are fundamental to the assessment process and are expected of all students.</li>
  </ol>
  <p>Best of luck, and may you demonstrate your understanding to the best of your ability.</p>
</div>

      </div>

    );
}

export default ExamLinks;
