import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div className="work">
        <Work />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
