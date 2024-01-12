import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/appRouter';
import reportWebVitals from './reportWebVitals';
import {DogProvider} from "./providers/dogProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DogProvider>
      <AppRouter />
    </DogProvider>
  </React.StrictMode>
);

reportWebVitals();
