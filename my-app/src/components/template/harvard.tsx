"use client"

import Link from 'next/link';
import { TemplateProps } from '@/types/types';

export default function ModernResume({ data, color }: TemplateProps) {
  if (!data) return null

  return (
    <div className="max-w-[700px] mx-auto p-5  text-sm font-sans ">

      {/* Header */}
      <div className="pb-2 mb-4">
        <div className="border-b border-[#444] mb-2">
          <div className="text-[16px] font-bold mb-1 text-center " style={{ color:color }}>{data.name}</div>
        </div>
        <div>
          <div>
            <ul className="text-[9px]  mb-1 text-center flex flex-wrap justify-center gap-2 p-0 m-0 list-none">
              {data.address && (
                <li className="flex items-center gap-1 before:content-['•'] before:mr-1">{data.address}</li>
              )}
              {data.phone && (
                <li className="flex items-center gap-1 before:content-['•'] before:mr-1">{data.phone}</li>
              )}
              {data.email && (
                <li className="flex items-center gap-1 before:content-['•'] before:mr-1">{data.email}</li>
              )}
             {data.linkedin && (
                <div className="flex items-center gap-2">
                  <Link
                    href={data.linkedin.startsWith("http") ? data.linkedin : `https://${data.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </Link>
                </div>
              )}
            </ul>
          </div>


        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
            Summary
          </div>
          <div className="text-[11px]  font-normal text-justify">
            {data.summary}
          </div>
        </div>
      )}

      {/* Education */}
      <div className="mb-6">
        <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
          Education
        </div>
        {data.education.map((edu: any, idx: number) => (
          <div key={idx} className="mb-2">
            <div className="font-bold text-[13px]">{edu.school}</div>
            <div className="flex justify-between text-[11px]  font-normal">
              <span>{edu.degree}</span>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
          Experience
        </div>
        {data.experience.map((exp: any, idx: number) => (
          <div key={idx} className="mb-2">
            <div className="flex justify-between text-[13px] font-bold">
              <span>{exp.role} at {exp.company}</span>
              <span className="text-[11px]  font-normal">{exp.duration}</span>
            </div>
            <ul className="list-disc pl-5 text-[11px] mt-1 space-y-1">
              {Array.isArray(exp.description)
                ? exp.description.map((item: string, i: number) => (
                  <li key={i}>{item.trim()}</li>
                ))
                : typeof exp.description === 'string'
                  ? exp.description
                    .split("•")
                    .filter((item: string) => item.trim() !== "")
                    .map((item: string, i: number) => (
                      <li key={i}>{item.trim()}</li>
                    ))
                  : null}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
          Skills
        </div>
        <ul className="list-disc pl-5 text-[11px] grid grid-cols-3 gap-2">
          {data.skills.map((skill: string, idx: number) => (
            <li key={idx} className="">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      {data.certifications && (
        <div className="mb-6">
          <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
            Certifications
          </div>
          {data.certifications.map((cert: any, idx: number) => (
            <div key={idx} className="mb-2">
              <div className="font-bold text-[12px] ">{cert.title} </div>
              <div className="text-[11px]  font-normal flex justify-between">
                <span>{cert.institution}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* References */}
      {data.references ? (
        <div className="mb-6">
          <div className="text-[12px] font-bold  pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
            References
          </div>
          {data.references.map((ref: any, idx: number) => (
            <div key={idx} className="mb-2">
              <div className="font-bold text-[12px] ">{ref.name}</div>
              <div className="text-[11px]  font-normal">
                {ref.title} at {ref.company}
              </div>
              <div className="text-[11px]  font-normal">
                {ref.contact}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <div className="text-[12px] font-bold pb-1 mb-2 uppercase tracking-wide text-center" style={{ color }}>
            References
          </div>
          <div className="text-[11px]  font-normal text-center">
            References available upon request
          </div>
        </div>
      )}

    </div>
  )
}
