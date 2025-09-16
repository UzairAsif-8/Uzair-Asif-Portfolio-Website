import React from "react";
import Tilt from "react-parallax-tilt";
import githubLogo from "../assets/logos/github.png";
import instaLogo from "../assets/logos/instagram.png";
import twitterLogo from "../assets/logos/twitter.png";
import linkedinLogo from "../assets/logos/linkedin.png";

function AboutMeCard() {
  return (
    <div
      id="about"
      className="bg-black px-6 sm:px-8 lg:px-16 py-16 flex justify-center items-center overflow-hidden"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        scale={0.99}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        gyroscope={true}
        tiltEnable={true}
        className="transition-transform duration-300 ease-in-out w-full max-w-5xl"
      >
        <div className="bg-white/10 backdrop-blur-md border border-gray-600 rounded-3xl shadow-lg p-8 sm:p-10 text-white hover:cursor-pointer">
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-center text-gray-200">
            About Me
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
            I’m{" "}
            <span className="font-semibold text-green-400">
              Muhammad Uzair Asif
            </span>
            , a frontend developer passionate about crafting clean, responsive,
            and visually engaging web interfaces. I specialize in building
            user-friendly designs that perform seamlessly across devices,
            blending creativity with functionality. With a strong foundation in
            C++ and Object-Oriented Programming, I write structured and
            maintainable code. I also enhance interfaces with subtle animations
            and interactive elements, ensuring every project is dynamic,
            impactful, and memorable.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/UzairAsif-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/thenameis._.uzair?igsh=MWRlcmx0bGMydHh5OQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instaLogo}
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://x.com/uzairasif_8?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                alt="Twitter"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-uzair-asif-760539369/?originalSubdomain=pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default AboutMeCard;
