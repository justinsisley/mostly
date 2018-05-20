import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/auth';
import { RouterProvider } from '../../contexts/router';
import Router from '../Router';

function App() {
  return (
    <BrowserRouter>
      <RouterProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </RouterProvider>
    </BrowserRouter>
  );
}

export default hot(module)(App);
