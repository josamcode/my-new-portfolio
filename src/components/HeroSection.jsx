import React from "react";
import {
  Download,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const HeroSection = ({ data }) => {
  const mockData = data.heroSection;
  return (
    <section
      id="hero"
      className="relative pt-28 py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image Section */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce delay-200"></div>
              <div className="absolute -top-2 -right-6 w-4 h-4 bg-purple-500 rounded-full opacity-40 animate-bounce delay-500"></div>
              <div className="absolute -bottom-6 -left-2 w-6 h-6 bg-indigo-500 rounded-full opacity-50 animate-bounce delay-700"></div>

              {/* Main image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                <div className="relative bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <img
                    src={`/${mockData.image}`}
                    alt={mockData.name}
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Welcome to my portfolio
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent leading-tight py-3">
              Hi, I'm {mockData.name}
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
              {mockData.title}
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {mockData.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href={mockData.github}
                target="_blank"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={mockData.linkedin}
                target="_blank"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={mockData.instagram}
                target="_blank"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Twitter"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Let's Work Together
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
              </a>

              <a
                href={`/${data.aboutMe.cv}`}
                download
                className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>
            </div>

            {/* Stats or additional info */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  40+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  1+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  100%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
