import React from "react";

function Experience() {
  return (
    <>
      <div className="bg-black">
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl text-center pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-20 font-extrabold px-4 lg:px-0">
          Experience
        </h1>

        {/* Experience Item 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-5 mt-10 sm:-ml-10 px-6 sm:px-0">
          <div className="bg-gray-500 h-0.5 sm:h-50  sm:w-0.5 mb-4 sm:mb-7"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Founder & CEO
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              Axiolink Systems
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Founded and led Axiolink Systems—building the company from the
              ground up, shaping its vision and strategy, leading the team, and
              driving initiatives that created real-world impact and growth.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">Full Time</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-5 mt-10 sm:-ml-10 px-6 sm:px-0">
          <div className="bg-gray-500 h-0.5 sm:h-50  sm:w-0.5 mb-4 sm:mb-7"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Co-Founder
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              Enlive Tech Inovations
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Became Co-Founder of Enlive Tech Innovations—shaping the company’s
              vision and strategy, leading initiatives with the team, and
              driving projects that delivered real-world impact and growth.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">Full Time</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-5 mt-10 sm:-ml-10 px-6 sm:px-0">
          <div className="bg-gray-500 h-0.5 sm:h-50  sm:w-0.5 mb-4 sm:mb-7"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Mentor/Instructor
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              Bootcamps, Courses, Workshops
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Served as a mentor and instructor at bootcamps and
              workshops—guiding and supporting 100+ students while sharing
              practical knowledge, fostering growth, and helping them build
              real-world skills.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">Full Time</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-5 mt-10 sm:-ml-10 px-6 sm:px-0">
          <div className="bg-gray-500 h-0.5 sm:h-50  sm:w-0.5 mb-4 sm:mb-7"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Web Development Intern
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              Enlive Tech Inovations
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Contributed to real-world projects during a web development
              internship—enhancing UI components and responsive layouts while
              expanding into backend technologies like Node.js and MongoDB.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">
              July, 2025 - September, 2025
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-5 mt-10 sm:-ml-10 px-6 sm:px-0">
          <div className="bg-gray-500 h-0.5 sm:h-50  sm:w-0.5 mb-4 sm:mb-7"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Front-End Web Developer Intern
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              AhDev101
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Working on real-world frontend projects during a Front-End Web
              Development internship—enhancing UI components and responsive
              layouts while expanding into backend technologies like Node.js and
              MongoDB.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">
              September, 2025 - Present
            </p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center pb-10 justify-center gap-4 sm:gap-5 mt-10 sm:mt-12 px-6 sm:px-0 sm:-ml-0.5">
          <div className="bg-gray-500 h-0.5 sm:h-50 w-full sm:w-0.5"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">
              Academic Development Experience
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              University of Management and Technology, Lahore
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md sm:w-90 mt-2">
              Built a strong foundation in frontend development, C++, and OOP
              during university—applying structured logic and design principles
              to create responsive, user-focused interfaces.
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">
              October, 2024 - Present
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
