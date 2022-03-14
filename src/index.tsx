import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
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
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
