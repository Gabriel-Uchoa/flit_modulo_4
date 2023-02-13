import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);

