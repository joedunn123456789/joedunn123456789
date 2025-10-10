// src/components/CoverLetterBuilder/CoverLetterBuilder.tsx
import React, { useState } from 'react';
import CoverLetterForm from './CoverLetterForm';
import CoverLetterPreview from './CoverLetterPreview';
import type { CoverLetterData, CoverLetterSection } from '../../types/coverLetter';
import { initialCoverLetterData, sampleCoverLetterData } from '../../data/initialCoverLetterData';
import { exportCoverLetterToPDF } from '../../utils/coverLetterPdfExport';

const CoverLetterBuilder: React.FC = () => {
  const [coverLetterData, setCoverLetterData] = useState<CoverLetterData>(initialCoverLetterData);
  const [activeSection, setActiveSection] = useState<CoverLetterSection>('contact');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  const updateCoverLetterData = <K extends keyof CoverLetterData>(section: K, data: CoverLetterData[K]) => {
    setCoverLetterData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleExportPDF = async (): Promise<void> => {
    if (isGeneratingPDF) return;
    
    setIsGeneratingPDF(true);
    try {
      await exportCoverLetterToPDF(coverLetterData);
    } catch (error) {
      console.error('Failed to export PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const loadSampleData = (): void => {
    setCoverLetterData(sampleCoverLetterData);
  };

  const resetData = (): void => {
    setCoverLetterData(initialCoverLetterData);
  };

  const canExport = !isGeneratingPDF && 
    coverLetterData.contactInfo.yourName?.trim() && 
    coverLetterData.employerInfo.companyName?.trim();

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Cover Letter Builder
            </h1>
            <p className="text-green-100 text-lg opacity-90">
              Create a professional cover letter in minutes
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full lg:w-auto justify-start lg:justify-end">
            <button 
              onClick={loadSampleData}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Load Sample
            </button>
            <button 
              onClick={resetData}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Reset
            </button>
            <button 
              onClick={handleExportPDF} 
              className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow"
              disabled={!canExport}
            >
              {isGeneratingPDF ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                'Export to PDF'
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[calc(100vh-200px)]">
        {/* Left Side - Form */}
        <div className="p-4 sm:p-6 border-r border-gray-200 overflow-y-auto max-h-screen">
          <CoverLetterForm 
            data={coverLetterData}
            activeSection={activeSection}
            onUpdate={updateCoverLetterData}
            onSectionChange={setActiveSection}
          />
        </div>
        
        {/* Right Side - Preview */}
        <div className="p-4 sm:p-6 bg-gray-50 overflow-y-auto max-h-screen">
          <CoverLetterPreview data={coverLetterData} />
        </div>
      </div>
    </div>
  );
};

export default CoverLetterBuilder;