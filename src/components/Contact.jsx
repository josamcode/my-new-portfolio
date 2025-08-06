import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, User, Clock, Globe, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Contact = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  const WEB3FORMS_ACCESS_KEY = "ffe1ed2c-7f34-4497-a943-290f40f819d5";

  const mockData = data

  // Use actual data if provided
  const contactData = {
    title: data?.title,
    description: data?.description,
    address: data?.address,
    phone: data?.phone,
    email: data?.email,
    social: data?.social,
    availability: data?.availability,
    timezone: data?.timezone,
    responseTime: data?.responseTime,
  };

  // Intersection Observer
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

  // Handle form submission with Web3Forms
  const handleSubmit = async () => {

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('sending');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject || "New Contact Form Submission");
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", "Contact Form");
      formDataToSend.append("to_name", "Gerges samuel");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Social Icons Component Map
  const SocialIcon = ({ iconName, size = 20 }) => {
    const iconProps = { size };

    switch (iconName?.toLowerCase()) {
      case 'github':
        return <Github {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'facebook':
        return <Facebook {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  // Get social platform color
  const getSocialColor = (platform) => {
    const colors = {
      github: 'hover:bg-gray-900 dark:hover:bg-gray-600',
      linkedin: 'hover:bg-blue-600',
      twitter: 'hover:bg-blue-400',
      instagram: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      facebook: 'hover:bg-blue-600'
    };
    return colors[platform?.toLowerCase()] || 'hover:bg-blue-600';
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle size={16} />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            {contactData.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Contact Information */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">

                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <User className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="group flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Address</h4>
                      <p className="text-slate-600 dark:text-slate-400">{contactData.address}</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h4>
                      <a
                        href={`tel:${contactData.phone}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8 border border-green-200/50 dark:border-green-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Availability Status</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{contactData.availability || "Available to work"}</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Globe size={16} />
                    Follow Me
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {contactData.social.map((social, index) => (
                      social.link && (
                        <a
                          key={index}
                          href={social.link.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.ariaLabel}
                          className={`group p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:text-white ${getSocialColor(social.icon)}`}
                        >
                          <SocialIcon iconName={social.icon} size={20} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">

                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <Send className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
                      >
                        Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                          placeholder="Your full name"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${focusedField === 'subject' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                        placeholder="What's this about?"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="6"
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <CheckCircle size={20} />
                          Message Sent!
                        </>
                      ) : formStatus === 'error' ? (
                        <>
                          <AlertCircle size={20} />
                          Try Again
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl border border-green-200 dark:border-green-700">
                      <CheckCircle size={16} />
                      <span className="text-sm">Thanks for your message! I'll get back to you soon.</span>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-700">
                      <AlertCircle size={16} />
                      <span className="text-sm">Please fill in all required fields and try again.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Whether you need a website, mobile app, or just want to discuss your ideas, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                Email Me Directly
              </a>
              <a
                href={`tel:${contactData.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone size={18} />
                Call Me
              </a>
            </div>
          </div>
        </div>

        {/* Setup Instructions Note */}
        {WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY" && (
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Setup Required:</strong> To enable the contact form, replace "YOUR_WEB3FORMS_ACCESS_KEY" with your actual Web3Forms access key.
              Get one free at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600">web3forms.com</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;