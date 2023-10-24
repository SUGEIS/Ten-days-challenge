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
      setItems([...items, text]); 
      setText(''); 
    }
  }

  const handleDeleteClick = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
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
            {item} <input type="checkbox" />
            <button type="button" onClick={() => handleDeleteClick(index)}> &#215;</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo;



// if (text.trim() !== '')