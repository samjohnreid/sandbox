import React from 'react';
import styled from 'styled-components';

// Styled component named StyledButton
const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color: ${props => props.bg === 'black' ? 'black' : 'blue'};
`;

const MainContent = () => {
  return (
    <section className="main-content">
      <h1>This is the main content area.</h1>
      <p>Blah blah blah.</p>
      <StyledButton bg="blue" type="submit" onClick={() => alert('clicked!')}>Hello</StyledButton>
      <img src="http://placekitten.com/600/300" alt="" />
    </section>
  );
}

export default MainContent;