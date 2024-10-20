// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Import Tailwind and custom styles
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
