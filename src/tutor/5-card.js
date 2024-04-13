import React from 'react';
import './5-card.css';

// This is a reusable Card component that accepts props
const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
