import React from 'react';
import './App.css';

function App() {
  const letters = [
    ['e', 'r', 'w', 't', 'a', 'ą'],
    ['o', 't', 'o', 't', 'w', 'a'],
    ['g', 'a', 'n', 'k', 'e', 'a'],
    ['b', 'j', 'o', 'a', 'b', 'o'],
    ['l', 'i', 'd', 'e', 'r', 'ś'],
    ['g', 'b', 'n', 'h', 'w', 'e'], //from 6 first arrays, first letter is double points bonus
    ['ę', 'ż', 'n', 'z', 'l', 'r'],
    ['i', 't', 'ł', 's', 'y', 'd'],
    ['o', 's', 'e', 'i', 's', 't'],
    ['y', 'ć', 'r', 'e', 'l', 't'],
    ['p', 'o', 'a', 'c', 's', 'h'],
    ['i', 'o', 'c', 'm', 't', 'u'],
    ['f', 'c', 'a', 'p', 's', 'k'],
    ['l', 'd', 'r', 'e', 'y', 'ź'],
    ['e', 's', 'u', 'e', 'i', 'k'],
    ['ł', 'n', 'u', 'i', 'h', 'm']
  ];

  const tab = [];
  for (let i = 0; i < letters.length; i++) {
    const drawnIndex = Math.floor(Math.random() * letters[i].length);
    const letter = letters[i][drawnIndex];
    tab.push(letter);
  }
  const shuffledTab = tab;
  shuffledTab.sort(() => Math.random() - 0.5);
  console.table(shuffledTab);

  return (
    <div className="App">
      <p>tablica</p>
    </div>
  );
}

export default App;
