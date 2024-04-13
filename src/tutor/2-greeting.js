import React, { useState } from 'react';

// This component demonstrates conditional rendering
const Greeting = () => {
  // State variable to determine if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the login state
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="greeting">
      <h2>Conditional Greeting</h2>
      {/* Conditionally render a different message based on the login state */}
      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
      <button onClick={toggleLogin} className="button">
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default Greeting;
