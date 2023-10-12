import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { useState, useEffect, useRef } from "react";

function App() {
  // const ref = useRef()
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
