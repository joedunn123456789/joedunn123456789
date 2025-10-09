// src/components/CoverLetterBuilder/CoverLetterForm.tsx
import React from 'react';
import ContactInfoForm from './sections/ContactInfoForm';
import EmployerInfoForm from './sections/EmployerInfoForm';
import PositionInfoForm from './sections/PositionInfoForm';
import ContentForm from './sections/ContentForm';
import SkillsForm from './sections/SkillsForm';
import AchievementsForm from './sections/AchievementsForm';
import type { CoverLetterData, CoverLetterSection } from '../../types/coverLetter';

interface CoverLetterFormProps {
  data: CoverLetterData;
  activeSection: CoverLetterSection;
  onUpdate: (section: keyof CoverLetterData, data: any) => void;
  onSectionChange: (section: CoverLetterSection) => void;
}

const CoverLetterForm: React.FC<CoverLetterFormProps> = ({
  data,
  activeSection,
  onUpdate,
  onSectionChange
}) => {
  const sections: { id: CoverLetterSection; label: string; icon: string }[] = [
    { id: 'contact', label: 'Your Info', icon: '👤' },
    { id: 'employer', label: 'Employer', icon: '🏢' },
    { id: 'position', label: 'Position', icon: '💼' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'achievements', label: 'Achievements', icon: '⭐' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'contact':
        return (
          <ContactInfoForm 
            data={data.contactInfo} 
            onUpdate={(contactData) => onUpdate('contactInfo', contactData)} 
          />
        );
      case 'employer':
        return (
          <EmployerInfoForm 
            data={data.employerInfo} 
            onUpdate={(employerData) => onUpdate('employerInfo', employerData)} 
          />
        );
      case 'position':
        return (
          <PositionInfoForm 
            data={data.positionInfo} 
            onUpdate={(positionData) => onUpdate('positionInfo', positionData)} 
          />
        );
      case 'content':
        return (
          <ContentForm 
            data={data.content} 
            onUpdate={(contentData) => onUpdate('content', contentData)} 
          />
        );
      case 'skills':
        return (
          <SkillsForm 
            data={data.skills} 
            onUpdate={(skillsData) => onUpdate('skills', skillsData)} 
          />
        );
      case 'achievements':
        return (
          <AchievementsForm 
            data={data.achievements} 
            onUpdate={(achievementsData) => onUpdate('achievements', achievementsData)} 
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
                ? 'border-green-500 bg-green-50 text-green-700 shadow-md' 
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
          {activeSection === 'contact' ? 'Your Information' : 
           activeSection === 'employer' ? 'Employer Information' : 
           activeSection === 'position' ? 'Position Details' : 
           activeSection}
        </h2>
        {renderSection()}
      </div>
    </div>
  );
};

export default CoverLetterForm;