import React from 'react';
import Header from './components/Header';
import Minibar from './components/Minibar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Minibar/>
      <Portfolio />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
