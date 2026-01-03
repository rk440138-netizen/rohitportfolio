import React from "react";
import profileImage from "../assets/profile3.jpg";
import Reveal from "./Reveal";
import { FaChevronRight, FaUser } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#e7ecff]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <Reveal>
            <FaUser className="text-black text-4xl" />
          </Reveal>

          <Reveal>
            <h2 className="text-4xl md:text-4xl font-bold text-black tracking-wide">
              About Me
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

          {/* Profile Image with Tilt */}
          <Reveal>
            <Tilt
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              perspective={1000}
              scale={1}
              transitionSpeed={300}
              gyroscope={true}
              className="w-fit mx-auto"
            >
              <div className="w-[300px] h-[380px] bg-white rounded-[3rem] border-4 border-[#e7ecff] relative overflow-hidden cursor-pointer">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-top transition-all duration-500 hover:grayscale"
                />
              </div>
            </Tilt>
          </Reveal>

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-left">

            <Reveal>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#ff7b00] tracking-wide">
                I'm Rohit
              </h3>
            </Reveal>

            <Reveal>
              <p className="text-xl font-bold text-[#7c3aed]">
                Front-End Developer
              </p>
            </Reveal>

            <Reveal>
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                I am a Front-End Developer based in Delhi, focused on building clean
                and user-friendly web applications. I love turning creative ideas
                into functional code using modern tools. Currently, I’m refining
                my skills in React and exploring backend development to become a
                more versatile developer.
              </p>
            </Reveal>

            <Reveal>
              <div className="space-y-2 text-lg font-medium text-gray-900">
                <p>
                  <span className="text-blue-600 font-bold">Email :</span>{" "}
                  rk440138@gmail.com
                </p>
                <p>
                  <span className="text-blue-600 font-bold">Place :</span>{" "}
                  Delhi, India
                </p>
              </div>
            </Reveal>

            <Reveal>
              <a
                href="#"
                className="
                  mt-6 inline-flex items-center gap-2 px-10 py-4 rounded-lg
                  bg-[#240a7a] text-white text-lg font-bold tracking-wide
                  shadow-[0_10px_20px_rgba(36,10,122,0.4)]
                  transition-transform duration-300 hover:-translate-y-1
                "
              >
                Resume <FaChevronRight size={16} />
              </a>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
