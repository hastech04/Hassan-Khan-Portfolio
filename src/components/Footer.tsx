import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface FooterProps {
  theme: 'dark' | 'light';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-6 border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold">
                MHK
              </div>
              <span className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Muhammad Hassan Khan
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {portfolioData.personal.title}
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Building the future with AI and modern web technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 hover:text-blue-500 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              Get In Touch
            </h3>
            <div className="space-y-2">
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                📧 {portfolioData.personal.email}
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                📞 {portfolioData.personal.phone}
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                📍 {portfolioData.personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-8 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className={`flex items-center gap-2 text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>© {currentYear} Muhammad Hassan Khan. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Pakistan</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Additional Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              This portfolio is continuously evolving. Check back for updates on my latest projects and achievements.
            </p>
            <p className={`text-xs mt-2 ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Built with React, TypeScript & Tailwind CSS • Hosted on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;