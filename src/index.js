import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ex. version below was from React 17 and no longer supported by React 18
//ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);