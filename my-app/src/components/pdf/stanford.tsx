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

const styles = (themeColor: string) =>
  StyleSheet.create({
    page: {
      padding: 72,
      fontSize: 11,
      fontFamily: "Helvetica",
      color: "#000",
    },
    heading: {
      fontSize: 13,
      fontWeight: "bold",
      color: themeColor,
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

const StanfordPDF = ({ data, color }: { data: any; color: string }) => {
  const s = styles(color);

  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.section}>
          <Text style={[s.heading, { textAlign: "center" }]}>{data.name}</Text>
          <View style={{ textAlign: "center" }}>
            {data.address && <Text style={s.smallText}>{data.address}</Text>}
            {data.phone && <Text style={s.smallText}>{data.phone}</Text>}
            {data.email && <Text style={s.smallText}>{data.email}</Text>}
            {data.linkedin && (
              <Link
                style={s.smallText}
                src={
                  data.linkedin.startsWith("http")
                    ? data.linkedin
                    : `https://${data.linkedin}`
                }
              >
                LinkedIn
              </Link>
            )}
            <View style={s.borderBottom} />
          </View>
        </View>


        {/* Summary */}
        {data.summary && (
          <View style={s.section}>
            <Text style={s.heading}>Summary</Text>
            <Text style={s.text}>{data.summary}</Text>
          </View>
        )}


        <View style={s.borderBottom} />
        {/* Education */}
        {data.education?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <Text style={s.subheading}>{edu.school}</Text>
                <View style={s.rowBetween}>
                  <Text style={s.text}>{edu.degree}</Text>
                  <Text style={s.text}>{edu.year}</Text>
                </View>
              </View>
            ))}
          </View>
        )}


        <View style={s.borderBottom} />
        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Experience</Text>
            {data.experience.map((exp: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <View style={s.rowBetween}>
                  <Text style={s.subheading}>
                    {exp.role} at {exp.company}
                  </Text>
                  <Text style={s.smallText}>{exp.duration}</Text>
                </View>
                {Array.isArray(exp.description)
                  ? exp.description.map((desc: string, i: number) => (
                    <Text key={i} style={s.bullet}>
                      • {desc.trim()}
                    </Text>
                  ))
                  : typeof exp.description === "string"
                    ? exp.description
                      .split("•")
                      .filter((item: string) => item.trim() !== "")
                      .map((item: string, i: number) => (
                        <Text key={i} style={s.bullet}>
                          • {item.trim()}
                        </Text>
                      ))
                    : null}
              </View>
            ))}
          </View>
        )}

        <View style={s.borderBottom} />
        {/* Skills */}
        {data.skills?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.skills.map((skill: string, idx: number) => (
                <Text key={idx} style={[s.text, { width: "33.33%" }]}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        )}



        {/* Certifications */}
        <View style={s.borderBottom} />
        {data.certifications?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Certifications</Text>
            {data.certifications.map((cert: any, idx: number) => (
              <View key={idx}>

                <Text style={s.subheading}>{cert.title}</Text>
                <View style={s.rowBetween}>
                  <Text style={s.smallText}>
                    {cert.institution}
                    <Text style={s.smallText}>
                      {cert.year}
                    </Text>

                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* References */}
        <View style={s.borderBottom} />
        <View style={s.section}>
          <Text style={s.heading}>References</Text>
          {data.references?.length > 0 ? (
            data.references.map((ref: any, idx: number) => (
              <View key={idx}>
                <Text style={s.subheading}>{ref.name}</Text>
                <Text style={s.text}>
                  {ref.company}
                </Text>
                <Text style={s.text}>{ref.contact}</Text>
              </View>
            ))
          ) : (
            <Text style={[s.text, s.center]}>
              References available upon request
            </Text>
          )}
        </View>
        <View style={s.borderBottom} />



      </Page>
    </Document>
  );
};

export default StanfordPDF;
