import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CSSReset from '@tds/core-css-reset'

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
