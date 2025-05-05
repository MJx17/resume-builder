"use client"

import Link from "next/link"
import {
  FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt
} from "react-icons/fa"

export default function ResumePreview({ data, color }: { data: any, color: string }) {
  if (!data) return null

  return (
    <div className="max-w-[900px] mx-auto p-6 font-sans text-sm space-y-6 text-[#222] print:bg-white print:text-black">

      {/* Header */}
      <div className="text-center text-blue-500">
        <h1 style={{ color: color }} className="text-3xl font-bold">{data.name}</h1>
        <p style={{ color: color }} className="text-sm text-gray-600">{data.title}</p>
      </div>
      <section
        id="contact"
        className="border-l-4 pl-4 bg-gray-200 p-2 rounded"
        style={{ borderColor: color }}
      >
        <h2
          className="text-sm font-bold tracking-wider mb-1"
          style={{ color: color }}
        >
          Contact
        </h2>
        <div className="flex-col mt-2 text-xs text-gray-700">
          {data.address && (
            <div className="flex items-center gap-1 py-[1px]">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>{data.address}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-1 py-[1px]">
              <FaPhoneAlt className="text-gray-500" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.email && (
            <div className="flex items-center gap-1 py-[1px]">
              <FaEnvelope className="text-gray-500" />
              <span>{data.email}</span>
            </div>
          )}
          {data.linkedin && (
            <div className="flex items-center gap-1 py-[1px]">
              <FaLinkedin className="text-gray-500" />
              <Link
                href={data.linkedin.startsWith("http") ? data.linkedin : `https://${data.linkedin}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                LinkedIn
              </Link>
            </div>
          )}

        </div>
      </section>



      {/* Summary */}
      {data.summary && (
        <section
          id="summary"
          className="border-l-4 pl-4 bg-gray-200 p-2 rounded"
          style={{ borderColor: color }}
        >
          <h2
            className="text-sm font-bold tracking-wider mb-1"
            style={{ color: color }}
          >
            Summary
          </h2>
          <p className="text-[11px] text-gray-700 leading-relaxed text-justify">{data.summary}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <section
          className="border-l-4 pl-4 bg-gray-200 p-2 rounded"
          style={{ borderColor: color }}
        >
          <h2
            className="text-sm font-bold tracking-wider mb-2"
            style={{ color: color }}
          >
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 text-[13px]">
            {data.skills.map((skill: string, idx: number) => (
              <li key={idx} className="text-white px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: color }}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <section className="border-l-4 -500 pl-4 bg-gray-200 p-2 rounded"
          style={{ borderColor: color }}
        >
          <h2
            className="font-bold uppercase text-sm tracking-wider mb-2"
            style={{ color: color }}
          >
            Experience
          </h2>
          <div className="relative border-l-2 border-gray-300 pl-4 ml-1">
            {data.experience.map((exp: any, idx: number) => (
              <div key={idx} className="relative mb-6">
                <div className="text-[13px] font-semibold">{exp.role} @ {exp.company}</div>
                <div className="text-[12px] text-gray-500 mb-1">{exp.duration}</div>
                <ul className="text-xs text-gray-700 list-disc pl-5 leading-snug">
                  {(Array.isArray(exp.description)
                    ? exp.description
                    : exp.description?.split("•") || []
                  )
                    .filter((item: string) => item.trim())
                    .map((item: string, i: number) => (
                      <li key={i}>{item.trim()}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <section className="border-l-4 pl-4 bg-gray-200 p-2 rounded"
          style={{ borderColor: color }}>
          <h2 className=" font-bold uppercase text-sm tracking-wider mb-2"
            style={{ color: color }}>
            Education
          </h2>
          {data.education.map((edu: any, idx: number) => (
            <div key={idx} className="mb-2 text-[13px]">
              <div className="font-semibold">{edu.school}</div>
              <div className="flex justify-between text-gray-600 text-[12px]">
                <span>{edu.degree}</span>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <section
          className="border-l-4 pl-4 bg-gray-200 p-2 rounded"
          style={{ borderColor: color }}>
          <h2
            className=" font-bold uppercase text-sm tracking-wider mb-2"
            style={{ color: color }}
          >
            Certifications
          </h2>
          {data.certifications.map((cert: any, idx: number) => (
            <div key={idx} className="mb-2 text-[13px]">
              <div className="font-semibold">{cert.title}</div>
              <div className="flex justify-between text-gray-600 text-[12px]">
                <span>{cert.institution}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
