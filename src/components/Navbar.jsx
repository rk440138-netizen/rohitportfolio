import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "education", text: "Education" },
    { id: "projects", text: "Work" },       
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-white shadow-md z-50">
      
      {/* Logo */}
      <div className="text-3xl font-bold text-[#0b1b45]">
        Rohit
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-[#0b1b45]">
        {links.map((link) => (
          <li key={link.id} className="cursor-pointer">
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              spy={true} 
              exact="true"
              offset={-80} 
              activeClass="text-[#4726ff] border-b-2 border-[#4726ff]" // Active link par bhi line dikhegi
              // CHANGE HERE: Added border hover effects
              className="hover:text-[#4726ff] border-b-2 border-transparent hover:border-[#4726ff] pb-1 transition duration-300"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer text-[#0b1b45]">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-[#0b1b45]">
          {links.map((link) => (
            <li key={link.id} className="px-4 cursor-pointer py-6 text-2xl capitalize">
              <Link
                onClick={() => setNav(false)}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}