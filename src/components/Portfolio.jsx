// Portfolio.js
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Eye,
  Filter,
  Star,
  Calendar,
  Tag,
  Zap,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Modal from "./Modal";

const Portfolio = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [displayedCount, setDisplayedCount] = useState(6);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const mockData = data;
  const filteredProjects =
    activeCategory === "All"
      ? mockData.projects
      : mockData.projects.filter(
        (project) => project.category === activeCategory
      );

  useEffect(() => {
    setDisplayedCount(6);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    projectRefs.current.forEach((ref) => {
      if (ref) {
        const existingObserver = ref.__observer;
        if (existingObserver) {
          existingObserver.disconnect();
          delete ref.__observer;
        }
      }
    });
    projectRefs.current = [];
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref && ref.__observer) {
          ref.__observer.disconnect();
          delete ref.__observer;
        }
      });
      projectRefs.current = [];
    };
  }, [filteredProjects, displayedCount]);

  const getStatusColor = (status) => {
    const colors = {
      Live: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      "In Development":
        "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      Completed:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    };
    return colors[status] || colors["Completed"];
  };

  const handleShowMore = () => {
    setDisplayedCount((prevCount) => {
      const newCount = prevCount + 3;
      return Math.min(newCount, filteredProjects.length);
    });
  };

  const shouldShowMoreButton = displayedCount < filteredProjects.length;

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap size={16} />
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              {mockData.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my recent projects and creative work. Each project
              represents my passion for creating exceptional digital
              experiences.
            </p>
          </div>
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <div className="flex items-center gap-2 mr-4 text-slate-600 dark:text-slate-400">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {mockData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-md hover:shadow-lg"
                  }`}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.slice(0, displayedCount).map((project, index) => {
              const isProjectVisible = visibleProjects.has(index);
              const isHovered = hoveredProject === index;
              return (
                <div
                  key={`${project.title}-${index}`}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                    if (el) {
                      const observer = new IntersectionObserver(
                        ([entry]) => {
                          if (entry.isIntersecting) {
                            setVisibleProjects((prev) => new Set([...prev, index]));
                          }
                        },
                        { threshold: 0.1 }
                      );
                      observer.observe(el);
                      el.__observer = observer;
                    }
                  }}
                  className={`group relative cursor-pointer transform transition-all duration-700 ${isProjectVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                    } hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => openModal(project)}
                >
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-2xl group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50 transition-all duration-500">
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <Star size={12} />
                        Featured
                      </div>
                    )}
                    <div
                      className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        project.status || "Live"
                      )}`}
                    >
                      {project.status || "Live"}
                    </div>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={`/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div
                        className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${isHovered
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                          }`}
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 cursor-pointer bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-300 hover:bg-purple-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
                            aria-label="View source code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 cursor-pointer bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
                          aria-label="View details"
                        >
                          <Eye size={18} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.year && (
                          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <Calendar size={14} />
                            <span className="text-sm">{project.year}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      {project.technologies && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag size={14} className="text-slate-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Technologies
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex cursor-pointer items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm group/link transition-colors duration-300 z-50"
                        >
                          View Project
                          <ArrowRight
                            size={14}
                            className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                          />
                        </a>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
          {shouldShowMoreButton && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Show More
                <ChevronDown size={16} />
              </button>
            </div>
          )}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="text-slate-400" size={24} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No projects found in the "{activeCategory}" category.
              </p>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

export default Portfolio;