import React, { useState } from 'react'

export default function IuputBox(props) {
  const addTask = props.addTask;
  const [input,setInput] = useState('');

  const handleInput = (event)=>{
    // console.log(event.target.value);
    let inputvalue = event.target.value;
    setInput(inputvalue);
  };
  const handleClick = ()=>{
    addTask(input);
    setInput('');
    console.log(input);
  };
  return (
    <div>
      <input
      onInput={handleInput}
      value={input}
      >
      </input>
      <button
      onClick={handleClick}
      >
      Submit!
      </button>
    </div>
  )
}
