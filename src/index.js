import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import  App  from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import { router } from 'router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} fallbackElement={<div>Loader...</div>}>
      <App />
  </RouterProvider>
  </React.StrictMode>
);
