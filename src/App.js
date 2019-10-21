import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const letters = [
    ['ę', 'ż', 'n', 'z', 'l', 'r'],
    ['i', 't', 'ł', 's', 'y', 'd'],
    ['e', 'r', 'w', 't', 'a', 'ą'],
    ['o', 's', 'e', 'i', 's', 't'],
    ['y', 'ć', 'r', 'e', 'l', 't'],
    ['t', 'o', 'o', 't', 'w', 'a'],
    ['p', 'o', 'a', 'c', 's', 'h'],
    ['a', 'n', 'k', 'e', 'g', 'a'],
    ['i', 'o', 'c', 'm', 't', 'u'],
    ['f', 'c', 'a', 'p', 's', 'k'],
    ['j', 'o', 'a', 'b', 'b', 'o'],
    ['l', 'd', 'r', 'e', 'y', 'ź'],
    ['e', 's', 'u', 'e', 'i', 'k'],
    ['ł', 'n', 'u', 'i', 'h', 'm'],
    ['i', 'd', 'e', 'r', 'l', 'ś'],
    ['b', 'g', 'n', 'h', 'w', 'e']
  ];

  const tab = [];
  for (let i = 0; i < letters.length; i++) {
    const drawnIndex = Math.floor(Math.random() * letters[i].length);
    const letter = letters[i][drawnIndex]
    tab.push(letter);
  }
  console.log(tab);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
