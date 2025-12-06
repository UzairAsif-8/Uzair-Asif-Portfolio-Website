import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa6";
import axiolinkLogo from "../assets/logos/Logo.jpg";

// Full-width, detailed CompanyShowcase component
function CompanyShowcase({
  logo,
  companyName,
  founderName,
  role,
  description,
  achievements = [],
  stats = [],
  linkedin,
  website,
}) {
  return (
    <>
      {" "}
      <h1
        id="projects"
        className="text-white bg-black text-4xl sm:text-6xl lg:text-8xl text-center pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-20 font-extrabold px-4 lg:px-0"
      >
        MY Company
      </h1>
      <section className="w-full bg-black py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
            {logo ? (
              <img
                src={axiolinkLogo}
                alt={`${companyName} Logo`}
                className="w-90 h-90 md:w-100 md:h-100 mt-15 object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <div className="w-52 h-52 md:w-64 md:h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-3xl shadow-2xl">
                Logo
              </div>
            )}
          </div>

          {/* Company Details */}
          <div className="flex-1 text-center md:text-left">
            {/* Company Name */}
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-3">
              {companyName || "Company Name"}
            </h2>

            {/* Founder & Role */}
            <p className="text-green-400 text-xl md:text-2xl font-semibold mb-6">
              {role || "Founder & CEO"} • {founderName || "Uzair Asif"}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              {description ||
                "This is a detailed overview of the company, its vision, mission, and impact. Include information about leadership, strategic initiatives, and the company's contribution to the industry."}
            </p>

            {/* Key Achievements */}
            {achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-400 text-base md:text-lg space-y-1">
                  {achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl p-4 text-center"
                  >
                    <h4 className="text-green-400 text-2xl font-bold">
                      {stat.value}
                    </h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              {linkedin && (
                <a
                  href="https://www.linkedin.com/company/109134243/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors text-3xl"
                >
                  <FaLinkedin />
                </a>
              )}
              {website && (
                <a
                  href="https://www.linkedin.com/company/109134243/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors mb-5 text-2xl"
                >
                  Connect with Us
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Full Companies Section using CompanyShowcase
export default function CompaniesSection() {
  return (
    <div>
      <CompanyShowcase
        logo="{axiolinkLogo}"
        companyName="Axiolink Systems"
        founderName="Muhammad Uzair Asif"
        role="Founder & CEO"
        description="Axiolink Systems is a software company focused on delivering impactful real-world applications. As Founder & CEO, I lead the vision, manage the team, and drive innovative projects."
        achievements={[
          "Built and launched multiple web applications.",
          "Mentored 100+ students in workshops and bootcamps.",
          "Expanded company offerings with full-stack and AI technologies.",
          "Grew a high-performing team focused on innovation.",
        ]}
        stats={[
          { value: "100+", label: "Students Mentored" },
          { value: "10+", label: "Projects Delivered" },
          { value: "15+", label: "Team Members" },
        ]}
        linkedin="https://www.linkedin.com/company/axiolink-systems"
        website="https://axiolinksystems.com"
      />
    </div>
  );
}
