import React, { useState } from 'react';

function App() {
  // State for form inputs, as taught in the PDF (page 93)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State to hold the submitted data to display below
  const [submittedData, setSubmittedData] = useState(null);

  // Function to handle the form submission (PDF page 87)
  const handleSubmit = (event) => {
    // 1. Prevent the default form submit (which reloads the page)
    event.preventDefault(); 

    // Add this alert, as shown in the PDF examples
    alert(`Form submitted successfully, ${name}!`);

    // 2. Set the submitted data into state
    setSubmittedData({ name, email, message });

    // 3. Reset the form fields to empty
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch.</p>
      
      {/* The onSubmit handler is attached to the form element
      */}
      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name} // Tie the input's value to state
            onChange={(e) => setName(e.target.value)} // Update state on change
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

      {/* This section conditionally renders *after* submission.
        The '&&' checks if submittedData exists before trying to render.
      */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
