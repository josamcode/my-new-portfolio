// src/App.jsx
import React, { useState, useEffect } from "react";
import { portfolioData } from "./data";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ExperienceEducation from "./components/ExperienceEducation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-kanit ${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
    >
      <Header
        navItems={portfolioData.header.navigation}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <main>
        <HeroSection data={portfolioData} />
        <AboutMe data={portfolioData.aboutMe} />
        <Skills skills={portfolioData.skills} />
        <ExperienceEducation items={portfolioData.experienceEducation} />
        <Portfolio data={portfolioData.portfolio} />
        <Blog data={portfolioData.blog} />
        <Contact data={portfolioData.contact} />
      </main>
      {/* Pass data to the new Footer component */}
      <Footer
        name={portfolioData.heroSection.name}
        socialLinks={portfolioData.contact.social}
      />
    </div>
  );
}

export default App;
