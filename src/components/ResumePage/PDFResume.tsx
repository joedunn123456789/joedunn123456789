import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { skillCategories, education, personalInfo, summary, experiences, keyAchievements, certifications } from '../../data/resumeData';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 35,
    fontSize: 9,
    lineHeight: 1.2,
  },
  section: {
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  contact: {
    fontSize: 8,
    marginBottom: 1,
    color: '#333333',
  },
  contactLinks: {
    fontSize: 8,
    marginBottom: 6,
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
    borderBottom: '2pt solid #1F2937',
    paddingBottom: 1,
    textTransform: 'uppercase',
  },
  summaryText: {
    fontSize: 8.5,
    marginBottom: 3,
    textAlign: 'justify',
  },
  summaryLabel: {
    fontWeight: 'bold',
    fontSize: 8.5,
  },
  categoryTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: 2,
  },
  experienceCard: {
    marginBottom: 8,
    padding: 6,
    backgroundColor: '#FFFFFF',
    border: '0.5pt solid #E5E7EB',
    borderRadius: 3,
    wrap: false,
  },
  subsectionTitle: {
    fontSize: 8.5,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 1,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobRole: {
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  jobDate: {
    fontSize: 7.5,
    color: '#666666',
  },
  company: {
    fontSize: 8.5,
    color: '#374151',
    marginBottom: 2,
    fontStyle: 'italic',
  },
  administeredSystems: {
    fontSize: 7.5,
    color: '#4B5563',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 1,
    paddingLeft: 5,
  },
  bulletText: {
    fontSize: 7.5,
    flex: 1,
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    marginBottom: 1,
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    border: '0.5pt solid #d1d5db',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingTop: 1.5,
    paddingBottom: 1.5,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillText: {
    fontSize: 7,
    lineHeight: 1,
    textAlign: 'center',
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
    wrap: false,
  },
  certificationText: {
    fontSize: 8,
  },
});

const PDFResume = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={[styles.section, { borderBottom: '2pt solid #1F2937', paddingBottom: 6 }]}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        {personalInfo.title && (
          <Text style={[styles.contact, { fontWeight: 'bold', fontSize: 9, marginBottom: 3 }]}>
            {personalInfo.title}
          </Text>
        )}
        <Text style={styles.contact}>
          {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
        </Text>
        <Text style={styles.contactLinks}>
          {personalInfo.linkedin.display} | {personalInfo.github.display}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          {summary.main}
        </Text>
      </View>

      {/* Key Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Achievements</Text>
        {keyAchievements.map((achievement, index) => (
          <View key={index} style={styles.bullet}>
            <Text style={styles.bulletText}>• {achievement}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <Text key={category} style={styles.summaryText}>
            <Text style={styles.summaryLabel}>{category}:</Text> {categorySkills.join(', ')}
          </Text>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={{ marginBottom: 8, borderBottom: index < experiences.length - 1 ? '0.5pt solid #D1D5DB' : 'none', paddingBottom: 6 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobRole}>{exp.role}</Text>
              <Text style={styles.jobDate}>{exp.date}</Text>
            </View>
            <Text style={styles.company}>{exp.company}</Text>
            {exp.administeredSystems && (
              <Text style={styles.administeredSystems}>
                Administered Systems: {exp.administeredSystems}
              </Text>
            )}
            {exp.bullets.map((bullet, bulletIndex) => (
              <View key={bulletIndex} style={styles.bullet}>
                <Text style={styles.bulletText}>• {bullet}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.certificationText}>
          <Text style={{ fontWeight: 'bold' }}>{education.degree}</Text>{'\n'}
          {education.institution} | {education.date}
        </Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={styles.certificationGrid}>
          {certifications.map((cert, index) => (
            <View key={index} style={styles.certificationTag}>
              <Text style={styles.certificationText}>{cert}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFResume;