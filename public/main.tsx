import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App.tsx';
import './index.css';
import ErrorBoundary from "../src/src/components/ErrorBoundary/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ErrorBoundary>
          <App />
      </ErrorBoundary>
  </React.StrictMode>,
);
