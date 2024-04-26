import React, { useState } from 'react';
import axios from 'axios';
import './SetAptitudeQuestion.css'; // Import CSS file

const SetAptitudeQuestion = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            if (!file) {
                alert('Please select a file.');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);
            await axios.post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Dataset uploaded successfully!');
        } catch (error) {
            console.error('Error uploading dataset:', error);
            alert('Failed to upload dataset.');
        }
    };

    return (
        <div className="upload-container">
            <h2>Set Aptitude Questions</h2>
            <input type="file" onChange={handleFileChange} className="file-input" />
            <button onClick={handleSubmit} className="upload-button">Upload</button>
        </div>
    );
};

export default SetAptitudeQuestion;
