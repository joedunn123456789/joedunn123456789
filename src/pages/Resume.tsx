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

        <main className="mx-auto max-w-4xl px-8 py-10 space-y-10 text-black bg-white rounded-lg shadow-lg">
          {/* Header */}
          <header className="space-y-1">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-sm text-gray-700">
              {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
            </p>
            <p className="text-sm text-gray-700">
              LinkedIn: <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{personalInfo.linkedin.display}</a> • GitHub: <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{personalInfo.github.display}</a>
            </p>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Summary
            </h2>
            <p className="text-gray-800">
              {summary.main}
            </p>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              KEY ACHIEVEMENTS
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              {keyAchievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Skills
            </h2>
            <div className="space-y-2 text-sm text-gray-800">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <p key={category}>
                  <span className="font-semibold">{category}:</span> {categorySkills.join(', ')}
                </p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-sm text-gray-600">{exp.date}</p>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">{exp.company}</p>
                  {exp.administeredSystems && (
                    <p className="text-sm text-gray-800 font-semibold mb-3">
                      Administered Systems: {exp.administeredSystems}
                    </p>
                  )}
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Education
            </h2>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-gray-800">
                <span className="font-semibold">{education.degree}</span><br />
                {education.institution} • {education.date}
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;