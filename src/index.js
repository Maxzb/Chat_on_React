import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './App';
import './style.css';


ReactDOM.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
  document.getElementById('App')
);

/* if (module.hot) {
  module.hot.accept();
} */