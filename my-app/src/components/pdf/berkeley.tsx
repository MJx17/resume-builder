import React from 'react';
import { Document, Page, View, Text, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { TemplateProps } from '@/types/types';

export default function BerkleyPDF({ data, color }: TemplateProps) {
  if (!data) return null;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Profile Picture */}
          {data.image && (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                src={
                  typeof data.image === 'string'
                    ? data.image
                    : URL.createObjectURL(data.image)
                }
              />
            </View>
          )}

          {/* Contact Info */}
          <View style={styles.section}>
            {data.address && <Text style={styles.text}>📍 {data.address}</Text>}
            {data.phone && <Text style={styles.text}>📞 {data.phone}</Text>}
            {data.email && <Text style={styles.text}>✉️ {data.email}</Text>}
            {data.linkedin && (
              <Link src={data.linkedin.startsWith('http') ? data.linkedin : `https://${data.linkedin}`}>
                <Text style={[styles.text, styles.link]}>LinkedIn</Text>
              </Link>
            )}
          </View>

          {/* Skills */}
          {data.skills && (
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]} >Skills</Text>
              {data.skills.map((skill: string, i: number) => (
                <Text key={i} style={styles.listItem}>• {skill}</Text>
              ))}
            </View>
          )}

          {/* Certifications */}
          {data.certifications && (
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>Certifications</Text>
              {data.certifications.map((cert: any, i: number) => (
                <View key={i} style={styles.certBlock}>
                  <Text style={styles.subHeading}>{cert.title}</Text>
                  <Text>{cert.institution} • {cert.year}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Summary */}
          {data.summary && (
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>Summary</Text>
              <Text style={styles.text}>{data.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {data.experience && (
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>Experience</Text>
              {data.experience.map((exp: any, idx: number) => (
                <View key={idx} style={styles.expBlock}>
                  <Text style={styles.subHeading}>{exp.company} ({exp.duration})</Text>
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item: string, i: number) => (
                      <Text key={i} style={styles.listItem}>• {item.trim()}</Text>
                    ))
                  ) : (
                    exp.description.split('•').filter(Boolean).map((item: string, i: number) => (
                      <Text key={i} style={styles.listItem}>• {item.trim()}</Text>
                    ))
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {data.education && (
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>Education</Text>
              {data.education.map((edu: any, i: number) => (
                <View key={i}>
                  <Text style={styles.subHeading}>{edu.school}</Text>
                  <Text>{edu.degree} • {edu.year}</Text>
                </View>
              ))}
            </View>
          )}

          {/* References */}
          <View style={styles.section}>
            <Text style={[styles.heading, { color }]}>References</Text>
            {data.references ? (
              data.references.map((ref: any, i: number) => (
                <View key={i}>
                  <Text style={styles.subHeading}>{ref.name}</Text>
                  <Text>{ref.position} at {ref.company}</Text>
                  <Text>{ref.contact}</Text>
                </View>
              ))
            ) : (
              <Text>Available upon request</Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 72,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  leftColumn: {
    width: '40%',
    paddingRight: 10,
    backgroundColor: '#ccc'
  },
  rightColumn: {
    width: '60%',
    paddingLeft: 10,

  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
  },
  listItem: {
    fontSize: 9,
    marginLeft: 8,
    marginBottom: 1,
  },
  certBlock: {
    marginBottom: 4,
  },
  expBlock: {
    marginBottom: 6,
  },
  link: {
    color: '#1D4ED8',
    textDecoration: 'underline',
  },
});
