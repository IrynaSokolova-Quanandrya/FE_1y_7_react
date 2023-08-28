import React from 'react';
import ReactDOM from 'react-dom';
// import 'modern-normalize/modern-normalize.css';
import './index.css';
import { App } from './App';
import { ThemeProvider } from 'styled-components';


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
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root'),
);
