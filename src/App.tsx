import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;