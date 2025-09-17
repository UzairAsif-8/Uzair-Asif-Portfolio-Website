import React from "react";
import photo from "../assets/Images/My-Image.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../App.css";
import "animate.css";
import { h1 } from "framer-motion/client";

function Header() {
  return (
    <div id="home" className="w-full h-screen relative bg-black">
      {/* Background Image */}
      <div className="relative w-full bg-black">
        <img
          className="w-full h-full object-cover sm:object-contain"
          src={photo}
          alt="My Picture"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-5 left-5 md:left-15 flex flex-wrap gap-4 md:gap-6 text-gray-200 text-sm sm:text-base md:text-lg font-light z-20">
        <a href="#home" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-white transition-all duration-300 "></span>
        </a>
        <a href="#about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="relative group">
          Projects
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="relative group">
          Contact
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 z-10">
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
          HI I'M
        </h1>
        <h1 className="text-white font-bold text-5xl sm:text-6xl lg:text-8xl mb-4">
          UZAIR ASIF
        </h1>
        <h1 className="text-gray-400 font-bold text-2xl sm:text-3xl lg:text-6xl mb-6 max-w-[90%] sm:max-w-[70%]">
          <TypeAnimation
            sequence={["FRONTEND DEVELOPER", 2000, "REACT DEVELOPER", 2000]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            deletionSpeed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white font-light text-sm sm:text-base lg:text-lg max-w-xl mb-8">
          I build responsive, dynamic, and user-focused interfaces that bring
          ideas to life. My goal is to craft seamless digital experiences that
          inspire and engage users.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          {/* Available For Work */}
          <a href="#contact">
            <button className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.8)] hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 flex items-center gap-2 hover:cursor-pointer">
              <span
                className="h-2 w-2 rounded-full bg-green-400 animate__animated animate__flash animate__infinite"
                style={{ animationDuration: "2s" }}
              ></span>
              Available For Work
            </button>
          </a>

          {/* Resume Download */}
          <a href="/Uzair's Resume.pdf" download>
            <button className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.8)] hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 flex items-center gap-2 hover:cursor-pointer">
              Resume <FaArrowUpRightFromSquare className="text-green-400" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
