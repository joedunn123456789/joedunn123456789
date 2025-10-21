import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { skillCategories, certificationCategories, education, personalInfo, summary, experiences, keyAchievements } from '../../data/resumeData';

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
    wrap: false,
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
  administeredSystems: {
    fontSize: 8,
    color: '#4B5563',
    marginBottom: 4,
    fontWeight: 'bold',
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
    wrap: false,
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
      <View style={styles.section}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.contact}>
          {personalInfo.location} • {personalInfo.phone} • <Link src={`mailto:${personalInfo.email}`} style={styles.link}>{personalInfo.email}</Link>
        </Text>
        <Text style={styles.contactLinks}>
          LinkedIn: <Link src={personalInfo.linkedin.url} style={styles.link}>{personalInfo.linkedin.display}</Link> • GitHub: <Link src={personalInfo.github.url} style={styles.link}>{personalInfo.github.display}</Link>
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summaryText}>
          {summary.main}
        </Text>
        <Text style={styles.summaryText}>
          <Text style={styles.summaryLabel}>Why I Code:</Text>{'\n'}
          {summary.whyICode}
        </Text>
      </View>

      {/* Key Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KEY ACHIEVEMENTS</Text>
        {keyAchievements.map((achievement, index) => (
          <View key={index} style={styles.bullet}>
            <Text style={styles.bulletText}>• {achievement}</Text>
          </View>
        ))}
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

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.experienceCard}>
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