import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';
import Certificate from './components/Certificate';

const App = () => {
  return (
    <div class="vg-main-wrapper">
      <Home />
      <About />
      <Service/>
      <Portfolio />
      <Certificate/>
      <Project/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
