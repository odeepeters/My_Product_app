// // src/index.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Find the root element
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (!rootElement) {
  throw new Error('Target container is not a DOM element.');
}

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
