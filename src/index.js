import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const theme = {
  colors:{
    textColor: '#000',
    bgColor: '#fff',
    warning: 'orange',
    success: 'green',
    error: 'red',
    grey: 'grey',
    button: '#21a912',
    accent: ' #7112ba'
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);
