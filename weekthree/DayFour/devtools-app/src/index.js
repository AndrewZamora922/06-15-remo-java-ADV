import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
