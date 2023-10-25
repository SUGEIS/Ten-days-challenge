import React, { useState } from 'react';
import './index.css';

const Todo = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  const handleAddClick = () => {
    if (text !== '') {
      const newItem = { text, completed: false }; 
      setItems([...items, newItem]);
      setText('');
    }
  }

  const handleDeleteClick = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  }

  const handleCheckboxChange = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  }

  return (
    <>
      <div className='Header'>TO DO LIST</div>
      <div className='input'>
        <input
          className='box'
          type='text'
          id='text'
          name='text'
          maxLength="50"
          value={text}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddClick}>ADD</button>
      </div>

      <div>
        {items.map((item, index) => (
          <div className='displaytext' key={index}>
            <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              {item.text}
            </span>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <button type="button" onClick={() => handleDeleteClick(index)}> &#215;</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo;
