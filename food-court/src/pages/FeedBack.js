import React, { useState } from 'react';
import axios from 'axios';
import '../css/Feedback.css'; // Ensure correct path to your CSS file

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    email: '',
    feedback: '',
    stars: '',
    issues: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/feedback', formData);
      alert('Feedback submitted successfully!Thank you 😊');
      setFormData({
        email: '',
        feedback: '',
        stars: '',
        issues: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Main-Container">
      <div className="bd-Paper">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Feedback"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
          <input
            type="number"
            name="stars"
            placeholder="Stars (1-5)"
            value={formData.stars}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
          <input
            type="text"
            name="issues"
            placeholder="Issues"
            value={formData.issues}
            onChange={handleChange}
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}