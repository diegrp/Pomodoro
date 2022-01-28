import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SettingsContextProvider from './Context/SettingsContext';

ReactDOM.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
