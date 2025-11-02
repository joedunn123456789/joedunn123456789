import { skillCategories, education, summary, personalInfo, keyAchievements, experiences } from '../data/resumeData';
import { usePDFExport } from '../hooks/ResumePage/usePDFExport';

const Resume: React.FC = () => {
  const { exportToPDF, isGenerating } = usePDFExport();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* PDF Export Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={exportToPDF}
            disabled={isGenerating}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? 'Generating PDF...' : 'Export as PDF'}
          </button>
        </div>

        <main className="mx-auto max-w-4xl px-8 py-10 space-y-6 text-black bg-white rounded-lg shadow-lg">
          {/* Header */}
          <header className="space-y-1 border-b-2 border-gray-800 pb-3">
            <h1 className="text-3xl font-bold uppercase">{personalInfo.name}</h1>
            <p className="text-sm text-gray-700">
              {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
            </p>
            <p className="text-sm text-gray-700">
              {personalInfo.linkedin.display} | {personalInfo.github.display}
            </p>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">
              {summary.main}
            </p>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">
              Key Achievements
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="text-sm leading-relaxed">{achievement}</li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-sm text-gray-800">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <p key={category} className="leading-relaxed">
                  <span className="font-bold">{category}:</span> {categorySkills.join(', ')}
                </p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <div key={index} className="border-b border-gray-300 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base">{exp.role}</h3>
                    <p className="text-sm text-gray-700 whitespace-nowrap ml-4">{exp.date}</p>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-1">{exp.company}</p>
                  {exp.administeredSystems && (
                    <p className="text-sm text-gray-800 mb-2">
                      <span className="font-bold">Administered Systems:</span> {exp.administeredSystems}
                    </p>
                  )}
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-800">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-gray-800 pb-1 mb-2">
              Education
            </h2>
            <div className="text-sm text-gray-800">
              <p className="font-bold">{education.degree}</p>
              <p>{education.institution} | {education.date}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;