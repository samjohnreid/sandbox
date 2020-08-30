import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Sammers', age: 42 },
      { name: 'Bianca', age: 38 },
      { name: 'Dom', age: 9 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 74 },
        { name: 'Banksy', age: 142 },
        { name: 'Dommers', age: 35 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sammers', age: 74 },
        { name: event.target.value, age: 142 },
        { name: 'Dommers', age: 35 }
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className="App">
        <h1>Hi! I'm a React app, weeee!</h1>
        <button style={style} onClick={() => this.switchNameHandler('Samwise!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Dada!')} changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: Video Games!</Person>
      </div>
    );
  }
}

export default App;
