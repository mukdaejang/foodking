import React from 'react';
import './App.css';
import Header from './components/Header';
import { Global, css } from '@emotion/react';

function App() {
  const reset = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;
  return (
    <div>
      <Global styles={reset} />
      <Header></Header>
    </div>
  );
}

export default App;
