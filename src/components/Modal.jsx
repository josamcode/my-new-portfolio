// Modal.js
import React from "react";
import { X, Github, Eye } from "lucide-react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-slate-700 rounded-full text-gray-600 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white px-4 py-2 rounded-full text-center inline-block">
          {project.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-lg">
            <img
              src={`/${project.image}`}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
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
            <div className="flex flex-col space-y-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Eye size={18} />
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;