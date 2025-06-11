import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import { TemplateProps } from "@/types/types";

const styles = StyleSheet.create({
  page: {
    padding: 72,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    fontWeight: "medium",
    marginBottom: 10,
  },
  contactImageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 8,
  },
  contact: {
    fontSize: 9,
    lineHeight: 1.4,
    maxWidth: "70%",
  },
  image: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 4,
  },
  heading: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
    color: "#333",
  },
  text: {
    fontSize: 9,
    textAlign: "justify",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheading: {
    fontSize: 9,
    fontWeight: "bold",
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#000",
    marginVertical: 8,
  },
  twoColumnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  leftColumn: {
    width: "40%",
    paddingRight: 4,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  rightColumn: {
    width: "60%",
    paddingLeft: 4,
  },
  listItem: {
    marginBottom: 2,
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  certBlock: {
    marginBottom: 4,
  },
  smallText: {
    fontSize: 9,
    color: "gray",
  },
  center: {
    textAlign: "center",
  },
    bullet: {
    fontSize: 10,
    marginLeft: 12,
    textAlign: "justify",
  },
});

const MitPDF = ({ data, color }: TemplateProps) => {
  if (!data) return null;

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Name & Title */}
        <View>
          <Text style={[styles.name, { color }]}>{data.name}</Text>
          <Text style={[styles.title, { color }]}>{data.title}</Text>
        </View>

        {/* Contact + Image */}
        <View style={styles.contactImageRow}>
          <View style={styles.contact}>
            {data.address && <Text>{data.address}</Text>}
            {data.phone && <Text>{data.phone}</Text>}
            {data.email && <Text>{data.email}</Text>}
            {data.linkedin && (
              <Link src={data.linkedin.startsWith("http") ? data.linkedin : `https://${data.linkedin}`}>
                LinkedIn
              </Link>
            )}
          </View>
          {data.image && (
            <Image
              style={styles.image}
              src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)}
            />
          )}
        </View>

        {/* Summary with divider */}
        {data.summary && (
          <>
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>Summary</Text>
              <Text style={styles.text}>{data.summary}</Text>
            </View>
            <View style={styles.divider} />
          </>
        )}

        {/* Two Column Section */}
        <View style={styles.twoColumnSection}>
          {/* Left Column - Education */}
          <View style={styles.leftColumn}>
            {data.education && (
              <View style={styles.section}>
                <Text style={[styles.heading, { color }]}>Education</Text>
                {data.education.map((edu: any, i: number) => (
                  <View key={i} style={{ marginBottom: 4 }}>
                    <Text style={styles.subheading}>{edu.school}</Text>
                    <View style={styles.rowBetween}>
                      <Text>{edu.degree}</Text>
                      <Text>{edu.year}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {data.skills && (
              <View style={styles.section}>
                <Text style={[styles.heading, { color }]} >Skills</Text>
                {data.skills.map((skill: string, i: number) => (
                  <Text key={i} style={styles.listItem}>• {skill}</Text>
                ))}
              </View>
            )}

            {/* Certifications */}
            {data.certifications?.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.heading, { color }]}>Certifications</Text>
                {data.certifications.map((cert: any, idx: number) => (
                  <View key={idx}>
                    <Text style={styles.subheading}>{cert.title}</Text>
                    <View style={styles.rowBetween}>
                      <Text>
                        {cert.institution}
                      </Text>
                      <Text> {cert.year}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Right Column - Other Sections (Placeholder) */}
          <View style={styles.rightColumn}>
            {/* Experience Section */}
            {data.experience?.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.heading, { color },]}>Experience</Text>
                {data.experience.map((exp: any, idx: number) => (
                  <View key={idx} style={{ marginBottom: 6 }}>
                    <View style={styles.rowBetween}>
                      <Text style={styles.subheading}>
                        {exp.position} at {exp.company}
                      </Text>
                      <Text style={styles.smallText}>{exp.duration}</Text>
                    </View>
                    {Array.isArray(exp.description)
                      ? exp.description.map((desc: string, i: number) => (
                        <Text key={i} style={styles.bullet}>
                          • {desc.trim()}
                        </Text>
                      ))
                      : typeof exp.description === "string"
                        ? exp.description
                          .split("•")
                          .filter((item: string) => item.trim() !== "")
                          .map((item: string, i: number) => (
                            <Text key={i} style={styles.bullet}>
                              • {item.trim()}
                            </Text>
                          ))
                        : null}
                  </View>
                ))}
              </View>
            )}

            {/* References Section */}
            <View style={styles.section}>
              <Text style={[styles.heading, { color }]}>References</Text>
              {data.references?.length > 0 ? (
                data.references.map((ref: any, idx: number) => (
                  <View key={idx} style={{ marginBottom: 4 }}>
                    <Text style={styles.subheading}>{ref.name}</Text>
                    <Text style={styles.text}>{ref.company}</Text>
                    <Text style={styles.text}>{ref.contact}</Text>
                  </View>
                ))
              ) : (
                <Text style={[styles.text, styles.center]}>
                  References available upon request
                </Text>
              )}
            </View>
          </View>

        </View>


      </Page>
    </Document>
  );
};

export default MitPDF;
