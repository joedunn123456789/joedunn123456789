// src/pages/CoverLetterBuild.tsx
import React from 'react';
import CoverLetterBuilder from '../components/CoverLetterBuilder/CoverLetterBuilder';

const CoverLetterBuild: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-500 p-4">
      <CoverLetterBuilder />
    </div>
  );
};

export default CoverLetterBuild;