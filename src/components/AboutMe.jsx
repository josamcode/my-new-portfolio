import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Mail,
  MapPin,
  Calendar,
  User,
  Award,
  Code,
  Coffee,
  Heart,
  Star,
} from "lucide-react";

const AboutMe = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const sectionRef = useRef(null);

  const mockData = data

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate statistics
          mockData.statistics.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(stat.num, index);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (targetValue, index) => {
    let current = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      setAnimatedStats((prev) => ({
        ...prev,
        [index]: Math.floor(current),
      }));
    }, 30);
  };

  const getInfoIcon = (key) => {
    const iconMap = {
      name: <User size={16} />,
      age: <Calendar size={16} />,
      location: <MapPin size={16} />,
      email: <Mail size={16} />,
      phone: <User size={16} />,
      experience: <Award size={16} />,
      freelance: <Code size={16} />,
      languages: <Star size={16} />,
    };
    return iconMap[key] || <User size={16} />;
  };

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <User size={16} />
              Get to know me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              {mockData.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {mockData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            {/* Personal Information */}
            <div
              className={`transform transition-all duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <User
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Personal Info
                  </h3>
                </div>

                <div className="grid sm:grid-cols-1 gap-3">
                  {Object.entries(mockData.personalInfos).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className={`flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform ${isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                          }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex-shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                          <div className="text-blue-600 dark:text-blue-400">
                            {getInfoIcon(key)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center overflow-hidden">
                            <span className="font-semibold text-slate-700 dark:text-slate-300 capitalize min-w-0 sm:min-w-[90px]">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 font-medium">
                              {value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Download CV Button */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={`/${mockData.cv}`}
                    download
                    className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <Download
                      size={18}
                      className="relative group-hover:animate-bounce"
                    />
                    <span className="relative">Download Resume</span>
                    <div className="relative w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics & Skills */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <Award
                      className="text-purple-600 dark:text-purple-400"
                      size={20}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    My Achievements
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {mockData.statistics.map((stat, index) => (
                    <div
                      key={index}
                      className={`group relative p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 overflow-hidden ${isVisible
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>

                      <div className="relative text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text dark:text-slate-100 text-transparent mb-2">
                          {animatedStats[index] || 0}+
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-tight">
                          {stat.title}
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  ))}
                </div>

                {/* Additional info */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-8 text-center">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Coffee size={16} />
                      <span className="text-sm font-medium">Coffee Lover</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Code size={16} />
                      <span className="text-sm font-medium">Clean Code</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Heart size={16} />
                      <span className="text-sm font-medium">
                        Passion Driven
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section with call-to-action */}
          <div
            className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full font-medium">
              <span>Ready to work together?</span>
              <a
                href="#contact"
                className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
