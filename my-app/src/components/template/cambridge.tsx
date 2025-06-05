"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { TemplateProps } from '@/types/types';

export default function ModernResume({ data, color }: TemplateProps) {
  if (!data) return null

  return (
    <div className="">

      <div className='break-words mx-auto  text-xs font-sans p- space-y-6'>

        <div className="  border-[#242424] border-b-1">
          <div className="text-center text-lg font-bold" style={{color}}>
            {data.name}
            <p className="font-normal text-[9px] pb-5" style={{color}}>{data.title}</p>
          </div>
        </div>


        <div className="mb-6 border-b-1 border-[#242424] grid grid-cols-[20%_80%] items-start pb-3">
          {/* Left: Profile Picture */}
          <div className="flex justify-center items-start my-auto mr-5">
            {data.image && (
              <Image
                src={data.image}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full object-cover bg-gray-200"
              />
            )}
          </div>

          {/* Right: Summary */}
          <div className="text-[9px]">
            {data.summary && (
              <>
                <div className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{color}}>Summary </div>
                <p className="text-[8px]  text-justify">{data.summary}</p>
              </>
            )}
          </div>
        </div>




        <div className="flex text-[9px]  space-x-6">
          {/* Left Column */}
          <div className="w-1/2 pr-4 border-r-2 border-[#807d7d] space-y-6">
            {/* Contact Section */}
            <div className="space-y-2">
              <div className="uppercase font-bold text-[10px] mb-1" style={{color}}>Contact</div>

              {data.address && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[10px] " />
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
                <div className="flex items-center gap-2 ">
                  <FaEnvelope className="text-[10px] " />
                  <span>{data.email}</span>
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

            {/* Education Section */}
            {data.education && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{color}}>Education</div>
                {data.education.map((edu: any, idx: number) => (
                  <div key={idx} className="mb-2">
                    <div className="font-semibold">{edu.school}</div>
                    <div className="flex justify-between ">
                      <span>{edu.degree}</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}


            {/* Skills */}
            {data.skills && (
              <div className="mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{color}}>Skills</div>
                <ul className="text-[10px]  list-disc pl-5">
                  {data.skills.map((skill: string, idx: number) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>




          {/* Right Column */}
          <div className="w-2/3 ">
            {/* Experience Section */}
            {data.experience && (
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{color}}>Experience</div>
                {data.experience.map((exp: any, idx: number) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between font-semibold">
                      <span>{exp.role} at {exp.company}</span>
                      <span className="">{exp.duration}</span>
                    </div>
                    <ul className="list-disc pl-5  mt-1 space-y-1 text-justify">
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


            {data.certifications && (
              <div className="mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{color}}>Certifications</div>
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




            {data.references ? (
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{color}}>References</div>
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
                <div className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{color}}>References</div>
                <div className="text-[10px] ">Available upon request</div>
              </div>
            )}




          </div>
        </div>










      </div>
    </div>
  )
}
