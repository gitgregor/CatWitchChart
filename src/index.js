import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalDataProvider from './Contexts/Providers/GlobalDataProvider'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalDataProvider>
        <App />
      </GlobalDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


