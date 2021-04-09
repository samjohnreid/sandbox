import React from 'react';
import IntroContent from './IntroContent';
import UserVotes from './UserVotes';
import ResultsTable from './ResultsTable';

const App = () => {
  return (
    <>
      <IntroContent userName="dominic" />
      <hr />
      <UserVotes />
      <hr />
      <ResultsTable />
    </>
  );
};

export default App;