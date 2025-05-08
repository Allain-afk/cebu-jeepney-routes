import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './react-app-env.d';

// Create a root for concurrent mode
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendering with StrictMode for development checks
// and ErrorBoundary for graceful error handling
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
); 