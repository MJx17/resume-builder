"use client"

export default function ({ data }: { data: any }) {
  if (!data) return null

  return (
    <div className="max-w-[700px] mx-auto p-6 bg-white text-[#111] font-serif text-[13px] leading-[1.5]">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[20px] font-bold">{data.name}</h1>
        <div className="text-[11px] text-gray-700">
          {data.address} | {data.phone} | {data.email}
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="uppercase text-[12px] font-bold tracking-wide mb-2">Education</h2>
        {data.education.map((edu: any, idx: number) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between">
              <div className="font-bold">{edu.school}</div>
              <div className="text-[11px] text-gray-600">{edu.year}</div>
            </div>
            <div className="italic text-[12px] text-gray-800">{edu.degree}</div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="uppercase text-[12px] font-bold tracking-wide mb-2">Experience</h2>
        {data.experience.map((exp: any, idx: number) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between font-bold">
              <span>{exp.role}, {exp.company}</span>
              <span className="text-[11px] text-gray-600 font-normal">{exp.duration}</span>
            </div>
            <div className="pl-4 text-[12px] mt-1 space-y-1">
              {Array.isArray(exp.description)
                ? exp.description.map((item: string, i: number) => (
                    <div key={i}>– {item.trim()}</div>
                  ))
                : typeof exp.description === 'string'
                  ? exp.description
                      .split("•")
                      .filter((item: string) => item.trim() !== "")
                      .map((item: string, i: number) => (
                        <div key={i}>– {item.trim()}</div>
                      ))
                  : null}
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="uppercase text-[12px] font-bold tracking-wide mb-2">Skills</h2>
        <div className="text-[12px]">{data.skills.join(", ")}</div>
      </div>

      {/* Certifications */}
      {data.certifications && (
        <div className="mb-6">
          <h2 className="uppercase text-[12px] font-bold tracking-wide mb-2">Certifications</h2>
          {data.certifications.map((cert: any, idx: number) => (
            <div key={idx} className="mb-2">
              <div className="font-bold text-[12px]">{cert.title}</div>
              <div className="text-[11px] text-gray-600 flex justify-between">
                <span>{cert.institution}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="uppercase text-[12px] font-bold tracking-wide mb-2">Projects</h2>
          {data.projects.map((proj: any, idx: number) => (
            <div key={idx} className="mb-2">
              <div className="font-bold">{proj.name}</div>
              <div className="text-[12px]">{proj.description}</div>
              {proj.link && (
                <div className="text-[11px] text-blue-500 underline">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    {proj.link}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
