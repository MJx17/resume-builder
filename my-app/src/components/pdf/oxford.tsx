import {
  Document,
  Page,
  Text,
  View,
  StyleSheet, Image
} from '@react-pdf/renderer'

import { IoLocation } from "react-icons/io5";

// Styles
const styles = (themeColor: string) =>
  StyleSheet.create({
    title: {
      fontSize: 18,
      marginBottom: 4,
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: themeColor,
    },
    subtitle: {
      fontSize: 11,
      marginBottom: 6,
      textAlign: 'center',
      fontStyle: 'italic',
      color: themeColor,
    },
    listItem: {
      marginBottom: 2,
      marginLeft: 8,
    },
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
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 4,
    },
    skillBadge: {
      fontSize: 10,
      color: '#fff',
      paddingVertical: 2,
      paddingHorizontal: 6,
      borderRadius: 10,
      marginRight: 4,
      marginBottom: 4,
    },
    expItem: {
      marginBottom: 4,
    },
    expTitle: {
      fontWeight: 'bold',
    },
    eduItem: {
      marginBottom: 4,
    },
    certItem: {
      marginBottom: 4,
    },
    borderLeftHighlight: {
      borderLeftWidth: 4,
      paddingLeft: 8,
    }
  })

const StanfordPDF = ({ data, color }: { data: any; color: string }) => {
  const s = styles(color)

  const locationIcon = 'https://img.icons8.com/ios-filled/50/000000/marker.png';
  const phoneIcon = 'https://img.icons8.com/ios-filled/50/000000/phone.png';
  const emailIcon = 'https://img.icons8.com/ios-filled/50/000000/message-squared.png';
  const linkedinIcon = 'https://img.icons8.com/ios-filled/50/000000/linkedin.png';

  return (
    <Document>
      <Page style={s.page}>
        <View style={s.section}>
          <Text style={s.title}>{data.name}</Text>
          <Text style={s.subtitle}>{data.title}</Text>
        </View>

        <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
          <Text style={s.heading}>Contact</Text>

          {data.address && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <Image
                src={locationIcon}
                style={{ width: 12, height: 12, marginRight: 4 }}
              />
              <Text style={s.text}>{data.address}</Text>
            </View>
          )}

          {data.phone && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <Image
                src={phoneIcon}
                style={{ width: 12, height: 12, marginRight: 4 }}
              />
              <Text style={s.text}>{data.phone}</Text>
            </View>
          )}

          {data.email && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <Image
                src={emailIcon}
                style={{ width: 12, height: 12, marginRight: 4 }}
              />
              <Text style={s.text}>{data.email}</Text>
            </View>
          )}

          {data.linkedin && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                src={linkedinIcon}
                style={{ width: 12, height: 12, marginRight: 4 }}
              />
              <Text style={s.text}>{data.linkedin}</Text>
            </View>
          )}
        </View>


        {data.summary && (
          <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
            <Text style={s.heading}>Summary</Text>
            <Text>{data.summary}</Text>
          </View>
        )}

        {data.skills?.length > 0 && (
          <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
            <Text style={[s.heading, { color }]}>{'Skills'}</Text>
            <View style={s.skillsContainer}>
              {data.skills.map((skill: string, idx: number) => (
                <Text
                  key={idx}
                  style={[s.skillBadge, { backgroundColor: color }]}
                >
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {data.experience?.length > 0 && (
          <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
            <Text style={[s.heading, { color: color }]}>Experience</Text>

            {data.experience.map((exp: any, idx: number) => (
              <View
                key={idx}
                style={{
                  borderLeftWidth: 2,
                  borderLeftColor: '#d1d5db', // Tailwind gray-300
                  paddingLeft: 8,
                  marginBottom: 12,
                  position: 'relative',
                }}
              >
                <Text style={[s.expTitle, { fontSize: 13, fontWeight: '600' }]}>
                  {exp.role} @ {exp.company}
                </Text>
                <Text style={{ fontSize: 12, marginBottom: 4 }}>{exp.duration}</Text>
                {(Array.isArray(exp.description)
                  ? exp.description
                  : exp.description?.split('•') || []
                )
                  .filter((item: string) => item.trim())
                  .map((desc: string, i: number) => (
                    <Text key={i} style={[s.listItem, { fontSize: 10, marginLeft: 8, marginBottom: 2 }]}>
                      • {desc.trim()}
                    </Text>
                  ))}
              </View>
            ))}
          </View>
        )}


        {data.education?.length > 0 && (
          <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
            <Text style={s.heading}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={s.eduItem}>
                <Text style={s.expTitle}>{edu.school}</Text>
                <Text>{edu.degree} — {edu.year}</Text>
              </View>
            ))}
          </View>
        )}

        {data.certifications?.length > 0 && (
          <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
            <Text style={s.heading}>Certifications</Text>
            {data.certifications.map((cert: any, idx: number) => (
              <View key={idx} style={s.certItem}>
                <Text style={s.expTitle}>{cert.title}</Text>
                <Text>{cert.institution} — {cert.year}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={[s.section, s.borderLeftHighlight, { borderLeftColor: color }]}>
          <Text style={s.heading}>References</Text>
          {data.references?.length > 0 ? (
            data.references.map((ref: any, idx: number) => (
              <View key={idx}>
                <Text>{ref.name}</Text>
                <Text>{ref.position} at {ref.company}</Text>
                <Text>{ref.contact}</Text>
              </View>
            ))
          ) : (
            <Text>Available upon request</Text>
          )}
        </View>
      </Page>
    </Document>
  )
}

export default StanfordPDF
