import React from 'react';
import Reveal from "./Reveal"; 
import { FaLinkedinIn, FaGithub, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Work", id: "projects" },
  ];

  return (
    // 1. Height Reduced: py-16 -> py-10
    <footer className="bg-[#000024] text-gray-300 py-10 relative z-10">
      
      {/* 2. Right & Left Margins Increased: px-10 (mobile) and md:px-32 (desktop) */}
      <div className="container mx-auto px-10 md:px-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Portfolio Info */}
        <Reveal>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Rohit's Portfolio</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/rohit-kashyap-" target="_blank" rel="noreferrer" className="bg-white text-[#000024] p-2 rounded-full hover:bg-[#ffb400] hover:text-white transition duration-300 shadow-lg">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://github.com/rk440138-netizen" target="_blank" rel="noreferrer" className="bg-white text-[#000024] p-2 rounded-full hover:bg-[#ffb400] hover:text-white transition duration-300 shadow-lg">
                <FaGithub size={18} />
              </a>
              <a href="https://www.instagram.com/rohiitttk_?igsh=aHhqZ2V2YmdxbDNw" target="_blank" rel="noreferrer" className="bg-white text-[#000024] p-2 rounded-full hover:bg-[#ffb400] hover:text-white transition duration-300 shadow-lg">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Column 2: Quick Links */}
        <Reveal>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={`#${link.id}`} 
                    className="group flex items-center gap-2 hover:text-[#ffb400] transition duration-300 font-medium"
                  >
                    <span className="bg-white text-[#000024] rounded-full p-1 group-hover:bg-[#ffb400] group-hover:text-white transition">
                        <FaChevronRight size={8} />
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Column 3: Contact Info */}
        <Reveal>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ffb400] text-lg" />
                <span>+91 96672 04722</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#ffb400] text-lg" />
                <span>rk440138@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#ffb400] text-lg" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </Reveal>

      </div>
      <div className="border-t mt-4 border-gray-800 pt-3 text-center text-xs text-gray-500 mb-0">
        © {new Date().getFullYear()} Rohit Kashyap. All rights reserved.
      </div>
    </footer>
  );
}