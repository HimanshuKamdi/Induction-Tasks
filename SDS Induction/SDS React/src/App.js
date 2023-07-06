import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route exact path="/about"  element={<About/>}/>
        <Route exact path="/skills"  element={<Skill/>}/>
        <Route exact path="/contact"  element={<Contact/>}/>
      </Routes>
    <Footer/>
    </Router>
    // <>
    // <Navbar/>
    // <Home/>
    // <About/>
    // <Skill/>
    // <Contact/>
    // <Footer/>
    // </>
  );
}

export default App;
