import React from 'react';
import './App.css';
import Header from './components/Header';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function App() {
  return (
    <div>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
        `}
      />
      <Header></Header>;
    </div>
  );
}

export default App;
