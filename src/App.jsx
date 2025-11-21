import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Education from './components/Education';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Education/>
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}