import React from 'react';
import './Person.css';

const person = (props) => {
  console.log(props);
  return (
    <div className="Person">
      <p onClick={props.click}>I'm { props.name } and I am { props.age } years old!<span> { props.children }</span></p>
      <div>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </div>
  );
}

export default person;