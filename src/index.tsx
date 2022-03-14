import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import { auth } from './firebase';
import AuthProvider from '../src/provider/authProvider';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

console.log(auth);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
