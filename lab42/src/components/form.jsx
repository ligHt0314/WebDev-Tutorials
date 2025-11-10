import React, { useState } from 'react';

// This component receives a function 'onFormSubmit' as a prop
// This is how it will send data back up to the parent (App.jsx)
function ContactForm({ onFormSubmit }) {
  // State for form inputs is now managed locally inside this component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // This handleSubmit is local to the form
  const handleSubmit = (event) => {
    // 1. Prevent the default form submit (which reloads the page)
    event.preventDefault();

    // 2. Add this alert, as shown in the PDF examples
    alert(`Form submitted successfully, ${name}!`);

    // 3. Pass the collected data *up* to the parent (App.jsx)
    // by calling the function we received in props
    onFormSubmit({ name, email, message });

    // 4. Reset this component's local form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    // The JSX for the form is moved here
    <form onSubmit={handleSubmit}>
        
      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name} // Tie the input's value to local state
          onChange={(e) => setName(e.target.value)} // Update local state on change
          required
        />
      </div>
      
      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// Export the component so App.jsx can import it
export default ContactForm;
