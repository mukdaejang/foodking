import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@/store';
import App from '@/App';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

ReactDOM.hydrate(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <HelmetProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </HelmetProvider>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
