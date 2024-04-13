import React from 'react';
import './3-fruit-list.css';

// This component demonstrates rendering lists and using keys
const FruitList = () => {
  // Array of fruits
  const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Mango'];

  return (
    <div className="fruit-list">
      <h2>Fruit List</h2>
      <ul>
        {/* Map over the fruits array and render a list item for each fruit */}
        {fruits.map((fruit, index) => (
          <li key={index} className="fruit-item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
