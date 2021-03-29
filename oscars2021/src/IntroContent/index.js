import React from 'react';

const IntroContent = (props) => {
  return (
    <>
      <h1>Welcome, {props.userName}!</h1>
      <h2>To Sam's Famous Annual Oscars Showdown 2021!</h2>
      <p>Please make your selections for the 93rd Academy Awards below.</p>
      <small>You can come back and change them any time before the event starts on Sunday, April 25, 2021 at 8:00 PM Eastern Time</small>
    </>
  );
};

export default IntroContent;