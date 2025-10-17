// src/utils/pdfExport.ts
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { ResumeData } from '../types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const resumeElement = document.getElementById('resume-preview');
  
  if (!resumeElement) {
    throw new Error('Resume preview element not found');
  }

  // Add loading state
  const originalContent = resumeElement.innerHTML;
  resumeElement.innerHTML = '<div class="pdf-loading">Generating PDF...</div>';

  try {
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      width: resumeElement.scrollWidth,
      height: resumeElement.scrollHeight,
      backgroundColor: '#ffffff'
    });

    // Restore original content
    resumeElement.innerHTML = originalContent;

    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    const fileName = `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`.replace(/[^a-zA-Z0-9._-]/g, '_');
    pdf.save(fileName);
  } catch (error) {
    // Restore original content on error too
    resumeElement.innerHTML = originalContent;
    throw error;
  }
};