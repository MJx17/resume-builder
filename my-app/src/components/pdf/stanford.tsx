// components/pdf/StanfordPDF.tsx
import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { TemplateProps } from '@/types/types';


const styles = StyleSheet.create({
  page: {
    padding: 72,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#000",
  },
  heading: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  subheading: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  smallText: {
    fontSize: 9,
    color: "gray",
  },
  text: {
    fontSize: 10,
    marginBottom: 2,
    textAlign: "justify",
  },
  section: {
    marginBottom: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginVertical: 6,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sandwichBorder: {
    borderTopWidth: 1,
    borderTopColor: "#444",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingVertical: 4,
    marginBottom: 6,
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

const StanfordPDF = ({ data, color }: TemplateProps) => {


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color }, { textAlign: "center" }]}>{data.name}</Text>
          <View style={{ textAlign: "center" }}>
            {data.address && <Text style={styles.smallText}>{data.address}</Text>}
            {data.phone && <Text style={styles.smallText}>{data.phone}</Text>}
            {data.email && <Text style={styles.smallText}>{data.email}</Text>}
            {data.linkedin && (
              <Link
                style={styles.smallText}
                src={
                  data.linkedin.startsWith("http")
                    ? data.linkedin
                    : `https://${data.linkedin}`
                }
              >
                LinkedIn
              </Link>
            )}
            <View style={styles.borderBottom} />
          </View>
        </View>


        {/* Summary */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color },]}>Summary</Text>
            <Text style={styles.text}>{data.summary}</Text>
          </View>
        )}


        <View style={styles.borderBottom} />
        {/* Education */}
        {data.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color },]}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <Text style={styles.subheading}>{edu.school}</Text>
                <View style={styles.rowBetween}>
                  <Text style={styles.text}>{edu.degree}</Text>
                  <Text style={styles.text}>{edu.year}</Text>
                </View>
              </View>
            ))}
          </View>
        )}


        <View style={styles.borderBottom} />
        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color },]}>Experience</Text>
            {data.experience.map((exp: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.subheading}>
                    {exp.role} at {exp.company}
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

        <View style={styles.borderBottom} />
        {/* Skills */}
        {data.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color },]}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.skills.map((skill: string, idx: number) => (
                <Text key={idx} style={[styles.text, { width: "33.33%" }]}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        )}



        {/* Certifications */}
        <View style={styles.borderBottom} />
        {data.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color },]}>Certifications</Text>
            {data.certifications.map((cert: any, idx: number) => (
              <View key={idx}>

                <Text style={styles.subheading}>{cert.title}</Text>
                <View style={styles.rowBetween}>
                  <Text style={styles.smallText}>
                    {cert.institution}
                    <Text style={styles.smallText}>
                      {cert.year}
                    </Text>

                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* References */}
        <View style={styles.borderBottom} />
        <View style={styles.section}>
          <Text style={[styles.heading, { color },]}>References</Text>
          {data.references?.length > 0 ? (
            data.references.map((ref: any, idx: number) => (
              <View key={idx}>
                <Text style={styles.subheading}>{ref.name}</Text>
                <Text style={styles.text}>
                  {ref.company}
                </Text>
                <Text style={styles.text}>{ref.contact}</Text>
              </View>
            ))
          ) : (
            <Text style={[styles.text, styles.center]}>
              References available upon request
            </Text>
          )}
        </View>
        <View style={styles.borderBottom} />



      </Page>
    </Document>
  );
};

export default StanfordPDF;
