"use client"

import Link from 'next/link';

export default function ResumePreview({ data, color }: { data: any, color: string }) {
  if (!data) return null

  return (
    <div className="max-w-[700px] mx-auto p-5 bg-white text-[#222] text-sm font-sans ">

      {/* Header */}
      <div className="pb-2 mb-4 border-b border-[#444]">
        <div className="mb-6 border-b border-[#444]">
          <div className="text-[16px] font-bold text-black mb-1 text-center" style={{color}}>{data.name}</div>
          <div className="flex flex-col items-center text-[9px] text-gray-600 mb-1 text-center">
            {data.address && <div>{data.address}</div>}
            {data.phone && <div>{data.phone}</div>}
            {data.email && <div>{data.email}</div>}
            {data.linkedin && (
                <Link
                href={data.linkedin.startsWith("http") ? data.linkedin : `https://${data.linkedin}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                LinkedIn
              </Link>
            )}
          </div>


        </div>

        {/* Summary */}
        <div className="mb-6 border-b border-[#444]">
          <div className='mb-6 '>
            {data.summary && (
              <div className="mb-6 ">
                <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide "  style={{color}}>
                  Summary
                </div>
                <div className="text-[11px] text-gray-600 font-normal ml-2 text-justify">
                  {data.summary}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Education */}

        <div className="mb-6">
          <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide "  style={{color}}>
            Education
          </div>
          {data.education.map((edu: any, idx: number) => (
            <div key={idx} className="mb-2 ml-2">
              <div className="font-bold text-[12px]">{edu.school}</div>
              <div className="flex justify-between text-[11px] text-gray-600 font-normal">
                <span>{edu.degree}</span>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Experience */}
      <div className="mb-6 border-b border-[#444]">
        <div className="mb-6">
          <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide"  style={{color}}> 
            Experience
          </div>
          {data.experience.map((exp: any, idx: number) => (
            <div key={idx} className="mb-2 ml-2">
              <div className="flex justify-between text-[11px] font-bold">
                <span>{exp.role} at {exp.company}</span>
                <span className="text-[10px] text-gray-600 font-normal">{exp.duration}</span>
              </div>
              <ul className="list-disc pl-5 text-[10px] mt-1 space-y-1 text-justify">
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
      </div>

      {/* Skills */}
      <div className="mb-6 border-b border-[#444]">
        <div className="mb-6">
          <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide"  style={{color}}>
            Skills
          </div>
       
          <ul className="list-disc pl-5 text-[11px] grid grid-cols-3 gap-2 ml-2 ">
            {data.skills.map((skill: string, idx: number) => (
              <li key={idx} className="text-gray-800">{skill}</li>
            ))}
          </ul>
         
        </div>
      </div>

      <div className="mb-6 border-b border-[#444]">
        {data.certifications && (
          <div className="mb-6">
            <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide"  style={{color}}>
              Certifications
            </div>
            {data.certifications.map((cert: any, idx: number) => (
              <div key={idx} className="mb-2 ml-2">
                <div className="font-bold text-[12px] text-gray-800">{cert.title} </div>
                <div className="text-[11px] text-gray-600 font-normal flex justify-between">
                  <span>{cert.institution}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      {/* References */}
      <div className="mb-6 border-b border-[#444]">
        {data.references ? (
          <div className="mb-6">
            <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide"  style={{color}}>
              References
            </div>
            {data.references.map((ref: any, idx: number) => (
              <div key={idx} className="mb-2 ml-2">
                <div className="font-bold text-[12px] text-gray-800">{ref.name}</div>
                <div className="text-[11px] text-gray-600 font-normal">
                  {ref.title} at {ref.company}
                </div>
                <div className="text-[11px] text-gray-600 font-normal">
                  {ref.contact}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-6">
            <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide"  style={{color}}>
              References
            </div>
            <div className="text-[11px] text-gray-600 font-normal ml-2">
              References available upon request
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
