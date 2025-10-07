// src/pages/ResumeBuild.tsx
import React from 'react';
import ResumeBuilder from '../components/ResumeBuilder/ResumeBuilder';

const ResumeBuild: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <ResumeBuilder />
    </div>
  );
};

export default ResumeBuild;