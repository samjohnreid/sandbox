import React from 'react';

const userInput = (props) => {
  const samsStyles = {
    border: '1px solid black',
    margin: '0 auto',
    padding: '30px',
    width: '500px'
  }
  
  return (
    <div style={samsStyles}>
      <p>Hello, I'm the UserInput component!</p>
      <input type="text" onChange={props.changed} value={props.startingUsername} />
    </div>
  );
}

export default userInput;