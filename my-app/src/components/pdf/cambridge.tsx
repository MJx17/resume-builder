// components/template/ModernResumePDF.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";


const styles = (themeColor: string) =>
  StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 9,
      fontFamily: "Helvetica",
      color: "#222",
    },
    container: {
  
      margin: "auto",
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: "#0a0a0a",
      borderBottomStyle: "solid",
      marginBottom: 10,
      textAlign: "center",
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
      color: themeColor,
    },
    title: {
      fontSize: 8,
      marginTop: 2,
      color: themeColor,
      fontWeight: "normal",
    },
    section: {
      marginBottom: 10,
    },
    twoColumnGrid: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftColumn: {
      width: "35%",
      paddingRight: 10,
      borderRightWidth: 1,
      borderRightColor: "#0a0a0a",
      borderRightStyle: "solid",
    },
    rightColumn: {
      width: "60%",
      paddingLeft: 10,
    },
    profileImageContainer: {
      marginBottom: 10,
      alignItems: "center",
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#eee",
    },
    sectionHeading: {
      fontSize: 10,
      fontWeight: "bold",
      color: themeColor,
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    contactItem: {
      flexDirection: "row",
      marginBottom: 4,
      fontSize: 8,
      color: "#555",
    },
    contactIconPlaceholder: {
      width: 10,
      height: 10,
      marginRight: 4,
      // Could be replaced with inline SVG or image if needed
    },
    skillList: {
      marginLeft: 10,
      fontSize: 8,
      color: "#555",
    },
    listItem: {
      marginBottom: 2,
    },
    experienceRoleCompany: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontWeight: "bold",
      fontSize: 9,
      marginBottom: 2,
    },
    experienceDescription: {
      fontSize: 8,
      color: "#555",
      marginLeft: 10,
    },
    link: {
      color: "blue",
      textDecoration: "underline",
      fontSize: 8,
    },
    textJustify: {
      textAlign: "justify",
    },
  });

const ModernResumePDF = ({ data, color }: { data: any; color: string }) => {
  if (!data) return null;
  const s = styles(color);

  return (
    <Document>
      <Page size="A4" style={s.page}>
        <View style={s.container}>
          {/* Header */}
          <View style={s.header}>
            <Text style={s.name}>{data.name}</Text>
            <Text style={s.title}>{data.title}</Text>
          </View>

          {/* Two Columns */}
          <View style={s.twoColumnGrid}>
            {/* Left Column */}
            <View style={s.leftColumn}>
              {/* Profile Image */}
              {data.image && (
                <View style={s.profileImageContainer}>
                  <Image src={data.image} style={s.profileImage} />
                </View>
              )}

              {/* Summary */}
              {data.summary && (
                <View style={s.section}>
                  <Text style={s.sectionHeading}>Summary</Text>
                  <Text style={[s.textJustify, { fontSize: 8, color: "#555" }]}>
                    {data.summary}
                  </Text>
                </View>
              )}

              {/* Contact */}
              <View style={s.section}>
                <Text style={s.sectionHeading}>Contact</Text>
                {data.address && (
                  <Text style={s.contactItem}>
                    {/* Could add icon SVG here */}
                    {data.address}
                  </Text>
                )}
                {data.phone && <Text style={s.contactItem}>{data.phone}</Text>}
                {data.email && <Text style={s.contactItem}>{data.email}</Text>}
                {data.linkedin && (
                  <Text style={s.contactItem}>
                    LinkedIn:{" "}
                    <Text
                      style={s.link}
                      // Note: react-pdf does not support external links fully, but you can add `src`
                      // Using `Link` component from react-pdf could be better if needed
                    >
                      {data.linkedin.startsWith("http")
                        ? data.linkedin
                        : `https://${data.linkedin}`}
                    </Text>
                  </Text>
                )}
              </View>

              {/* Education */}
              {data.education && (
                <View style={s.section}>
                  <Text style={s.sectionHeading}>Education</Text>
                  {data.education.map((edu: any, idx: number) => (
                    <View key={idx} style={{ marginBottom: 4 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 9 }}>
                        {edu.school}
                      </Text>
                      <Text
                        style={{ fontSize: 8, color: "#555", flexDirection: "row" }}
                      >
                        {edu.degree} — {edu.year}
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              {/* Skills */}
              {data.skills && (
                <View style={s.section}>
                  <Text style={s.sectionHeading}>Skills</Text>
                  <View style={{ marginLeft: 10 }}>
                    {data.skills.map((skill: string, idx: number) => (
                      <Text key={idx} style={s.listItem}>
                        • {skill}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </View>

            {/* Right Column */}
            <View style={s.rightColumn}>
              {/* Experience */}
              {data.experience && (
                <View style={s.section}>
                  <Text style={s.sectionHeading}>Experience</Text>
                  {data.experience.map((exp: any, idx: number) => (
                    <View key={idx} style={{ marginBottom: 8 }}>
                      <View style={s.experienceRoleCompany}>
                        <Text>{`${exp.role} at ${exp.company}`}</Text>
                        <Text style={{ color: "#777", fontSize: 8 }}>
                          {exp.duration}
                        </Text>
                      </View>
                      <View>
                        {Array.isArray(exp.description) ? (
                          exp.description.map((desc: string, i: number) => (
                            <Text key={i} style={s.experienceDescription}>
                              • {desc.trim()}
                            </Text>
                          ))
                        ) : typeof exp.description === "string" ? (
                          exp.description
                            .split("•")
                            .filter((item: any) => item.trim() !== "")
                            .map((item: any, i:any) => (
                              <Text key={i} style={s.experienceDescription}>
                                • {item.trim()}
                              </Text>
                            ))
                        ) : null}
                      </View>
                    </View>
                  ))}
                </View>
              )}

              {/* Certifications */}
              {data.certifications && (
                <View style={s.section}>
                  <Text style={s.sectionHeading}>Certifications</Text>
                  {data.certifications.map((cert: any, idx: number) => (
                    <View key={idx} style={{ marginBottom: 6 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 9 }}>
                        {cert.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          fontSize: 8,
                          color: "#555",
                        }}
                      >
                        <Text>{cert.institution}</Text>
                        <Text>{cert.year}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}

              {/* References */}
              <View style={s.section}>
                <Text style={s.sectionHeading}>References</Text>
                {data.references && data.references.length > 0 ? (
                  data.references.map((ref: any, idx: number) => (
                    <View key={idx} style={{ marginBottom: 6 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 9 }}>
                        {ref.name}
                      </Text>
                      <Text style={{ fontSize: 8, color: "#555" }}>
                        {ref.title} at {ref.company}
                      </Text>
                      <Text style={{ fontSize: 8, color: "#555" }}>
                        {ref.contact}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text style={{ fontSize: 8, color: "#555" }}>
                    Available upon request
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ModernResumePDF;
