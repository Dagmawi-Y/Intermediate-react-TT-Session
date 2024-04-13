import React, { useState } from 'react';
import './3-dynamic-list.css';

const DynamicList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const addItem = () => {
    const newItem = prompt('Enter a new item:');
    if (newItem) {
      // Create a copy of the current items array and append the new item
      const updatedItems = items.concat(newItem);
      setItems(updatedItems);
    }
  };

  return (
    <div className="dynamic-list">
      <button className="add-btn" onClick={addItem}>
        Add Item
      </button>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
