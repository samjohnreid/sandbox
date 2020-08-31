import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    username: 'samuel10000'
  }

  changeUsername = (newUsername) => {
    this.setState({
      username: newUsername
    });
  }

  changeUsernameInput = (event) => {
    console.log(event);
    this.setState({
      username: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.changeUsernameInput} startingUsername={this.state.username} />
        <UserOutput text="Hello, this is the first use of the UserOutput component..." />
        <UserOutput text="... and this is the second!" />
        <UserOutput text="I'm passing this paragraph text down through as a prop - woot!" username={this.state.username} />
        <div><button onClick={this.changeUsername.bind(this, 'helloooo!')}>Click me to update state! (username)</button></div>
      </div>
    );
  }
}

export default App;
