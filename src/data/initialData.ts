// src/data/initialData.ts
import type { ResumeData } from '../types/resume';

export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    portfolioUrl: '',
    linkedin: '',
    github: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: []
};

export const sampleResumeData: ResumeData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    portfolioUrl: 'johndoe.dev',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe'
  },
  summary: 'Experienced software developer with 5+ years in web development, specializing in React, TypeScript, and Node.js. Passionate about creating efficient, scalable applications and mentoring junior developers.',
  experience: [
    {
      id: '1',
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2022-03',
      endDate: '',
      current: true,
      description: [
        'Lead development of customer-facing React applications serving 50k+ users',
        'Improved application performance by 40% through code splitting and lazy loading',
        'Mentored 3 junior developers and established coding standards'
      ]
    },
    {
      id: '2',
      company: 'Digital Solutions LLC',
      position: 'Frontend Developer',
      startDate: '2020-01',
      endDate: '2022-02',
      current: false,
      description: [
        'Developed and maintained 10+ React components used across multiple projects',
        'Collaborated with UX designers to implement responsive web designs',
        'Reduced page load time by 30% through optimization techniques'
      ]
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      gpa: '3.8'
    }
  ],
  skills: [
    { id: '1', name: 'React', category: 'Frontend', level: 5 },
    { id: '2', name: 'TypeScript', category: 'Frontend', level: 4 },
    { id: '3', name: 'Node.js', category: 'Backend', level: 4 },
    { id: '4', name: 'CSS/Tailwind', category: 'Frontend', level: 5 },
    { id: '5', name: 'Git', category: 'Tools', level: 5 }
  ],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      url: 'https://github.com/johndoe/ecommerce-platform'
    },
    {
      id: '2',
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      url: 'https://github.com/johndoe/task-manager'
    }
  ]
};