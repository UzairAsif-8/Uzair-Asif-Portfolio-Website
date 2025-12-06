import React from "react";
import Tilt from "react-parallax-tilt";
import githubLogo from "../assets/logos/github.png";
import instaLogo from "../assets/logos/instagram.png";
import twitterLogo from "../assets/logos/twitter.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import useIsMobile from "./Hooks/useIsMobile"; // adjust path as needed
function AboutMeCard() {
  const isMobile = useIsMobile();
  return (
    <div
      id="about"
      className="bg-black px-6 sm:px-8 lg:px-16 py-16 flex justify-center items-center overflow-hidden"
    >
      <Tilt
        glareEnable={!isMobile}
        glareMaxOpacity={0.1}
        scale={isMobile ? 1 : 0.99}
        tiltMaxAngleX={isMobile ? 0 : 20}
        tiltMaxAngleY={isMobile ? 0 : 20}
        gyroscope={!isMobile}
        tiltEnable={!isMobile}
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
            , the{" "}
            <span className="font-semibold text-blue-400">
              Founder & CEO of Axiolink Systems
            </span>{" "}
            and a full-stack developer passionate about building impactful,
            real-world applications. I lead the company’s vision and strategy,
            manage and inspire the team, and drive projects from concept to
            execution. Beyond leading Axiolink, I have mentored 100+ students
            through bootcamps and workshops, helping them develop practical
            skills and succeed in their careers. My work blends strategic
            thinking, technical expertise, and creative problem-solving to
            deliver solutions that are both innovative and meaningful.
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default AboutMeCard;
