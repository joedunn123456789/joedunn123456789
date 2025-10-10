import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { experiences, skills, certifications, education } from '../../data/resumeData';

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
    marginBottom: 4,
  },
  contact: {
    fontSize: 9,
    marginBottom: 12,
    color: '#666666',
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
    marginBottom: 4,
    textAlign: 'justify',
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
  certificationItem: {
    marginBottom: 2,
    flexDirection: 'row',
  },
  certificationText: {
    fontSize: 9,
  },
});

const PDFResume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.name}>Joseph Henry Dunn II</Text>
        <Text style={styles.contact}>
          Wildomar, CA • 830-666-2525 • jdunn0423@gmail.com
        </Text>
      </View>

      {/* Summary - Fixed spacing */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summaryText}>
          Cloud Systems Engineer | Infrastructure Manager | Automation Leader with 10+ years of experience specializing in cloud architecture, enterprise IT infrastructure, and secure system automation across federal, defense, and corporate environments.
        </Text>
        <Text style={styles.summaryText}>
          Leads hybrid teams of engineers, developers, and cybersecurity analysts to design, deploy, and support fault-tolerant cloud environments in Azure and AWS, often under tight compliance constraints tied to public and DoD-grade security standards.
        </Text>
        <Text style={styles.summaryText}>
          Spearheads automation of IT workflows and repetitive system tasks using PowerShell, Python, Power Automate, and ServiceNow, freeing up hundreds of team hours annually while reducing error rates in mission-critical environments.
        </Text>
        <Text style={styles.summaryText}>
          Drives end-to-end execution of enterprise IT rollouts, migrating legacy infrastructure to the cloud, aligning architecture with NIST SP 800-53 and FedRAMP standards, and delivering uptime SLAs above 99.9% across Microsoft 365 and custom platforms.
        </Text>
      </View>

      {/* Skills - Better layout */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experiences.map((job, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobRole}>{job.role}</Text>
              <Text style={styles.jobDate}>{job.date}</Text>
            </View>
            <Text style={styles.company}>{job.company}</Text>
            {job.bullets.map((bullet, bulletIndex) => (
              <View key={bulletIndex} style={styles.bullet}>
                <Text style={styles.bulletText}>• {bullet}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {certifications.map((cert, index) => (
          <View key={index} style={styles.certificationItem}>
            <Text style={styles.certificationText}>• {cert}</Text>
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