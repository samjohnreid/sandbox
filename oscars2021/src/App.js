import React from 'react';
import IntroContent from './IntroContent';
import UserVotes from './UserVotes';
import ResultsTable from './ResultsTable';
import SelectWinners from './SelectWinners';

const App = () => {
  return (
    <>
      <IntroContent userName="dominic" />
      <hr />
      <UserVotes />
      <hr />
      <ResultsTable />
      <hr />
      <SelectWinners />
    </>
  );
};

export default App;