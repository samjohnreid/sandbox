import React, { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(localStorage.getItem('myReactValueInLocalStorage!') || '');
  // const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('myReactValueInLocalStorage!', value);
  }, [value]);
  
  const onChange = (event) => {
    // localStorage.setItem('myReactValueInLocalStorage!', event.target.value);
    setValue(event.target.value);
  }

  console.log('value: ', value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input alue={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default App;