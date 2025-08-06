import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Brain,
  Zap,
  Star,
  Terminal,
  Wind,
  Server,
  LayoutTemplate,
  GitBranch,
  GitMerge,
  Link,
  Lock,
  Gauge,
  Search,
  Table,
  TableProperties
} from "lucide-react";

const Skills = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  const mockSkills = skills

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          mockSkills.forEach((skill, index) => {
            setTimeout(() => {
              animateSkill(skill.percentage, index);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Reduced threshold and added margin
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: Show skills after 2 seconds if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        console.log("Fallback triggered - showing skills");
        setIsVisible(true);
        mockSkills.forEach((skill, index) => {
          setTimeout(() => {
            animateSkill(skill.percentage, index);
          }, index * 150);
        });
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible, mockSkills]);

  // Skill bar animation
  const animateSkill = (targetPercentage, index) => {
    let current = 0;
    const increment = targetPercentage / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        current = targetPercentage;
        clearInterval(timer);
      }
      setAnimatedSkills((prev) => ({
        ...prev,
        [index]: Math.floor(current),
      }));
    }, 25);
  };

  // Enhanced icon mapping with all your icons
  const getSkillIcon = (iconName) => {
    const iconMap = {
      code: <Code size={20} />,
      palette: <Palette size={20} />,
      terminal: <Terminal size={20} />,
      react: <Code size={20} />, // Using Code as fallback for React
      wind: <Wind size={20} />,
      server: <Server size={20} />,
      'layout-template': <LayoutTemplate size={20} />,
      database: <Database size={20} />,
      table: <Table size={20} />,
      'table-properties': <TableProperties size={20} />,
      'git-branch': <GitBranch size={20} />,
      'git-merge': <GitMerge size={20} />,
      link: <Link size={20} />,
      lock: <Lock size={20} />,
      gauge: <Gauge size={20} />,
      search: <Search size={20} />,
      globe: <Globe size={20} />,
      smartphone: <Smartphone size={20} />,
      brain: <Brain size={20} />,
      zap: <Zap size={20} />,
      star: <Star size={20} />,
    };
    return iconMap[iconName] || <Code size={20} />;
  };

  // Get skill level description
  const getSkillLevel = (percentage) => {
    if (percentage >= 90)
      return {
        level: "Expert",
        color: "text-emerald-600 dark:text-emerald-400",
      };
    if (percentage >= 80)
      return { level: "Advanced", color: "text-blue-600 dark:text-blue-400" };
    if (percentage >= 70)
      return {
        level: "Proficient",
        color: "text-purple-600 dark:text-purple-400",
      };
    if (percentage >= 60)
      return {
        level: "Intermediate",
        color: "text-orange-600 dark:text-orange-400",
      };
    return { level: "Beginner", color: "text-red-600 dark:text-red-400" };
  };

  // Get gradient based on percentage
  const getGradient = (percentage) => {
    if (percentage >= 90) return "from-emerald-500 to-green-600";
    if (percentage >= 80) return "from-blue-500 to-indigo-600";
    if (percentage >= 70) return "from-purple-500 to-pink-600";
    if (percentage >= 60) return "from-orange-500 to-red-600";
    return "from-gray-500 to-gray-600";
  };

  // Group skills by category
  const groupedSkills = mockSkills.reduce((acc, skill, index) => {
    const category = skill.category || "other";
    if (!acc[category]) acc[category] = [];
    acc[category].push({ ...skill, originalIndex: index });
    return acc;
  }, {});

  // Enhanced category info with all your categories
  const categoryInfo = {
    frontend: {
      title: "Frontend Development",
      icon: <Code size={24} />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    },
    backend: {
      title: "Backend Development",
      icon: <Server size={24} />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    },
    database: {
      title: "Database & Storage",
      icon: <Database size={24} />,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    },
    tools: {
      title: "Development Tools",
      icon: <GitBranch size={24} />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    },
    security: {
      title: "Security & Authentication",
      icon: <Lock size={24} />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    },
    performance: {
      title: "Performance & Optimization",
      icon: <Gauge size={24} />,
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    },
    design: {
      title: "Design & UI/UX",
      icon: <Palette size={24} />,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
    },
    other: {
      title: "Other Skills",
      icon: <Star size={24} />,
      color: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap size={16} />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              My Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels across different technologies and domains.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(
              ([category, categorySkills], categoryIndex) => (
                <div
                  key={category}
                  className={`transform transition-all duration-1000 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                    }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`p-3 rounded-xl ${categoryInfo[category]?.color ||
                        categoryInfo.other.color
                        }`}
                    >
                      {categoryInfo[category]?.icon || categoryInfo.other.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {categoryInfo[category]?.title || "Other Skills"}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, skillIndex) => {
                      const skillLevel = getSkillLevel(skill.percentage);
                      const currentPercentage =
                        animatedSkills[skill.originalIndex] || 0;

                      return (
                        <div
                          key={skillIndex}
                          className={`group relative p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 ${isVisible
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0"
                            }`}
                          style={{
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100
                              }ms`,
                          }}
                        >
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                                <div className={`${skillLevel.color}`}>
                                  {getSkillIcon(skill.icon)}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                  {skill.name}
                                </h4>
                                <span
                                  className={`text-sm font-medium ${skillLevel.color}`}
                                >
                                  {skillLevel.level}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                                {currentPercentage}%
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${getGradient(
                                  skill.percentage
                                )} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                                style={{
                                  width: `${currentPercentage}%`,
                                  transitionDelay: `${skill.originalIndex * 150
                                    }ms`,
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
                            </div>

                            {/* Skill level markers */}
                            <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-1">
                              <span>Beginner</span>
                              <span>Intermediate</span>
                              <span>Advanced</span>
                              <span>Expert</span>
                            </div>
                          </div>

                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Skills Summary */}
          <div
            className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date
                with the latest technologies. These percentages reflect my
                current proficiency, but I'm always growing and learning new
                things.
              </p>
              <div className="flex justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {mockSkills.length}+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {Math.round(
                      mockSkills.reduce(
                        (acc, skill) => acc + skill.percentage,
                        0
                      ) / mockSkills.length
                    )}
                    %
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Average Proficiency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {Object.keys(groupedSkills).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Specializations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;