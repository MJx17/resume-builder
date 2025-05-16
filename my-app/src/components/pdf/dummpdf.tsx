// components/template/DummyPDF.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
});

const DummyPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Dummy PDF Title</Text>
          <Text style={styles.text}>
            This is a simple dummy PDF document created with react-pdf.
          </Text>
          <Text style={styles.text}>You can use this to test rendering.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Section 2</Text>
          <Text style={styles.text}>More sample text goes here.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DummyPDF;
