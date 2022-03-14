import { Fragment } from 'react';
import { Header, Footer } from '@/components';
import Router from '@/Router';

function App() {
  return (
    <Fragment>
      <Header />
      <Router />
      <Footer />
    </Fragment>
  );
}

export default App;
