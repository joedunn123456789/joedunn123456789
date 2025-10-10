import { experiences, skills, certifications, education } from '../data/resumeData';
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
            <h1 className="text-3xl font-bold">Joseph Henry Dunn II</h1>
            <p className="text-sm text-gray-700">
              Wildomar, CA • 830-666-2525 • jdunn0423@gmail.com
            </p>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Summary
            </h2>
            <div className="space-y-3 text-gray-800">
              <p>
                Cloud Systems Engineer | Infrastructure Manager | Automation Leader with 10+ years of experience specializing in cloud architecture, enterprise IT infrastructure, and secure system automation across federal, defense, and corporate environments.
              </p>
              <p>
                Leads hybrid teams of engineers, developers, and cybersecurity analysts to design, deploy, and support fault-tolerant cloud environments in Azure and AWS, often under tight compliance constraints tied to public and DoD-grade security standards.
              </p>
              <p>
                Spearheads automation of IT workflows and repetitive system tasks using PowerShell, Python, Power Automate, and ServiceNow, freeing up hundreds of team hours annually while reducing error rates in mission-critical environments.
              </p>
              <p>
                Drives end-to-end execution of enterprise IT rollouts, migrating legacy infrastructure to the cloud, aligning architecture with NIST SP 800-53 and FedRAMP standards, and delivering uptime SLAs above 99.9% across Microsoft 365 and custom platforms.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm border border-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Experience
            </h2>
            <ol className="relative border-l border-gray-300 pl-6 space-y-8">
              {experiences.map((job, idx) => (
                <li key={idx} className="ml-4">
                  <div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                    <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                      <h3 className="font-semibold text-lg">
                        {job.role}
                      </h3>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3 font-medium">
                      {job.company}
                    </p>
                    <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-800">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div 
                  key={c}
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <span className="text-gray-800">{c}</span>
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