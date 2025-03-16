import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // In a real app, you would send the form data to your backend here
    // For this demo, we'll simulate a successful submission

    // Simulate API call delay
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Sending message...'
    });

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Your message has been sent successfully. I will get back to you soon!'
      });

      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Me</h1>

        <div className="contact-info">
          <p>
            Want to work together? Have a question about my services? Feel free to reach out using the contact form below or through the following channels:
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <p>hello@tristanviney.com</p>
            </div>

            <div className="contact-method">
              <h3>Location</h3>
              <p>[Your City], [Your Country]</p>
            </div>

            <div className="contact-method">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://behance.net/" target="_blank" rel="noreferrer">Behance</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>

          {formStatus.message && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={formStatus.submitted}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={formStatus.submitted}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={formStatus.submitted}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={formStatus.submitted}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={formStatus.submitted}
            >
              {formStatus.submitted ? 'Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;