import React from "react";
import Reveal from "./Reveal"; 
import { FaLaptopCode, FaGithub, FaHammer } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-[#0a192f] text-gray-100 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        
        {/* ✨ HEADING KO CENTER KARNE KE LIYE WRAPPER ADD KIYA ✨ */}
        <div className="flex justify-center mb-10">
            <Reveal>
            <h3 className="text-4xl md:text-4xl font-bold text-center tracking-tight">
                Featured <span className="text-[#64ffda]">Projects</span>
            </h3>
            </Reveal>
        </div>

        {/* GLASSMORPHISM CARD */}
        <Reveal>
          {/* ✨ 'ml-15' hata diya taaki card perfectly center ho jaye ✨ */}
          <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 text-center shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-500 group ml-15">
            
            {/* Floating Icon Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#64ffda] blur-xl opacity-20 rounded-full animate-pulse"></div>
                <div className="relative bg-[#112240] p-6 rounded-2xl border border-[#64ffda]/30 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                  <FaLaptopCode size={50} className="text-[#64ffda]" />
                </div>
                <div className="absolute -right-2 -bottom-2 bg-[#1e3a8a] p-2 rounded-full border border-gray-600 animate-bounce">
                    <FaHammer size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-3xl font-extrabold mb-4 text-white">
              Projects in <span className="text-transparent bg-clip-text bg-linear-to-r from-[#64ffda] to-[#0077b5]">Development</span>
            </h4>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-xl mx-auto">
              I'm currently building some <br /> high-quality <strong>Full-Stack & Frontend</strong> applications. <br /> 
              Writing clean code and setting up the architecture.
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full max-w-md mx-auto mb-6">
                <div className="flex justify-between text-xs font-mono text-[#64ffda] mb-2">
                    <span>Build Status</span>
                    <span>45%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-[#0077b5] to-[#64ffda] w-[45%] rounded-full shadow-[0_0_10px_#64ffda] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                <div className="text-xs text-gray-500 mt-2 font-mono text-left">
                    UI/UX Polishing complete... <br/>
                    Setting up API infrastructure...
                </div>
            </div>

            {/* Button */}
            <a 
              href="https://github.com/your-id" 
              target="_blank" 
              rel="noreferrer"
              className="
                inline-flex items-center gap-3 px-8 py-4 
                bg-[#112240] border border-[#64ffda] text-[#64ffda] font-bold rounded-full 
                shadow-[0_0_15px_rgba(100,255,218,0.1)]
                hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)]
                transition-all duration-300 transform hover:scale-105
              "
            >
              <FaGithub size={22} /> Check Code on GitHub
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}