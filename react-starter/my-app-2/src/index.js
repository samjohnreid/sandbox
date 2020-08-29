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

// ========================================

// Destructuring

let samsNum1, samsNum2, samsNum5;

const numbers = [1, 2, 3, 4, 5];

[samsNum1, samsNum2, , , samsNum5] = numbers;

console.log('samsNum1: ', samsNum1);

console.log('samsNum2: ', samsNum2);

console.log('samsNum5: ', samsNum5);

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

const { name, realName } = hero;

console.log('name', name);

console.log('realName', realName);

// ========================================

// Reference Type (vs. Primitive Type)

let myName = 'Samuel';

let myCopiedName = myName;

console.log('myName: ', myName);

myName = 'Dominic';

console.log('myCopiedName: ', myCopiedName);

// -----

let person = {
  name: 'Samuel' // marker, see comment below
};

let copiedPerson = {...person};
/* if i ever copy an object (reference type) then
i need to basically duplicate the array like
this (by spreading in the original) otherwise
it just copies the marker vs. the actual data, so
the copied version will update when the
original updates */

console.log('person.name: ', person.name);

person.name = 'Dominic';

console.log('copiedPerson.name: ', copiedPerson.name);

// ========================================

// Refresher on Array Functions

// Array.map()

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersArrayMapped = numbersArray.map((arrayElement) => {
  console.log(arrayElement + ' * 2 = ' + arrayElement * 2);
  return arrayElement * 2;
});

console.log('numbersArrayMapped: ', numbersArrayMapped);

// Array.find()

const namesArray = ['Sam', 'Dom', 'Bianca', 'Archer'];

const found = namesArray.find((el) => {
  return el === 'Archer';
});

console.log('found: ', found);

// Array.findIndex()

const namesArray2 = ['Sam', 'Dom', 'Bianca', 'Archer'];

const found2 = namesArray2.findIndex((el) => {
  return el === 'Dom';
});

console.log('found: ', found2);

// Array.filter()

const heroes = [
  {name: 'Batman', universe: 'DC'},
  {name: 'Black Panther', universe: 'Marvel'},
  {name: 'Superman', universe: 'DC'},
  {name: 'Thor', universe: 'Marvel'},
  {name: 'Wonder Woman', universe: 'DC'},
  {name: 'Iron Man', universe: 'Marvel'}
];

const marvelHeroes = heroes.filter((el) => {
  return el.universe === 'Marvel';
});

const dcHeroes = heroes.filter((el) => {
  return el.universe === 'DC';
});

console.log('heroes: ', heroes);
console.log('marvelHeroes: ', marvelHeroes);
console.log('dcHeroes: ', dcHeroes);

// Array.concat()

const arrayConcatOne = ['Black Panther', 'Iron Man', 'Thor'];
const arrayConcatTwo = ['Hulk', 'Captain America', 'Captain Marvel'];
const arrayConcatThree = arrayConcatOne.concat(arrayConcatTwo);
console.log('arrayConcatThree: ', arrayConcatThree);

// Array.slice()

const movies = [
  'Goodfellas',
  'Star Wars',
  'Pulp Fiction',
  'Reservoir Dogs',
  'Citizen Kane',
  'Double Indemnity',
  'The Lives of Others',
  'Bill and Ted\'s Excellent Adventure',
  'Police Academy',
  'Rambo'
];

console.log('movies: ', movies);

const moviesSliced = movies.slice(2, 8);

console.log('moviesSliced: ', moviesSliced);

// Array.splice()

const movies2 = [
  'Goodfellas',
  'Star Wars',
  'Pulp Fiction',
  'Reservoir Dogs',
  'Citizen Kane',
  'Double Indemnity',
  'The Lives of Others',
  'Bill and Ted\'s Excellent Adventure',
  'Police Academy',
  'Rambo'
];

movies2.splice(1, 3, 'Taxi Driver', 'Spaceballs');

console.log('movies2: ', movies2);





