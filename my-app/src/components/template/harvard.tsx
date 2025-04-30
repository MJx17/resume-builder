"use client"

export default function ResumePreview({ data }: { data: any }) {
  if (!data) return null

  return (
    <div className="max-w-[700px] mx-auto p-5 bg-white text-[#222] text-sm font-sans ">

      {/* Header */}
      <div className="pb-2 mb-4">
        <div className="border-b border-[#444] mb-2">
          <div className="text-[16px] font-bold text-black mb-1 text-center ">{data.name}</div>
        </div>
        <div>
          <div className="text-[9px] text-gray-600 mb-1 text-center">
            {data.address} • {data.phone} • {data.email}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide text-center">
          Education
        </div>
        {data.education.map((edu: any, idx: number) => (
          <div key={idx} className="mb-2">
            <div className="font-bold text-[13px]">{edu.school}</div>
            <div className="flex justify-between text-[11px] text-gray-600 font-normal">
              <span>{edu.degree}</span>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide text-center">
          Experience
        </div>
        {data.experience.map((exp: any, idx: number) => (
          <div key={idx} className="mb-2">
            <div className="flex justify-between text-[13px] font-bold">
              <span>{exp.role} at {exp.company}</span>
              <span className="text-[11px] text-gray-600 font-normal">{exp.duration}</span>
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
        <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide text-center">
          Skills
        </div>
        <ul className="list-disc pl-5 text-[11px] grid grid-cols-3 gap-2">
          {data.skills.map((skill: string, idx: number) => (
            <li key={idx} className="text-gray-800">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Certifications */}

      {data.certifications && (
        <div className="mb-6">
          <div className="text-[12px] font-bold text-gray-800 pb-1 mb-2 uppercase tracking-wide text-center">
            Certifications
          </div>
          {data.certifications.map((cert: any, idx: number) => (
            <div key={idx} className="mb-2">
              <div className="font-bold text-[12px] text-gray-800">{cert.title} 
              </div>
              <div className="text-[11px] text-gray-600 font-normal flex justify-between">
                <span>{cert.institution}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}


      
   

   

    </div>
  )
}
