import React from 'react';
import { Provider } from 'react-redux';

import Container from '../Container/Container';
import store from '../../store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
