// src/types/coverLetter.ts
export interface ContactInfo {
  yourName: string;
  yourAddress: string;
  yourCityStateZip: string;
  yourEmail: string;
  yourPhone: string;
  yourLinkedIn?: string;
  yourPortfolio?: string;
}

export interface EmployerInfo {
  companyName: string;
  hiringManagerName: string;
  hiringManagerTitle: string;
  companyAddress: string;
  companyCityStateZip: string;
}

export interface PositionInfo {
  jobTitle: string;
  source: string;
  reference?: string;
}

export interface LetterContent {
  introduction: string;
  body: string;
  conclusion: string;
  signature: string;
}

export interface CoverLetterData {
  contactInfo: ContactInfo;
  employerInfo: EmployerInfo;
  positionInfo: PositionInfo;
  content: LetterContent;
  skills: string[];
  achievements: string[];
}

export type CoverLetterSection = 
  | 'contact' 
  | 'employer' 
  | 'position' 
  | 'content' 
  | 'skills' 
  | 'achievements';