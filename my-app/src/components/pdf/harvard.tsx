// // components/pdf/ResumePDF.tsx
// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Link,
// } from "@react-pdf/renderer";
// import { TemplateProps } from '@/types/types';

// const styles = StyleSheet.create({
//   page: {
//     padding: 72,
//     fontSize: 11,
//     fontFamily: "Helvetica",
//     color: "#000", // default text color
//   },
//   section: {
//     marginBottom: 12,
//     padding: 4,
//   },
//   heading: {
//     fontSize: 13,
//     fontWeight: "bold",
//     marginBottom: 4,
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
//   subheading: {
//     fontSize: 11,
//     fontWeight: "bold",
//     marginBottom: 2,
//   },
//   text: {
//     fontSize: 10,
//     marginBottom: 2,
//     textAlign: "justify",
//     padding: 2,
//   },
//   smallText: {
//     fontSize: 9,
//     color: "gray",
//   },
//   listItem: {
//     marginLeft: 10,
//   },
//   line: {
//     marginVertical: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   center: {
//     textAlign: "center",
//   },
//   rowBetween: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// });


// const HarvardPDF = ({ data, color,  }: TemplateProps) => {


//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.section}>
//           <Text style={[styles.heading, { color }]}>{data.name || "Full Name"}</Text>
//           <View
//             style={{
//               borderBottomWidth: 1,
//               borderBottomColor: "#242424",
//               marginVertical: 6,
//             }}
//           />
//           <Text style={[styles.smallText, styles.center]}>
//             {[data.address, data.phone, data.email].filter(Boolean).join(" • ")}
//           </Text>
//           {data.linkedin && (
//             <Text style={[styles.smallText, styles.center]}>
//               <Link
//                 src={
//                   data.linkedin.startsWith("http")
//                     ? data.linkedin
//                     : `https://${data.linkedin}`
//                 }
//               >
//                 LinkedIn
//               </Link>
//             </Text>
//           )}
//         </View>

//         {/* Summary */}
//         {data.summary && (
//           <View style={styles.section}>
//             <Text style={[styles.heading, { color }]}>Summary</Text>
//             <Text style={styles.text}>{data.summary}</Text>
//           </View>
//         )}

//         {/* Education */}
//         {data.education?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={[styles.heading, { color }]}>Education</Text>
//             {data.education.map((edu: any, idx: number) => (
//               <View key={idx} style={{ marginBottom: 4 }}>
//                 <View style={styles.rowBetween}>
//                   <Text style={styles.text}>{edu.degree}</Text>
//                   <Text style={styles.text}>{edu.year}</Text>
//                 </View>
//                 <Text style={styles.text}>{edu.institution}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Experience */}
//         {data.experience?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={[styles.heading, { color }]}>Experience</Text>
//             {data.experience.map((exp: any, idx: number) => (
//               <View key={idx} style={{ marginBottom: 4 }}>
//                 <Text style={styles.subheading}>
//                   {exp.position} - {exp.company}
//                 </Text>
//                 <Text style={styles.smallText}>{exp.duration}</Text>
//                 {Array.isArray(exp.description)
//                   ? exp.description.map((item: string, i: number) => (
//                     <Text key={i} style={styles.text}>
//                       • {item.trim()}
//                     </Text>
//                   ))
//                   : typeof exp.description === "string"
//                     ? exp.description
//                       .split("•")
//                       .filter((item: string) => item.trim() !== "")
//                       .map((item: string, i: number) => (
//                         <Text key={i} style={styles.text}>
//                           • {item.trim()}
//                         </Text>
//                       ))
//                     : null}
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Skills */}
//         {data.skills?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={[styles.heading, { color }]}>Skills</Text>
//             <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//               {data.skills.map((skill: string, idx: number) => (
//                 <Text key={idx} style={[styles.text, { width: "33.33%" }]}>
//                   • {skill}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         )}


//         {data.certifications?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={[styles.heading, { color }]}>Certifications</Text>
//             {data.certifications.map((cert: any, idx: number) => (
//               <View key={idx}>
//                 <Text style={styles.subheading}>{cert.title}</Text>
//                 <View style={styles.rowBetween}>
//                   <Text>
//                     {cert.institution}
//                   </Text>
//                   <Text> {cert.year}
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         )}

//         {/* References */}
//         <View style={styles.section}>
//           <Text style={[styles.heading, { color }]}>References</Text>
//           {data.references?.length > 0 ? (
//             data.references.map((ref: any, idx: number) => (
//               <View key={idx}>
//                 <Text style={styles.subheading}>{ref.name}</Text>
//                 <Text style={styles.text}>{ref.company}</Text>
//                 <Text style={styles.text}>{ref.contact}</Text>
//               </View>
//             ))
//           ) : (
//             <Text style={[styles.text, styles.center]}>
//               References available upon request
//             </Text>
//           )}
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default HarvardPDF;


// components/pdf/ResumePDF.tsx







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
    color: "#000", // default text color
  },
  section: {
    marginBottom: 12,
    padding: 4,
  },
  heading: {
    fontSize: 13,
    fontWeight: "bold",
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
    padding: 2,
  },
  smallText: {
    fontSize: 9,
    color: "gray",
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
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});


const HarvardPDF = ({ data, color, pageSize }: TemplateProps) => {

  return (

    <Document>
      <Page size={pageSize} style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color }]}>{data.name || "Full Name"}</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#242424",
              marginVertical: 6,
            }}
          />
          <Text style={[styles.smallText, styles.center]}>
            {[data.address, data.phone, data.email].filter(Boolean).join(" • ")}
          </Text>
          {data.linkedin && (
            <Text style={[styles.smallText, styles.center]}>
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
          <View style={styles.section}>
            <Text style={[styles.heading, { color }]}>Summary</Text>
            <Text style={styles.text}>{data.summary}</Text>
          </View>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color }]}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.text}>{edu.degree}</Text>
                  <Text style={styles.text}>{edu.year}</Text>
                </View>
                <Text style={styles.text}>{edu.institution}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.heading, { color }]}>Experience</Text>
            {data.experience.map((exp: any, idx: number) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <Text style={styles.subheading}>
                  {exp.position} - {exp.company}
                </Text>
                <Text style={styles.smallText}>{exp.duration}</Text>
                {Array.isArray(exp.description)
                  ? exp.description.map((item: string, i: number) => (
                    <Text key={i} style={styles.text}>
                      • {item.trim()}
                    </Text>
                  ))
                  : typeof exp.description === "string"
                    ? exp.description
                      .split("•")
                      .filter((item: string) => item.trim() !== "")
                      .map((item: string, i: number) => (
                        <Text key={i} style={styles.text}>
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
          <View style={styles.section}>
            <Text style={[styles.heading, { color }]}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.skills.map((skill: string, idx: number) => (
                <Text key={idx} style={[styles.text, { width: "33.33%" }]}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        )}


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

        {/* References */}
        <View style={styles.section}>
          <Text style={[styles.heading, { color }]}>References</Text>
          {data.references?.length > 0 ? (
            data.references.map((ref: any, idx: number) => (
              <View key={idx}>
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
      </Page>
    </Document>
  );
};

export default HarvardPDF;
