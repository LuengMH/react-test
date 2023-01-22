import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.documentElement.style.font = 100 / 750 + 'vw';
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
