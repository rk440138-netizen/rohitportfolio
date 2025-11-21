import React from 'react';
import Reveal from "./Reveal"; 
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaGitAlt, FaLaptopCode, FaTools } from 'react-icons/fa';
import { SiJavascript, SiVite,SiTailwindcss,SiNetlify } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
  
  
  const skills = [
    { icon: <FaHtml5 size={50} color="#E34F26" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, name: 'CSS3' },
    { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: 'Tailwind' },
    { icon: <FaBootstrap size={50} color="#7952B3" />, name:'Bootstrap' },
    { icon: <SiJavascript size={50} color="#F7DF1E" />, name:'JavaScript' },
    { icon: <FaReact size={50} color="#61DAFB" />, name: 'ReactJS' },
  ];


    const tools = [

    { icon: <VscVscode size={50} color="#007ACC" />, name: 'VS Code' },
    { icon: <FaGithub size={50} color="#ffffff" />, name: 'GitHub' },
    { icon: <FaGitAlt size={50} color="#F05032" />, name: 'Git' },
    { icon: <SiVite size={50} color="#646CFF" />, name: 'Vite' },
    { icon: <SiNetlify size={50} color="#00C7B7" />, name: 'Netlify' }
  ];

  return (
    <section id="skills" className="py-15 bg-linear-to-b from-[#420eaa] to-[#8e2de2] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
      
        <Reveal width="100%">
          <div className="flex items-center justify-center gap-3 mb-12">
             <div className="bg-white text-[#4a00e0] p-2 rounded">
                <FaLaptopCode size={24} />
             </div>
             <h3 className="text-4xl font-bold">Tech Stack</h3>
          </div>
        </Reveal>
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-24">
          {skills.map((item, index) => (
            <Reveal key={index}>
              <div className="bg-[#111111] p-6 rounded-xl transition-transform duration-300 shadow-2xl border-b-4 border-transparent hover:border-[#ffffff] group flex flex-col justify-center items-center h-full">
                <div className="flex justify-center mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition">
                    {item.icon}
                </div>
                <p className="font-medium text-small text-gray-200">{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>


        <Reveal width="100%">
          <div className="flex items-center justify-center gap-3 mb-12">
             <div className="bg-white text-[#4a00e0] p-2 rounded">
                <FaTools size={24} />
             </div>
             <h3 className="text-4xl font-bold">Tools I Use</h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center justify-center">
          {tools.map((item, index) => (
            <Reveal key={index}>
              <div className="bg-[#111111] p-6 rounded-xl  transition-transform duration-300 shadow-2xl border-b-4 border-transparent hover:border-[#ffffff] group">
                <div className="flex justify-center mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition">
                    {item.icon}
                </div>
                <p className="font-medium text-lg text-gray-200">{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}