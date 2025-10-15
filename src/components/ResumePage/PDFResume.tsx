import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { skillCategories, certificationCategories, education } from '../../data/resumeData';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontSize: 10,
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  contact: {
    fontSize: 9,
    marginBottom: 2,
    color: '#666666',
  },
  contactLinks: {
    fontSize: 9,
    marginBottom: 12,
    color: '#666666',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    borderBottom: '1pt solid #E5E7EB',
    paddingBottom: 2,
  },
  summaryText: {
    fontSize: 9,
    marginBottom: 6,
    textAlign: 'justify',
  },
  summaryLabel: {
    fontWeight: 'bold',
    fontSize: 9,
  },
  categoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 6,
  },
  experienceCard: {
    marginBottom: 8,
    padding: 6,
    backgroundColor: '#FFFFFF',
    border: '0.5pt solid #E5E7EB',
    borderRadius: 3,
  },
  subsectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 2,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  jobRole: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  jobDate: {
    fontSize: 8,
    color: '#666666',
  },
  company: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 5,
  },
  bulletText: {
    fontSize: 8,
    flex: 1,
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 2,
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    border: '0.5pt solid #d1d5db',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginBottom: 3,
  },
  skillText: {
    fontSize: 7,
  },
  certificationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  certificationTag: {
    backgroundColor: '#f3f4f6',
    border: '0.5pt solid #d1d5db',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginBottom: 3,
    width: '48%',
    textAlign: 'center',
  },
  certificationText: {
    fontSize: 8,
  },
});

const PDFResume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.name}>Joseph Henry Dunn II</Text>
        <Text style={styles.contact}>
          Wildomar, CA • 830-666-2525 • <Link src="mailto:jdunn0423@gmail.com" style={styles.link}>jdunn0423@gmail.com</Link>
        </Text>
        <Text style={styles.contactLinks}>
          LinkedIn: <Link src="https://www.linkedin.com/in/joe-d-80b388358/" style={styles.link}>linkedin.com/in/joe-d-80b388358</Link> • GitHub: <Link src="https://github.com/joedunn123456789" style={styles.link}>github.com/joedunn123456789</Link>
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summaryText}>
          Systems Administrator transitioning to software development, with hands-on coding experience building automation tools, REST API integrations, and web applications in production environments. Developed proficiency in Python, JavaScript, PHP, and PowerShell through solving real-world infrastructure challenges. Seeking to leverage systems knowledge and programming skills in a developer role where understanding infrastructure is an asset.
        </Text>
        <Text style={styles.summaryText}>
          <Text style={styles.summaryLabel}>Why I Code:</Text>{'\n'}
          Started automating repetitive tasks to save time, discovered I love solving problems through code, and have progressively taken on more development-focused projects including API integrations, web applications, and custom tooling.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <View key={category}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <View style={styles.skillsContainer}>
              {categorySkills.map((skill, index) => (
                <View key={index} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Relevant Coding Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RELEVANT CODING EXPERIENCE</Text>

        {/* Web Developer */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>Web Developer (Drupal/PHP) | Tactis LLC | Remote</Text>
          <Text style={styles.jobDate}>Aug 2022 – Oct 2025</Text>
          <Text style={styles.company}>Took on increasingly complex development tasks, eventually leading website modernization project</Text>

          <Text style={styles.subsectionTitle}>Frontend Development:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Refactored SCSS stylesheets and Twig templates using Bootstrap 5, implementing mobile-first responsive design with desktop overrides</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Translated Figma mockups into pixel-perfect HTML/CSS/JavaScript, ensuring cross-browser compatibility</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Improved Lighthouse performance scores from 70 to 90 through code optimization, lazy loading, and asset compression</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built custom reusable Drupal components (Views, Blocks, custom fields) allowing non-technical users to manage content</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Debugged JavaScript issues and implemented dynamic frontend features for improved user experience</Text>
          </View>

          <Text style={styles.subsectionTitle}>Backend Development:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Developed PHP code within Drupal framework, creating custom functionality and modifying existing modules</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Configured complex Drupal Views with custom query logic, filters, and contextual relationships</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Worked with Drupal's theming layer, creating custom templates and preprocessing functions</Text>
          </View>

          <Text style={styles.subsectionTitle}>DevOps:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built local development environments using Docker and DDEV, maintaining dev/prod parity</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Managed Git workflows including branching, merging, and resolving conflicts in Bitbucket</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Deployed code to Acquia Cloud platform, following proper deployment procedures and rollback strategies</Text>
          </View>
        </View>

        {/* API Integration Developer */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>API Integration Developer | Tactis LLC | Remote</Text>
          <Text style={styles.jobDate}>Aug 2022 – Oct 2025</Text>
          <Text style={styles.company}>Built custom integrations when off-the-shelf solutions didn't meet requirements</Text>

          <Text style={styles.subsectionTitle}>REST API Development:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Engineered custom REST API integration between NICE CXOne and Zendesk using Python</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Handled OAuth authentication and token management</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Built error handling and retry logic for resilient API calls</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Transformed data between different API schemas</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Logged API transactions for debugging and auditing</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Increased customer satisfaction by 35% through real-time data synchronization</Text>
          </View>

          <Text style={styles.subsectionTitle}>Workflow Automation:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Developed automated workflows in ServiceNow Flow Designer using JavaScript and API calls</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built Power Automate flows integrating multiple systems (SharePoint, Azure AD, custom APIs)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Created Python scripts for identity provisioning, reducing manual processing time by 35%</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Wrote PowerShell modules for automated onboarding, patching, and system configuration</Text>
          </View>

          <Text style={styles.subsectionTitle}>Integration Results:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Reduced ticket resolution time by 30% through automated data flow between systems</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Saved hundreds of team hours annually by automating repetitive manual tasks</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built reusable code libraries that other team members could leverage</Text>
          </View>
        </View>

        {/* Salesforce Developer */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>Salesforce Developer | Tlingit Haida Tribal Business Corporation</Text>
          <Text style={styles.jobDate}>Apr 2021 – Apr 2022</Text>
          <Text style={styles.company}>Learned Salesforce development to customize the platform beyond declarative configuration</Text>

          <Text style={styles.subsectionTitle}>Application Development:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built automated case routing and escalation workflows using Flow Builder and basic Apex</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Developed bi-directional integration between Salesforce and Jira using REST APIs</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Wrote API middleware handling data synchronization</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Implemented field mapping and data transformation logic</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Created error handling for failed sync attempts</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Reduced ticket resolution time by 25% through intelligent automation</Text>
          </View>

          <Text style={styles.subsectionTitle}>Data Engineering:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Wrote Python ETL scripts to migrate data from legacy systems to Salesforce</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Cleaned and transformed 50,000+ records, ensuring data quality</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Created custom SOQL queries for reporting and data analysis</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Built automated data validation checks to maintain integrity</Text>
          </View>
        </View>

        {/* Automation Engineer */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>Automation Engineer | Various Roles</Text>
          <Text style={styles.jobDate}>2018 – 2022</Text>
          <Text style={styles.company}>Progressively built coding skills through infrastructure automation projects</Text>

          <Text style={styles.subsectionTitle}>Scripting & Automation:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Authored Bash scripts for Linux system administration (Red Hat Enterprise Linux)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Automated deployment processes with zero-downtime rollback capabilities</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Created security compliance checking and remediation scripts</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Built monitoring scripts parsing log files and triggering alerts</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Developed PowerShell modules for Windows/Azure administration</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Automated Active Directory user provisioning and deprovisioning</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Created Azure resource deployment and configuration scripts</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Built inventory and reporting tools querying multiple systems</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Wrote Python scripts for data processing and system integration</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Processed log files with millions of records for security analysis</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Automated vulnerability scanning and report generation</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>  - Created data transformation pipelines between enterprise systems</Text>
          </View>

          <Text style={styles.subsectionTitle}>Problem-Solving Through Code:</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Identified repetitive manual tasks and automated them through scripting</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Debugged existing scripts and improved error handling and logging</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Collaborated with developers to understand best practices and coding standards</Text>
          </View>
        </View>
      </View>

      {/* Systems Administration Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SYSTEMS ADMINISTRATION EXPERIENCE</Text>

        {/* Systems Engineer */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>Systems Engineer | Tactis LLC | Remote</Text>
          <Text style={styles.jobDate}>Aug 2022 – Oct 2025</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Deployed and managed ServiceNow and NICE CXOne platforms (learned their APIs for integration work)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Implemented Azure Sentinel for security monitoring (configured using JSON and KQL queries)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Managed Azure Active Directory and Microsoft 365 (automated tasks via PowerShell/Graph API)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Administered Atlassian suite (Jira, Confluence, Bitbucket) for 75+ users</Text>
          </View>
        </View>

        {/* IT Manager */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>IT Manager | Tlingit Haida Tribal Business Corporation</Text>
          <Text style={styles.jobDate}>Apr 2021 – Apr 2022</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Led Salesforce implementation (learned development to extend platform capabilities)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Migrated infrastructure to VMware ESXi and Azure (scripted much of the migration)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Managed $1M IT budget and led cross-functional technical teams</Text>
          </View>
        </View>

        {/* System Administrator */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>System Administrator | Crystal Management</Text>
          <Text style={styles.jobDate}>Feb 2021 – Apr 2021</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Administered Red Hat Enterprise Linux systems for Air Force (automated via Bash scripting)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Implemented security compliance using DISA STIGs (automated checking and remediation)</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Managed Tenable Security Center for vulnerability management</Text>
          </View>
        </View>

        {/* Information Management Director */}
        <View style={styles.experienceCard}>
          <Text style={styles.jobRole}>Information Management Director | United States Army</Text>
          <Text style={styles.jobDate}>Jan 2018 – Apr 2021</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Directed IT operations for 70+ personnel across multiple functional areas</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Led SharePoint Online migration and GFEBS system enhancements</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletText}>• Managed 500+ classified and unclassified systems with security compliance focus</Text>
          </View>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
        {Object.entries(certificationCategories).map(([category, categoryCerts]) => (
          <View key={category}>
            <Text style={styles.categoryTitle}>{category}:</Text>
            <View style={styles.certificationGrid}>
              {categoryCerts.map((cert, index) => (
                <View key={index} style={styles.certificationTag}>
                  <Text style={styles.certificationText}>{cert}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.certificationText}>
          <Text style={{ fontWeight: 'bold' }}>{education.degree}</Text>{'\n'}
          {education.institution} • {education.date}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFResume;