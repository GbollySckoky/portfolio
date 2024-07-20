import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Component/Header/NavBar';
import Hero from './Component/Home/Hero';
import MyWork from './Component/MyWork/MyWork';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';
import Experince from './Component/Experience/Experince';
import Info from './Component/Info/Info';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div id='hero'>
          <Hero />
        </div>
        <div id='myWork'>
          <MyWork />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='experience'>
          <Experince />
        </div>
        <div id='contact'>
          <Projects />
        </div>
        <div id='contact'>
          <Info/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
