import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Container from '../Container/Container';
import store from '../../store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
