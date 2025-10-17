// src/components/ResumeBuilder/ResumePreview.tsx
import React from 'react';
import type { ResumeData } from '../../types/resume';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  return (
    <div id="resume-preview" className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto">
      {/* Header */}
      <header className="border-b-2 border-blue-600 pb-6 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div className="text-gray-600 space-y-1">
            <p>{personalInfo.email} • {personalInfo.phone} • {personalInfo.location}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {personalInfo.portfolioUrl && (
                <span>Portfolio: {personalInfo.portfolioUrl}</span>
              )}
              {personalInfo.linkedin && (
                <span>LinkedIn: {personalInfo.linkedin}</span>
              )}
              {personalInfo.github && (
                <span>GitHub: {personalInfo.github}</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Work Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={exp.id || index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg">{exp.position}</h3>
                  <span className="text-blue-600 font-medium text-sm sm:text-base">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={edu.id || index} className="border-l-4 border-green-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
                  <span className="text-green-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">{edu.institution}</p>
                {edu.gpa && <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={skill.id || index} className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(level => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-full ${
                        level <= skill.level ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={project.id || index} className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-1">{project.name}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;