import React, { useMemo } from 'react';
import { Calendar, MapPin, GraduationCap, Heart, Target, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface AboutProps {
  theme: 'dark' | 'light';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const age = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(portfolioData.personal.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }, []);

  return (
    <section
      id="about"
      className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know more about my journey, background, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Age:</strong> {age} years old (Born Nov 4, 2009)
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Location:</strong> {portfolioData.personal.location}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Education:</strong> {portfolioData.education[0].degree} - {portfolioData.education[0].institution} ({portfolioData.education[0].period})
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Globe className="w-6 h-6 text-green-500" />
                Languages
              </h3>
              
              <div className="space-y-3">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {lang.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      lang.level === 'Native' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : lang.level === 'Fluent'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Goals & Aspirations */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Target className="w-6 h-6 text-purple-500" />
                Goals & Dreams
              </h3>
              
              <div className="grid gap-4">
                {portfolioData.goals.map((goal, index) => (
                  <div key={index} className={`flex items-center gap-3 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100/50'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Heart className="w-6 h-6 text-red-500" />
                Soft Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {portfolioData.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-700 border border-blue-500/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Currently Learning
              </h3>
              
              <div className="space-y-3">
                {portfolioData.currentLearning.map((item, index) => (
                  <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100/50'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-12">
          <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/50 border-gray-200'
          } shadow-xl text-center`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              References
            </h3>
            
            {portfolioData.references.map((ref, index) => (
              <div key={index} className="max-w-md mx-auto">
                <p className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {ref.name}
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {ref.role} • {ref.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;