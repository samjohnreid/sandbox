import React from 'react';
import IntroContent from './IntroContent';
import UserVotes from './UserVotes';

const App = () => {
  return (
    <>
      <IntroContent userName="dominic" />
      <UserVotes />
    </>
  );
};

export default App;