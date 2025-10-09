// src/data/initialCoverLetterData.ts
import type { CoverLetterData } from '../types/coverLetter';

export const initialCoverLetterData: CoverLetterData = {
  contactInfo: {
    yourName: '',
    yourAddress: '',
    yourCityStateZip: '',
    yourEmail: '',
    yourPhone: '',
    yourLinkedIn: '',
    yourPortfolio: ''
  },
  employerInfo: {
    companyName: '',
    hiringManagerName: '',
    hiringManagerTitle: '',
    companyAddress: '',
    companyCityStateZip: ''
  },
  positionInfo: {
    jobTitle: '',
    source: '',
    reference: ''
  },
  content: {
    introduction: '',
    body: '',
    conclusion: '',
    signature: ''
  },
  skills: [],
  achievements: []
};

export const sampleCoverLetterData: CoverLetterData = {
  contactInfo: {
    yourName: 'John Doe',
    yourAddress: '123 Main Street',
    yourCityStateZip: 'San Francisco, CA 94102',
    yourEmail: 'john.doe@email.com',
    yourPhone: '(555) 123-4567',
    yourLinkedIn: 'linkedin.com/in/johndoe',
    yourPortfolio: 'johndoe.dev'
  },
  employerInfo: {
    companyName: 'Tech Innovations Inc.',
    hiringManagerName: 'Jane Smith',
    hiringManagerTitle: 'Hiring Manager',
    companyAddress: '456 Tech Avenue',
    companyCityStateZip: 'San Francisco, CA 94103'
  },
  positionInfo: {
    jobTitle: 'Senior Frontend Developer',
    source: 'LinkedIn Job Posting',
    reference: 'Sarah Johnson, Senior Engineer'
  },
  content: {
    introduction: 'I am writing to express my enthusiastic interest in the Senior Frontend Developer position at Tech Innovations Inc. With over 5 years of experience in React and TypeScript development, I am confident that my skills and experience align perfectly with your requirements.',
    body: 'In my previous role at Digital Solutions, I led the development of customer-facing applications that served over 50,000 users and improved application performance by 40%. I am particularly drawn to Tech Innovations Inc. because of your innovative approach to solving complex problems and your commitment to creating user-centric products.',
    conclusion: 'I am excited about the opportunity to contribute to your team and help drive innovation at Tech Innovations Inc. Thank you for considering my application. I look forward to the possibility of discussing how my skills and experiences can benefit your company.',
    signature: 'Sincerely, John Doe'
  },
  skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'],
  achievements: [
    'Improved application performance by 40%',
    'Led development team of 3 developers',
    'Reduced page load time by 30%'
  ]
};