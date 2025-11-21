import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "IGNOU",
      year: "Pursuing",
    },
    {
      degree: "Full Stack in Python",
      school: "DUCAT, Pitampura",
      year: "Pursuing",
    }
  ];

  return (
    <section id="education" className="py-12 bg-[#e7ecff]">
      {/* Container se max-w-4xl hata diya taaki hum custom alignment kar sakein */}
      <div className="container mx-auto px-6">
        
        {/* 1. HEADING: Center Alignment */}
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0b1b45] flex items-center justify-center gap-3">
              <FaGraduationCap /> My Education
            </h2>
            <p className="text-gray-500 mt-2 text-sm italic">
              "An investment in knowledge pays the best interest."
            </p>
          </div>
        </Reveal>

        {/* 2. CARDS: Left Aligned with Margin */}
        {/* max-w-2xl: Box ki chaudai kam ki */}
        {/* md:ml-12: Desktop par left se extra margin diya */}
        <div className="space-y-6 max-w-2xl md:ml-12">
          {educationData.map((edu, index) => (
            <Reveal key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#1e3a8a] hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a]">{edu.degree}</h3>
                <p className="text-gray-600 font-medium mt-1">{edu.school}</p>
                <p className="text-gray-400 text-sm mt-2 font-semibold">{edu.year}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}