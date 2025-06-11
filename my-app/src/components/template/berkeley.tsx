"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { TemplateProps } from '@/types/types';


export default function Berkley({ data, color }: TemplateProps) {
  if (!data) return null

  return (
    <div className="break-words mx-auto text-xs font-sans p-6  grid grid-cols-[40%_60%] gap-6">

      {/* Left Column */}
      <div className="bg-gray-100 dark:bg-gray-400 p-4 rounded-lg">

        {/* Profile Picture */}
        {data.image ? (
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)}
                alt="Profile"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
        ) : null}



        {/* Contact Info */}
        <div className="mb-6 text-left ml-2 text-[9px]  space-y-1">

          {data.address && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[10px]" />
              <span>{data.address}</span>
            </div>
          )}

          {data.phone && (
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[10px] " />
              <span>{data.phone}</span>
            </div>
          )}

          {data.email && (
            <div className="flex items-center gap-2 flex-wrap max-w-full">
              <FaEnvelope className="text-[10px]" />
              <span className="break-all">{data.email}</span>
            </div>

          )}


          {data.linkedin && (
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-[10px] " />
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

        </div>

        {/* Skills */}
        {data.skills && (
          <div className="mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>Skills</div>
            <ul className="text-[10px] list-disc pl-5">
              {data.skills.map((skill: string, idx: number) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}


        {data.certifications && (
          <div className="mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>Certifications</div>
            {data.certifications.map((cert: any, idx: number) => (
              <div key={idx} className="mb-2">
                <div className="font-semibold text-[10px]">{cert.title}</div>
                <div className="text-[10px]  flex justify-between">
                  <span>{cert.institution}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="space-y-4 text-[11px]">

        {/* Summary */}
        {data.summary && (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color }}>Summary </div>
            <p className="text-[10px]  text-justify">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience && (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>Experience</div>
            {data.experience.map((exp: any, idx: number) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between text-[10px] font-semibold">
                  <span>{exp.company}</span>
                  <span className="text-gray-500">{exp.duration}</span>
                </div>
                <ul className="list-disc pl-5 text-[10px]  mt-1 space-y-1 text-justify">
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
        )}

        {/* Education */}
        {data.education && (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>Education</div>
            {data.education.map((edu: any, idx: number) => (
              <div key={idx} className="mb-2 text-[10px]">
                <div className="font-semibold">{edu.school}</div>
                <div className="flex justify-between ">
                  <span>{edu.degree}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* References */}
        {data.references ? (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>References</div>
            {data.references.map((ref: any, idx: number) => (
              <div key={idx} className="mb-2 text-[10px]">
                <div className="font-semibold">{ref.name}</div>
                <div className="">{ref.position} at {ref.company}</div>
                <div className="">{ref.contact}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color }}>References</div>
            <div className="text-[10px] ">Available upon request</div>
          </div>
        )}
      </div>
    </div>
  )
}
