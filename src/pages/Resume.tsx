import { skillCategories, certificationCategories, education } from '../data/resumeData';
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
            <p className="text-sm text-gray-700">
              LinkedIn: <a href="https://www.linkedin.com/in/joe-d-80b388358/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/joe-d-80b388358</a> • GitHub: <a href="https://github.com/joedunn123456789" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/joedunn123456789</a>
            </p>
          </header>

          {/* Summary */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Summary
            </h2>
            <div className="space-y-3 text-gray-800">
              <p>
                Systems Administrator transitioning to software development, with hands-on coding experience building automation tools, REST API integrations, and web applications in production environments. Developed proficiency in Python, JavaScript, PHP, and PowerShell through solving real-world infrastructure challenges. Seeking to leverage systems knowledge and programming skills in a developer role where understanding infrastructure is an asset.
              </p>
              <p>
                <span className="font-semibold">Why I Code:</span><br />
                Started automating repetitive tasks to save time, discovered I love solving problems through code, and have progressively taken on more development-focused projects including API integrations, web applications, and custom tooling.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-800 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coding Experience */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              RELEVANT CODING EXPERIENCE
            </h2>
            <div className="space-y-6">

              {/* Web Developer */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg">Web Developer (Drupal/PHP) | Tactis LLC | Remote</h3>
                  <p className="text-sm text-gray-600">Aug 2022 – Oct 2025</p>
                  <p className="text-gray-700 italic mt-1">Took on increasingly complex development tasks, eventually leading website modernization project</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Frontend Development:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Refactored SCSS stylesheets and Twig templates using Bootstrap 5, implementing mobile-first responsive design with desktop overrides</li>
                      <li>Translated Figma mockups into pixel-perfect HTML/CSS/JavaScript, ensuring cross-browser compatibility</li>
                      <li>Improved Lighthouse performance scores from 70 to 90 through code optimization, lazy loading, and asset compression</li>
                      <li>Built custom reusable Drupal components (Views, Blocks, custom fields) allowing non-technical users to manage content</li>
                      <li>Debugged JavaScript issues and implemented dynamic frontend features for improved user experience</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Backend Development:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Developed PHP code within Drupal framework, creating custom functionality and modifying existing modules</li>
                      <li>Configured complex Drupal Views with custom query logic, filters, and contextual relationships</li>
                      <li>Worked with Drupal's theming layer, creating custom templates and preprocessing functions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">DevOps:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Built local development environments using Docker and DDEV, maintaining dev/prod parity</li>
                      <li>Managed Git workflows including branching, merging, and resolving conflicts in Bitbucket</li>
                      <li>Deployed code to Acquia Cloud platform, following proper deployment procedures and rollback strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* API Integration Developer */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg">API Integration Developer | Tactis LLC | Remote</h3>
                  <p className="text-sm text-gray-600">Aug 2022 – Oct 2025</p>
                  <p className="text-gray-700 italic mt-1">Built custom integrations when off-the-shelf solutions didn't meet requirements</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">REST API Development:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Engineered custom REST API integration between NICE CXOne and Zendesk using Python
                        <ul className="list-circle pl-5 mt-1 space-y-1">
                          <li>Handled OAuth authentication and token management</li>
                          <li>Built error handling and retry logic for resilient API calls</li>
                          <li>Transformed data between different API schemas</li>
                          <li>Logged API transactions for debugging and auditing</li>
                        </ul>
                      </li>
                      <li>Increased customer satisfaction by 35% through real-time data synchronization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Workflow Automation:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Developed automated workflows in ServiceNow Flow Designer using JavaScript and API calls</li>
                      <li>Built Power Automate flows integrating multiple systems (SharePoint, Azure AD, custom APIs)</li>
                      <li>Created Python scripts for identity provisioning, reducing manual processing time by 35%</li>
                      <li>Wrote PowerShell modules for automated onboarding, patching, and system configuration</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Integration Results:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Reduced ticket resolution time by 30% through automated data flow between systems</li>
                      <li>Saved hundreds of team hours annually by automating repetitive manual tasks</li>
                      <li>Built reusable code libraries that other team members could leverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Salesforce Developer */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg">Salesforce Developer | Tlingit Haida Tribal Business Corporation</h3>
                  <p className="text-sm text-gray-600">Apr 2021 – Apr 2022</p>
                  <p className="text-gray-700 italic mt-1">Learned Salesforce development to customize the platform beyond declarative configuration</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Application Development:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Built automated case routing and escalation workflows using Flow Builder and basic Apex</li>
                      <li>Developed bi-directional integration between Salesforce and Jira using REST APIs
                        <ul className="list-circle pl-5 mt-1 space-y-1">
                          <li>Wrote API middleware handling data synchronization</li>
                          <li>Implemented field mapping and data transformation logic</li>
                          <li>Created error handling for failed sync attempts</li>
                        </ul>
                      </li>
                      <li>Reduced ticket resolution time by 25% through intelligent automation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Data Engineering:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Wrote Python ETL scripts to migrate data from legacy systems to Salesforce</li>
                      <li>Cleaned and transformed 50,000+ records, ensuring data quality</li>
                      <li>Created custom SOQL queries for reporting and data analysis</li>
                      <li>Built automated data validation checks to maintain integrity</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Automation Engineer */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg">Automation Engineer | Various Roles</h3>
                  <p className="text-sm text-gray-600">2018 – 2022</p>
                  <p className="text-gray-700 italic mt-1">Progressively built coding skills through infrastructure automation projects</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Scripting & Automation:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Authored Bash scripts for Linux system administration (Red Hat Enterprise Linux)
                        <ul className="list-circle pl-5 mt-1 space-y-1">
                          <li>Automated deployment processes with zero-downtime rollback capabilities</li>
                          <li>Created security compliance checking and remediation scripts</li>
                          <li>Built monitoring scripts parsing log files and triggering alerts</li>
                        </ul>
                      </li>
                      <li>Developed PowerShell modules for Windows/Azure administration
                        <ul className="list-circle pl-5 mt-1 space-y-1">
                          <li>Automated Active Directory user provisioning and deprovisioning</li>
                          <li>Created Azure resource deployment and configuration scripts</li>
                          <li>Built inventory and reporting tools querying multiple systems</li>
                        </ul>
                      </li>
                      <li>Wrote Python scripts for data processing and system integration
                        <ul className="list-circle pl-5 mt-1 space-y-1">
                          <li>Processed log files with millions of records for security analysis</li>
                          <li>Automated vulnerability scanning and report generation</li>
                          <li>Created data transformation pipelines between enterprise systems</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Problem-Solving Through Code:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Identified repetitive manual tasks and automated them through scripting</li>
                      <li>Debugged existing scripts and improved error handling and logging</li>
                      <li>Collaborated with developers to understand best practices and coding standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Systems Administration Experience */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              SYSTEMS ADMINISTRATION EXPERIENCE
            </h2>
            <div className="space-y-4">

              {/* Systems Engineer */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">Systems Engineer | Tactis LLC | Remote</h3>
                  <p className="text-sm text-gray-600">Aug 2022 – Oct 2025</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li>Deployed and managed ServiceNow and NICE CXOne platforms (learned their APIs for integration work)</li>
                  <li>Implemented Azure Sentinel for security monitoring (configured using JSON and KQL queries)</li>
                  <li>Managed Azure Active Directory and Microsoft 365 (automated tasks via PowerShell/Graph API)</li>
                  <li>Administered Atlassian suite (Jira, Confluence, Bitbucket) for 75+ users</li>
                </ul>
              </div>

              {/* IT Manager */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">IT Manager | Tlingit Haida Tribal Business Corporation</h3>
                  <p className="text-sm text-gray-600">Apr 2021 – Apr 2022</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li>Led Salesforce implementation (learned development to extend platform capabilities)</li>
                  <li>Migrated infrastructure to VMware ESXi and Azure (scripted much of the migration)</li>
                  <li>Managed $1M IT budget and led cross-functional technical teams</li>
                </ul>
              </div>

              {/* System Administrator */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">System Administrator | Crystal Management</h3>
                  <p className="text-sm text-gray-600">Feb 2021 – Apr 2021</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li>Administered Red Hat Enterprise Linux systems for Air Force (automated via Bash scripting)</li>
                  <li>Implemented security compliance using DISA STIGs (automated checking and remediation)</li>
                  <li>Managed Tenable Security Center for vulnerability management</li>
                </ul>
              </div>

              {/* Information Management Director */}
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">Information Management Director | United States Army</h3>
                  <p className="text-sm text-gray-600">Jan 2018 – Apr 2021</p>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li>Directed IT operations for 70+ personnel across multiple functional areas</li>
                  <li>Led SharePoint Online migration and GFEBS system enhancements</li>
                  <li>Managed 500+ classified and unclassified systems with security compliance focus</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
              CERTIFICATIONS
            </h2>
            <div className="space-y-4">
              {Object.entries(certificationCategories).map(([category, categoryCerts]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-800 mb-2">{category}:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {categoryCerts.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-2 rounded-full bg-gray-100 text-sm border border-gray-200 text-center"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
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