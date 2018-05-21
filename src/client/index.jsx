import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Global styles from NPM dependencies
import 'normalize.css'; // eslint-disable-line import/first

// Custom global styles
import './index.css';

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
