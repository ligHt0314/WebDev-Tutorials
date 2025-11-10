import React from 'react';

// This is a "presentational" component. It just receives data
// via props and displays it.
function SubmittedDisplay({ data }) {
  
  // Conditionally render: If 'data' prop is null, show nothing.
  if (!data) {
    return null;
  }

  // If 'data' exists, show the submitted info.
  return (
    <div className="submitted-data">
      <h2>Submitted Information:</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Message:</strong> {data.message}</p>
    </div>
  );
}

export default SubmittedDisplay;
