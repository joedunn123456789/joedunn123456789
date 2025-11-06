// src/utils/coverLetterPdfExport.ts
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { CoverLetterData } from '../types/coverLetter';

export const exportCoverLetterToPDF = async (coverLetterData: CoverLetterData): Promise<void> => {
  const coverLetterElement = document.getElementById('cover-letter-preview');
  
  if (!coverLetterElement) {
    throw new Error('Cover letter preview element not found');
  }

  const canvas = await html2canvas(coverLetterElement, {
    scale: 2,
    useCORS: true,
    logging: false,
    width: coverLetterElement.scrollWidth,
    height: coverLetterElement.scrollHeight,
    backgroundColor: '#ffffff'
  });

  const imgData = canvas.toDataURL('image/png');
  const pdfWidth = 210; // A4 width in mm
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
  const pdf = new jsPDF('p', 'mm', 'a4');
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
  const fileName = `${coverLetterData.contactInfo.yourName}_Cover_Letter.pdf`.replace(/[^a-zA-Z0-9._-]/g, '_');
  pdf.save(fileName);
};