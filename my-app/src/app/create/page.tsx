'use client';

import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Card } from '@components/ui/card';

// Define the type for the props
interface ResumeFormProps {
  onPreviewClick: (data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    skills: string;
    techSkills: string;
    softSkills: string;
    experience: string;
    education: string;
    portfolio: string;
    seminars: string;
    certificates: string;
  }) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onPreviewClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState('');
  const [techSkills, setTechSkills] = useState('');
  const [softSkills, setSoftSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [seminars, setSeminars] = useState('');
  const [certificates, setCertificates] = useState('');

  const [step, setStep] = useState(1);

  const handlePreviewClick = () => {
    onPreviewClick({
      name,
      email,
      phone,
      address,
      skills,
      techSkills,
      softSkills,
      experience,
      education,
      portfolio,
      seminars,
      certificates,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] ">
      <Card className="w-full max-w-2xl p-6 border rounded-lg shadow-md bg-white ">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Resume</h2>
        <form className="space-y-6">
          {/* Personal Information Step */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          )}

          {/* Skills Step */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                <input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your skills"
                />
              </div>
              <div>
                <label htmlFor="techSkills" className="block text-sm font-medium text-gray-700">Technical Skills</label>
                <input
                  type="text"
                  id="techSkills"
                  value={techSkills}
                  onChange={(e) => setTechSkills(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your technical skills"
                />
              </div>
              <div>
                <label htmlFor="softSkills" className="block text-sm font-medium text-gray-700">Soft Skills</label>
                <input
                  type="text"
                  id="softSkills"
                  value={softSkills}
                  onChange={(e) => setSoftSkills(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your soft skills"
                />
              </div>
            </div>
          )}

          {/* Experience Step */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
                <textarea
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your work experience"
                />
              </div>
            </div>
          )}

          {/* Education Step */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                <textarea
                  id="education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your education background"
                />
              </div>
            </div>
          )}

          {/* Portfolio Step */}
          {step === 5 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio</label>
                <input
                  type="text"
                  id="portfolio"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your portfolio URL"
                />
              </div>
            </div>
          )}

          {/* Seminars & Certificates Step */}
          {step === 6 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Seminars & Certificates</h3>
              <div>
                <label htmlFor="seminars" className="block text-sm font-medium text-gray-700">Seminars</label>
                <input
                  type="text"
                  id="seminars"
                  value={seminars}
                  onChange={(e) => setSeminars(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter seminars or workshops you've attended"
                />
              </div>
              <div>
                <label htmlFor="certificates" className="block text-sm font-medium text-gray-700">Certificates</label>
                <input
                  type="text"
                  id="certificates"
                  value={certificates}
                  onChange={(e) => setCertificates(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your certificates"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button type="button" onClick={handlePrevStep} className="w-32">
                Previous
              </Button>
            )}
            {step < 6 ? (
              <Button type="button" onClick={handleNextStep} className="w-32">
                Next
              </Button>
            ) : (
              <Button type="button" onClick={handlePreviewClick} className="w-32">
                Preview Resume
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ResumeForm;
