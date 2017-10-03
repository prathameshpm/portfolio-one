import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LandingPage from './components/landing-page';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <LandingPage />,
  document.getElementById('app')
);

registerServiceWorker();
