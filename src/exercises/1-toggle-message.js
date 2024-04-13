import React, { useState } from 'react';
import './1-toggle-message.css';

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="toggle-message">
      <button className="toggle-btn" onClick={toggleMessage}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {showMessage && <p className="message">This is the message.</p>}
    </div>
  );
};

export default ToggleMessage;
