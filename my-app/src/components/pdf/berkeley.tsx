// components/template/BerkeleyPDF.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = (themeColor: string) =>
  StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: "Helvetica",
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 16,
      fontWeight: "bold",
      color: themeColor,
      marginBottom: 4,
    },
    label: {
      fontWeight: "bold",
    },
    text: {
      marginBottom: 2,
    },
  });

const BerkeleyPDF = ({ data, color }: { data: any; color: string }) => {
  const s = styles(color);
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <View style={s.section}>
          <Text style={s.heading}>{data.fullName || "Full Name"}</Text>
          <Text style={s.text}>{data.email}</Text>
          <Text style={s.text}>{data.phone}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Education</Text>
          {data.education?.map((edu: any, idx: number) => (
            <View key={idx}>
              <Text style={s.label}>{edu.institution}</Text>
              <Text>{edu.degree} — {edu.year}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Experience</Text>
          {data.experience?.map((exp: any, idx: number) => (
            <View key={idx}>
              <Text style={s.label}>{exp.company}</Text>
              <Text>{exp.role} ({exp.years})</Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Add more sections like skills, projects, etc. */}
      </Page>
    </Document>
  );
};

export default BerkeleyPDF;
