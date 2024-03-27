import React, { useState } from 'react'
import shortid from 'shortid';
const todoform = (props) => {
  const [text,setText]=useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text:text,
      complete:false,
    });
    setText("");
  }
  
  const handleChange =(e)=>{
    setText(e.target.value);
  };
 

  return (
   <form onSubmit={handleSubmit} >
    <input type="text" className='input-field' onChange={handleChange} value={text}/>
    <button className='btn' onClick={handleSubmit}>Add Todo</button>
   </form>
  )
}

export default todoform
