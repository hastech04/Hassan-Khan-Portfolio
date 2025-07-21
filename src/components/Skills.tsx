import React from 'react';
import { Code, Wrench, Brain, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface SkillsProps {
  theme: 'dark' | 'light';
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const skillCategories = [
    { name: 'Frontend', icon: Code, color: 'blue' },
    { name: 'Programming', icon: Layers, color: 'teal' },
    { name: 'AI/ML', icon: Brain, color: 'purple' },
    { name: 'Tools', icon: Wrench, color: 'orange' },
    { name: 'Integration', icon: Code, color: 'green' }
  ];

  const getSkillsByCategory = (category: string) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      teal: 'from-teal-500 to-teal-600', 
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      id="skills"
      className={`py-20 px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900' 
          : 'bg-gradient-to-br from-white via-blue-50 to-teal-50'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical abilities and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(category.name);
            const Icon = category.icon;
            
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category.name}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                } shadow-xl group`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/50 border-gray-200'
          } shadow-xl`}>
            <div className="text-center">
              <div className={`text-3xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent`}>
                {portfolioData.skills.length}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Skills
              </div>
            </div>
            
            <div className={`w-px h-12 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                {Math.round(portfolioData.skills.reduce((acc, skill) => acc + skill.level, 0) / portfolioData.skills.length)}%
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Avg. Proficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;