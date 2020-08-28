import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class SamComponent extends React.Component {
  render() {
    return (
      <div>hi sam!</div>
    );
  }
}

function Samfunc(props) {
  return (
    <div>
      <h1>Hi, {props.name}!</h1>
      <p>I see you're {props.age} years old... that's pretty old!</p>
    </div>
  );
}

const app = (
  <div>
    <Samfunc name="Samuel" age="42" />
    <Samfunc name="Bianca" age="38" />
  </div>
);

const samComp = (
  <div>
    <div>Cool!!</div>
    <div>I'm swapping out this div with my cool component... am I starting to PROPER understand this???</div>
    <div>Weeeeeee!!!</div>
  </div>
);

class SamCompTwo extends React.Component {
  render() {
    return (
      <div>
        <div>This also is super cool!</div>
        <div>Yeeeeeehaaaawwww!!!!</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  app,
  document.getElementById('root')
);

ReactDOM.render(samComp, document.getElementById('blue'));

ReactDOM.render(<SamCompTwo />, document.getElementById('yellow'));

// ========================================

// Classes

class SamsCoolClass {

  name = 'Sammers';

  printMyName = () => {
    console.log('My name is ', this.name);
  }

}

const samsCoolClassInstance = new SamsCoolClass();

samsCoolClassInstance.printMyName();

// ========================================

// Spreads! (And Rests)

const oldArray = ['One', 'Two', 'Three'];

console.log('old array: ', oldArray);

const newArray = [...oldArray, 'Four', 'Five', 'Six'];

console.log('new array: ', newArray);

const moreArrayItems = ['Seven', 'Eight', 'Nine'];

const evenNewerArray = [...oldArray, 'Four', 'Five', 'Six', ...moreArrayItems];

console.log('even newer array array: ', evenNewerArray);

const samObjOne = {
  color1: 'Red',
  color2: 'Orange',
  color3: 'Yellow'
}

console.log('samObjOne.color1: ', samObjOne.color1);

const samObjTwo = {
  color4: 'Green',
  color5: 'Blue',
  color6: 'Indigo'
}

const samMergedObject = {...samObjOne, ...samObjTwo, color7: 'Orange'}

console.log('samMergedObject.color7: ', samMergedObject.color7);

console.log('samMergedObject: ', samMergedObject);

// rest

const restFunc = (...args) => {
  return args;
}

const blah = restFunc(1, 2, 3, 4, 5, 6);

console.log(blah);