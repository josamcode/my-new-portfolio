import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";

const ExperienceEducation = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Mock data for demonstration - replace with your actual data
  const mockItems = items

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Individual item observers
  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [mockItems]);

  // Icon mapping
  const getIcon = (iconName, type) => {
    const iconMap = {
      briefcase: <Briefcase size={20} />,
      "graduation-cap": <GraduationCap size={20} />,
      award: <Award size={20} />,
      experience: <Briefcase size={20} />,
      education: <GraduationCap size={20} />,
      certification: <Award size={20} />,
    };
    return iconMap[iconName] || iconMap[type] || <Briefcase size={20} />;
  };

  // Get item type styling
  const getTypeStyle = (type) => {
    const styles = {
      experience: {
        bg: "from-blue-500 to-indigo-600",
        ring: "ring-blue-200 dark:ring-blue-800",
        badge:
          "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      },
      education: {
        bg: "from-purple-500 to-pink-600",
        ring: "ring-purple-200 dark:ring-purple-800",
        badge:
          "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      },
      certification: {
        bg: "from-green-500 to-emerald-600",
        ring: "ring-green-200 dark:ring-green-800",
        badge:
          "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      },
    };
    return styles[type] || styles.experience;
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive timeline of my professional journey, educational
            background, and key achievements that have shaped my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 dark:from-blue-600 dark:via-purple-600 dark:to-green-600 rounded-full opacity-50 animate-pulse"></div>
          </div>

          <div className="space-y-16">
            {mockItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isItemVisible = visibleItems.has(index);
              const typeStyle = getTypeStyle(item.type);

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute hidden md:flex left-1/2 transform -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-br ${typeStyle.bg
                      } shadow-xl ${typeStyle.ring
                      } ring-4 flex items-center justify-center text-white transition-all duration-500 ${isItemVisible
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0"
                      }`}
                  >
                    <div className="relative">
                      {getIcon(item.icon, item.type)}
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <div
                      className={`group z-9 relative p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transform transition-all duration-700 ${isItemVisible
                        ? (isLeft ? "translate-x-0" : "translate-x-0") +
                        " opacity-100"
                        : (isLeft ? "-translate-x-8" : "translate-x-8") +
                        " opacity-0"
                        } hover:-translate-y-2`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>

                      {/* Year badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${typeStyle.badge}`}
                      >
                        <Calendar size={14} />
                        {item.year}
                      </div>

                      {/* Title and place */}
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        <span>{item.place}</span>
                        {item.location && (
                          <>
                            <span className="text-slate-400">•</span>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                              <MapPin size={14} />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <Star size={14} />
                            Key Achievements
                          </h4>
                          <div className="space-y-1">
                            {item.achievements.map(
                              (achievement, achievementIndex) => (
                                <div
                                  key={achievementIndex}
                                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                >
                                  <ChevronRight
                                    size={12}
                                    className="text-blue-500 flex-shrink-0"
                                  />
                                  <span>{achievement}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>
              );
            })}
          </div>

          {/* Timeline end marker */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
