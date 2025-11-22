import React, { useEffect } from 'react';
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


  useEffect(() => {
  
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
     
      if (document.hidden) {
        document.title = "Come back to Portfolio!";
      } else {

        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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