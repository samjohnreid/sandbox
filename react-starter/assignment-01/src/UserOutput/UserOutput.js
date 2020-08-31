import React from 'react';

const userOutput = (props) => {
  const samsStyles = {
    border: '1px solid black',
    margin: '10px auto',
    padding: '30px',
    width: '500px'
  }
  
  return (
    <div style={samsStyles}>
      <p>{props.text}</p>
      <p>My username is: {props.username}</p>
    </div>
  );
}

export default userOutput;