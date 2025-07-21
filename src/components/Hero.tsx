import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  theme: 'dark' | 'light';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Aspiring IT Expert",
    "Web Developer", 
    "AI Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900' 
          : 'bg-gradient-to-br from-white via-blue-50 to-teal-50'
      }`}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-6xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              
              <div className="h-20">
                <h2 className={`text-2xl md:text-3xl font-semibold ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {displayedText}
                  <span className="animate-blink">|</span>
                </h2>
              </div>
            </div>

            <p className={`text-lg leading-relaxed max-w-2xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about creating innovative solutions with cutting-edge technology. 
              Currently focusing on AI development and modern web technologies to build 
              the future of digital experiences.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <Mail className="w-4 h-4" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <span>📞 {portfolioData.personal.phone}</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <span>📍 {portfolioData.personal.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToNextSection}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4" />
              </button>
              
              <button className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                theme === 'dark' 
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Mail, label: 'Email', href: `mailto:${portfolioData.personal.email}` }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
  <div className="relative group">
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
    <div className="relative">
      <img
        src="/WhatsApp Image 2025-06-28 at 12.19.26_9ffc8b92.jpg"
        alt="Profile"
        className="w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
    </div>
  </div>
</div>
</div>
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className={`p-3 rounded-full ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
            } transition-colors duration-300`}
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;