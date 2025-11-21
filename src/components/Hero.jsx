import React from "react";
import { TypeAnimation } from "react-type-animation"; 
import ParticleBackground from "./ParticleBackground";
import Reveal from "./Reveal";
// Icons import
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaArrowDown } from "react-icons/fa";

export default function Hero() {

  const socialLinks = [
    { 
      id: 1, 
      icon: <FaLinkedin size={24} />, 
      link: "https://www.linkedin.com/in/rohit-kashyap-", 
      // Hover Color: LinkedIn Blue
      hoverColor: "hover:bg-[#0077b5]" 
    },
    { 
      id: 2, 
      icon: <FaGithub size={24} />, 
      link: "https://github.com/rk440138-netizen", 
      // Hover Color: GitHub Dark
      hoverColor: "hover:bg-[#171515]" 
    },
    { 
      id: 3, 
      icon: <FaInstagram size={24} />, 
      link: "https://www.instagram.com/rohiitttk_?igsh=aHhqZ2V2YmdxbDNw", 
      // Hover Color: Instagram Pink
      hoverColor: "hover:bg-[#E1306C]" 
    },
    { 
      id: 4, 
      icon: <FaGlobe size={24} />, 
      link: "https://your-website.com", 
      // Hover Color: Website Blue
      hoverColor: "hover:bg-[#2563eb]" 
    },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: Text Section */}
        <div className="text-center md:text-left md:pl-10 lg:pl-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1b45] mb-4 leading-snug">
              Hi There,<br />
              <span className="whitespace-nowrap">
                I'm <span className="text-[#ff7b00]">Rohit Kashyap</span>
              </span>
            </h1>
          </Reveal>

          {/* Typewriter Effect: Only Frontend Development */}
           <div className="text-2xl md:text-3xl font-bold text-[#0b1b45] mb-6 flex flex-col md:flex-row gap-2 justify-center md:justify-start">

            <span>I Am Into</span>

            <span className="text-[#b91c1c]">

              <TypeAnimation

                sequence={[

                  'Frontend Development',

                  2000,

                  'Web Designing',

                  2000,

                  'Web Development',

                  2000,

                ]}

                wrapper="span"

                speed={50}

                repeat={Infinity}

              />

            </span>

          </div>

         {/* ABOUT ME BUTTON - EXACT SCREENSHOT MATCH */}
          <Reveal>
             <a 
               href="#about" 
               className="
                 inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white mb-8
                 
                 /* Deep Blue Background */
                 bg-[#180394]
                 
                 /* Soft Blue Glow Shadow (Like Screenshot) */
                 shadow-[0_0_20px_rgba(24,3,148,0.6)]
                 
                 transition-all duration-300 ease-in-out
                 
                 /* HOVER: Shadow gets slightly stronger, No Zoom */
                 hover:shadow-[0_0_30px_rgba(24,3,148,0.8)]
               "
             >
                About Me 
                
                {/* White Circle with Blue Arrow */}
                <span className="bg-white text-[#180394] p-1.5 rounded-full flex items-center justify-center">
                   <FaArrowDown size={12} />
                </span>
             </a>
          </Reveal>

          {/* SOCIAL ICONS (No Movement, Only Color Change) */}
          <Reveal>
            <div className="flex justify-center md:justify-start gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    w-14 h-14 flex items-center justify-center rounded-full shadow-lg
                    bg-[#0f172a] text-[#06b6d4] cursor-pointer
                    transition-all duration-300 ease-in-out
                    
                    /* Removed translate/scale. Only Color Change on Hover */
                    hover:text-white
                    ${social.hoverColor}
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT: CODE CARD (Replaces Photo) */}
        <div className="flex justify-center md:justify-end md:pr-10 lg:pr-20 relative">
            
            {/* Background Blobs */}
            <div className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 left-10"></div>

            {/* THE CODE CARD */}
            <Reveal>
            <div className="relative bg-[#111827] border border-gray-700 rounded-xl shadow-2xl w-[300px] md:w-[400px] overflow-hidden z-10 hover:scale-105 transition-transform duration-500">
                
                {/* Card Header */}
                <div className="bg-[#1f2937] p-4 flex items-center gap-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs text-gray-400 font-mono">Hero.jsx</div>
                </div>

                {/* Code Text */}
                <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                    <p>
                        <span className="text-pink-500">const</span> <span className="text-blue-400">Developer</span> = <span className="text-yellow-400">{`{`}</span>
                    </p>
                    <p className="pl-4">
                        name: <span className="text-green-400">'Rohit Kashyap'</span>,
                    </p>
                    <p className="pl-4">
                        skills: <span className="text-yellow-400">['React','javascript', 'Tailwind']</span>,
                    </p>
                    <p className="pl-4">
                        hardWorker: <span className="text-blue-400">true</span>,
                    </p>
                    <p className="pl-4">
                        problemSolver: <span className="text-blue-400">true</span>,
                    </p>
                    <p className="pl-4">
                        <span className="text-purple-400">hireable:</span> <span className="text-pink-500">function</span>() {`{`}
                    </p>
                    <p className="pl-8">
                        <span className="text-pink-500">return</span> <span className="text-green-400">"Ready to work!"</span>;
                    </p>
                    <p className="pl-4">
                        {`}`}
                    </p>
                    <p>
                        <span className="text-yellow-400">{`}`}</span>
                    </p>
                </div>
            </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
}