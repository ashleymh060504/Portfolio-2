import React, { useState } from 'react';
import "../styles/index.css";
import "../styles/ContactForm.css";

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState('');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    const handleBlur = (field) => {
        if (!field) {
          setErrors((prev) => ({ ...prev, required: 'This field is required' }));
        } else {
          setErrors((prev) => ({ ...prev, required: '' }));
        }
      };  
      
    const handleEmailBlur = () => {
        if (email && !validateEmail(email)) {
          setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
        } else {
          setErrors((prev) => ({ ...prev, email: '' }));
        }
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, message });

    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => handleBlur(firstName)}
          />
        </label>
        {errors.required && !firstName && <span className="error">{errors.required}</span>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => handleBlur(lastName)}
          />
        </label>
        {errors.required && !lastName && <span className="error">{errors.required}</span>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
        </label>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur(message)}
          />
        </label>
        {errors.required && !message && <span className="error">{errors.required}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
