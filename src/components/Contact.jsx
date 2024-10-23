import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle form submission, such as sending the data to an email or API
    console.log(formData);
    alert("Thank you for reaching out! I will get back to you soon.");
    // Clear the form
    setFormData({
      fullName: '',
      email: '',
      telephone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-columns">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              I’m always eager to explore new projects, answer any questions, or simply connect. Feel free to reach out using the form below. If you're interested in a project estimate, complete my questionnaire, and I'll get back to you within a few days.
            </p>
            <div className="availability">
              <p><strong>Accessibility</strong></p>
              <p>Monday to Thursday:</p>
              <p>10:00 a.m. - 6:00 p.m.</p>
              <p>Friday:</p>
              <p>10:00 a.m. - 5:00 p.m.</p>
            </div>
            <div className="contact-details">
              <p><strong>Email: </strong><a href="mailto:ing.mesto2050@gmail.com">ing.mesto2050@gmail.com</a></p>
              <p><strong>Mob:</strong> +49 157 821 78 521</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
