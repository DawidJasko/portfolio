import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';
// import { Parallax } from '@react-spring/parallax'
// import { useRef } from "react";

function App() {
  // const ref = useRef()
  return (
    <>
      {/* <Parallax pages={5} ref={ref}> */}
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      {/* </Parallax> */}
    </>
  );
}

export default App;
