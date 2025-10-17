// src/components/ResumeBuilder/ResumeForm.tsx
import React from 'react';
import type { JSX } from 'react';
import PersonalInfoForm from './sections/PersonalInfoForm';
import ExperienceForm from './sections/ExperienceForm';
import EducationForm from './sections/EducationForm';
import SkillsForm from './sections/SkillsForm';
import ProjectsForm from './sections/ProjectsForm';
import type { ResumeData, ResumeSection } from '../../types/resume';

interface ResumeFormProps {
  data: ResumeData;
  activeSection: ResumeSection;
  onUpdate: (section: keyof ResumeData, data: any) => void;
  onSectionChange: (section: ResumeSection) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  data,
  activeSection,
  onUpdate,
  onSectionChange
}) => {
  const sections: { id: ResumeSection; label: string; icon: string }[] = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'summary', label: 'Summary', icon: '📝' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  const renderSection = (): JSX.Element | null => {
    switch (activeSection) {
      case 'personal':
        return (
          <PersonalInfoForm 
            data={data.personalInfo} 
            onUpdate={(personalData) => onUpdate('personalInfo', personalData)} 
          />
        );
      case 'summary':
        return (
          <div className="space-y-4">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
              Professional Summary
            </label>
            <textarea
              id="summary"
              value={data.summary}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                onUpdate('summary', e.target.value)
              }
              placeholder="Write a brief summary of your professional background, skills, and achievements..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
            <p className="text-sm text-gray-500">
              Keep it concise - 2-3 sentences that highlight your key strengths.
            </p>
          </div>
        );
      case 'experience':
        return (
          <ExperienceForm 
            data={data.experience} 
            onUpdate={(experienceData) => onUpdate('experience', experienceData)} 
          />
        );
      case 'education':
        return (
          <EducationForm 
            data={data.education} 
            onUpdate={(educationData) => onUpdate('education', educationData)} 
          />
        );
      case 'skills':
        return (
          <SkillsForm 
            data={data.skills} 
            onUpdate={(skillsData) => onUpdate('skills', skillsData)} 
          />
        );
      case 'projects':
        return (
          <ProjectsForm 
            data={data.projects} 
            onUpdate={(projectsData) => onUpdate('projects', projectsData)} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {sections.map(section => (
          <button
            key={section.id}
            className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-200 ${
              activeSection === section.id 
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' 
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:shadow-sm'
            }`}
            onClick={() => onSectionChange(section.id)}
            type="button"
          >
            <span className="text-2xl mb-1">{section.icon}</span>
            <span className="text-xs font-medium">{section.label}</span>
          </button>
        ))}
      </div>
      
      {/* Form Content */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6 capitalize">
          {activeSection === 'personal' ? 'Personal Information' : activeSection}
        </h2>
        {renderSection()}
      </div>
    </div>
  );
};

export default ResumeForm;