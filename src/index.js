import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import { router } from 'router';

// RouterProvider router={router}>
// rout.jsx
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
    </RouterProvider>
  </React.StrictMode>
);
