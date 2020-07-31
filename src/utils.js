import { logger } from "./Logger";

export const assertString = (val, name) => {
  if (typeof val !== "string") {
    logger.breakingError(`${name} must be a string but was: ${val}`);
  }
};

export const initialValue = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
`;
