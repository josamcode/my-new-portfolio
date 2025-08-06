import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Globe,
  Code,
  Coffee,
  Zap,
} from "lucide-react";

const Footer = ({ name, socialLinks }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentYear = new Date().getFullYear();

  // Mock data - replace with your actual data
  const mockName = name || "Jo Sam";
  const mockSocialLinks = socialLinks || [
    {
      icon: "github",
      link: "https://github.com/josam",
      ariaLabel: "GitHub Profile",
    },
    {
      icon: "linkedin",
      link: "https://linkedin.com/in/josam",
      ariaLabel: "LinkedIn Profile",
    },
    {
      icon: "twitter",
      link: "https://twitter.com/josam",
      ariaLabel: "Twitter Profile",
    },
    {
      icon: "instagram",
      link: "https://instagram.com/josam",
      ariaLabel: "Instagram Profile",
    },
  ];

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get social icon
  const getSocialIcon = (iconName) => {
    const iconMap = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      twitter: <Twitter size={20} />,
      instagram: <Instagram size={20} />,
      facebook: <Facebook size={20} />,
    };
    return iconMap[iconName.toLowerCase()] || <Globe size={20} />;
  };

  // Get social platform color
  const getSocialColor = (platform) => {
    const colors = {
      github: "hover:bg-gray-700",
      linkedin: "hover:bg-blue-600",
      twitter: "hover:bg-blue-400",
      instagram:
        "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      facebook: "hover:bg-blue-600",
    };
    return colors[platform.toLowerCase()] || "hover:bg-blue-600";
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "E-commerce",
    "API Development",
    "Consulting",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {mockName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{mockName}</h3>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                  A passionate Full Stack Developer dedicated to building
                  exceptional digital experiences. Transforming ideas into
                  beautiful, functional applications that make a difference.
                </p>

                {/* Social Links */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                    <Zap size={16} />
                    Connect With Me
                  </h4>
                  <div className="flex gap-3">
                    {mockSocialLinks.map(
                      (social, index) =>
                        social.link && (
                          <a
                            key={index}
                            href={social.link.trim()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.ariaLabel}
                            className={`group p-3 bg-slate-800 text-slate-400 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:text-white ${getSocialColor(
                              social.icon
                            )}`}
                          >
                            {getSocialIcon(social.icon)}
                          </a>
                        )
                    )}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-700/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-medium text-green-400">
                      Available for work
                    </div>
                    <div className="text-xs text-slate-400">
                      {currentTime.toLocaleString("en-US", {
                        timeZone: "Africa/Cairo",
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZoneName: "short",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Code size={18} />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services & Contact */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Coffee size={18} />
                  Services
                </h4>
                <ul className="space-y-3 mb-8">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-slate-300 mb-3">
                    Get In Touch
                  </h5>
                  <div className="space-y-2">
                    <a
                      href="mailto:gergessamuel100@gmail.com"
                      className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <Mail
                        size={14}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      gergessamuel100@gmail.com
                    </a>
                    <a
                      href="tel:+201204770940"
                      className="group flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      <Phone
                        size={14}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      +201204770940
                    </a>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={14} />
                      Cairo, Egypt
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with gradient */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  &copy; {currentYear}{" "}
                  <span className="font-semibold text-white">{mockName}</span>.
                  All rights reserved.
                </p>
                <p className="text-slate-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                  Designed & Built with{" "}
                  Gerges Samuel
                  <Heart
                    size={12}
                    className="text-red-500 animate-pulse"
                    fill="currentColor"
                  />{" "}
                  and lots of coffee
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="hidden sm:inline">Built with:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-slate-800 rounded-lg">
                    React
                  </span>
                  <span className="px-2 py-1 bg-slate-800 rounded-lg">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-slate-800 rounded-lg">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 group"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
