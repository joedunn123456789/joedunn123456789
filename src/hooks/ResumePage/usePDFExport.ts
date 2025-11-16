import React, { useState } from 'react';

export const usePDFExport = (fileName: string = 'Joseph-Dunn-Resume.pdf') => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const exportToPDF = async (): Promise<void> => {
    setIsGenerating(true);

    try {
      // Dynamically import the PDF libraries only when needed
      const [{ pdf }, { default: PDFResume }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../../components/ResumePage/PDFResume')
      ]);

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