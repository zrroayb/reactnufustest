import React, { useState } from "react";

function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your feedback!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h2 className="feedback-title">We'd Love To Know What You Think</h2>
        <p className="feedback-subtitle">
          Your feedback helps us improve our services
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="feedback-input"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="feedback-input"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="feedback-input feedback-textarea"
            required
          />

          <button type="submit" className="feedback-button">
            Send Feedback
          </button>
        </form>
      </div>
    </section>
  );
}

export default FeedbackSection;
