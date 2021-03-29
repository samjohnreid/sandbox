import React from 'react';

const Header = (props) => {
  return (
    <header>
      <p>[ header content goes here... and this is samsProp: {props.samsProp} ]</p>
    </header>
  );
};

const Footer = () => {
  return (
    <header>
      <p>[ footer content goes here... weeeee!!!! ]</p>
    </header>
  );
};

const App = () => {
  return (
    <>
      <Header samsProp="hello!" />
      <Footer />
    </>
  );
};

export default App;