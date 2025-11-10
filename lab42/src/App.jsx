import React, { useState } from 'react';
// 1. Import the new components
import ContactForm from './components/form';
import SubmittedDisplay from './components/submitDisplay';

function App() {
  // 2. The *parent* component now only manages the submittedData state.
  // This is called "lifting state up".
  const [submittedData, setSubmittedData] = useState(null);

  // 3. This function will be passed *down* to ContactForm as a prop.
  // When ContactForm calls it, it will update the state in *this* component.
  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch.</p>
      
      {/* 4. Render the form component.
        We pass our state-updating function to it as a prop.
      */}
      <ContactForm onFormSubmit={handleFormSubmit} />

      {/* 5. Render the display component.
        We pass the current submittedData state to it as a prop.
      */}
      <SubmittedDisplay data={submittedData} />
    </div>
  );
}

export default App;

