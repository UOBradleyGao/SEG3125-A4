import React, { useState } from "react";

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState({
    experience: "",
    comment: ""
  });

  const handleChange = (e) => {
    setResponse({ ...response, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h2>Feedback Survey</h2>

      {submitted ? (
        <div>
          <h3>Thank you for your feedback!</h3>
          <p>We appreciate your time and hope to see you again soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            How was your experience?
            <select name="experience" onChange={handleChange}>
              <option value="">Select</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="poor">Poor</option>
            </select>
          </label>

          <label>
            Comments:
            <textarea name="comment" onChange={handleChange} rows="4" />
          </label>

          <button type="submit">Submit Survey</button>
        </form>
      )}
    </>
  );
}
