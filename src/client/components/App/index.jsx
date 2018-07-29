import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../store';
import Router from '../Router';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default hot(module)(App);
