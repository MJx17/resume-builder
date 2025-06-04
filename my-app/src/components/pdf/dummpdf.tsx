// components/template/DummyPDF.tsx
import React from "react";

import { useLayoutStore } from "@/store/layoutStore";
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
      color: "#000", // default text color
    },
    section: {
      marginBottom: 12,
    },
    heading: {
      fontSize: 13,
      fontWeight: "bold",
      color: themeColor,
      marginBottom: 4,
      textAlign: "center",
      textTransform: "uppercase",
    },
    subheading: {
      fontSize: 11,
      fontWeight: "bold",
      marginBottom: 2,
    },
    text: {
      fontSize: 10,
      marginBottom: 2,
      textAlign: "justify",
      padding: 2
    },
    smallText: {
      fontSize: 9,
      color: "#242424",
    },
    listItem: {
      marginLeft: 10,
    },
    line: {

      marginVertical: 4,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    center: {
      textAlign: "center",
    },
  });



const DummyPDF = ({ data }: { data: any }) => {
  const themeColor = useLayoutStore((state) => state.color);
  const s = styles(themeColor);
  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.section}>
          <Text style={s.heading}>{data.name || "Full Name"}</Text>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#000",
              marginVertical: 6,
            }}
          />
          <Text style={[s.smallText, s.center]}>
            {[data.address, data.phone, data.email]
              .filter(Boolean)
              .join(" • ")}
          </Text>
          {data.linkedin && (
            <Text style={[s.smallText, s.center]}>
              <Link
                src={
                  data.linkedin.startsWith("http")
                    ? data.linkedin
                    : `https://${data.linkedin}`
                }
              >
                LinkedIn
              </Link>
            </Text>
          )}
        </View>

        {/* Summary */}
        {data.summary && (
          <View style={s.section}>
            <Text style={s.heading}>Summary</Text>
            <Text style={s.text}>{data.summary}</Text>
          </View>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <Text style={s.subheading}>{edu.school}</Text>
                <Text style={s.text}>
                  {edu.degree} — {edu.year}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Experience</Text>
            {data.experience.map((exp: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <Text style={s.subheading}>
                  {exp.company}
                </Text>
                <Text style={s.smallText}>{exp.duration}</Text>
                {Array.isArray(exp.description)
                  ? exp.description.map((item: string, i: number) => (
                    <Text key={i} style={s.text}>
                      • {item.trim()}
                    </Text>
                  ))
                  : typeof exp.description === "string"
                    ? exp.description
                      .split("•")
                      .filter((item: string) => item.trim() !== "")
                      .map((item: string, i: number) => (
                        <Text key={i} style={s.text}>
                          • {item.trim()}
                        </Text>
                      ))
                    : null}
              </View>
            ))}
          </View>
        )}

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
        {data.certifications?.length > 0 && (
          <View style={s.section}>
            <Text style={s.heading}>Certifications</Text>
            {data.certifications.map((cert: any, idx: number) => (
              <View key={idx}>
                <Text style={s.subheading}>{cert.title}</Text>
                <Text style={s.smallText}>
                  {cert.institution} • {cert.year}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* References */}
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
      </Page>
    </Document>
  );
};

export default DummyPDF;
