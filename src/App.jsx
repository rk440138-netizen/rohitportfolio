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

  // ✨ Dynamic Title Logic
  useEffect(() => {
    // 1. Save the original title (e.g., "Rohit | Portfolio")
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      // 2. Check if user switched tab
      if (document.hidden) {
        document.title = "Come back to Portfolio! 😭";
      } else {
        // 3. Restore original title when they come back
        document.title = originalTitle;
      }
    };

    // Add event listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup (Remove listener when component unmounts)
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