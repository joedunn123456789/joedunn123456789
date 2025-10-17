import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFResume from '../../components/ResumePage/PDFResume';

export const usePDFExport = (fileName: string = 'Joseph-Dunn-Resume.pdf') => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const exportToPDF = async (): Promise<void> => {
    setIsGenerating(true);
    
    try {
      // Use createElement instead of JSX to avoid erasable syntax error
      const blob = await pdf(React.createElement(PDFResume)).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return { 
    exportToPDF, 
    isGenerating 
  };
};