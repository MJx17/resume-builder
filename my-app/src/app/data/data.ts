
export const templates = [

  {
    id: "harvard",
    name: "Harvard",
    description: "Classic academic layout with clean lines and serif fonts.",
    thumbnail: "harvard.jpg",
 sampleData: {
  name: "John Harvard",
  title: "Software Engineer",
  phone: "+1 (555) 123-4567",
  email: "john.harvard@example.com",
  address: "123 Massachusetts Ave, Cambridge, MA",
  linkedin: "https://www.linkedin.com/in/mark-justin-borja", 
  image:  "/profile.png",
  summary: "Experienced software engineer with a strong background in academic research and system architecture. Skilled in developing robust and scalable applications across a variety of platforms, with expertise in modern web technologies, API design, and database management. Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Passionate about optimizing performance, maintaining clean code, and implementing innovative technical solutions to solve complex problems.",
  education: [
    {
      school: "Harvard University",
      degree: "BSc in Computer Science",
      year: "2018 - 2022"
    },
    {
      school: "MIT",
      degree: "Certificate in Cloud Architecture",
      year: "2023"
    }
  ],
  experience: [
    {
      role: "Backend Developer",
      company: "Meta",
      duration: "2022 - Present",
      description: [
        "Built microservices with AWS Lambda and DynamoDB for internal developer tools, improving operational efficiency.",
        "Integrated authentication using AWS Cognito and implemented detailed logging with CloudWatch.",
        "Collaborated closely with senior engineers in Agile sprints, gaining hands-on experience with CI/CD pipelines and real-world production deployments."
      ]
    },
 
  ],
  skills: ["Node.js", "PostgreSQL", "GraphQL", "Docker", "Kubernetes"],
  certifications: [
    {
      title: "AWS Certified Developer",
      institution: "Amazon",
      year: "2022"
    },
    {
      title: "Scrum Master",
      institution: "Scrum Alliance",
      year: "2021"
    }
  ],
 
}
  },  
  {
    id: "stanford",
    name: "Stanford",
    description: "Modern layout with clean design and plenty of whitespace.",
    thumbnail: "stanford.png",
    sampleData: {
      name: "Jane Stanford",
      title: "Product Designer",
      phone: "+1 (555) 123-4567",
      email: "jane.stanford@example.com",
      address: "123 Innovation Way, Palo Alto, CA 94301",
      summary: "Creative designer focused on user experience and accessibility in web applications.",
      education: [
        {
          school: "Stanford University",
          degree: "BA in Human-Computer Interaction",
          year: "2017 - 2021",
        },
        {
          school: "Google UX Design Program",
          degree: "Professional Certificate",
          year: "2022",
        },
      ],
      experience: [
        {
          role: "UX Designer",
          company: "Figma",
          duration: "2021 - Present",
          description: "Led design systems projects and improved onboarding UX.",
        },
        {
          role: "Design Intern",
          company: "Adobe",
          duration: "2020 - 2021",
          description: "Helped redesign parts of the Illustrator interface for accessibility.",
        },
      ],
      skills: ["Figma", "UX Research", "Prototyping", "HTML/CSS", "Adobe XD"],
      languages: ["English", "Spanish"],
    },
  },
  {
    id: "oxford",
    name: "Oxford",
    description: "Traditional European CV style, very structured and minimalist.",
    thumbnail: "oxford.jpg",
    sampleData: {
      name: "William Oxford",
      title: "Data Scientist",
      phone: "+44 20 7946 0958",
      email: "william.oxford@example.co.uk",
      address: "42 Scholar Street, Oxford, OX1 3PA, United Kingdom",
      summary: "Analytical thinker with a strong foundation in statistics and machine learning.",
      education: [
        {
          school: "University of Oxford",
          degree: "MSc in Data Science",
          year: "2016 - 2018",
        },
        {
          school: "University of Manchester",
          degree: "BSc in Mathematics",
          year: "2012 - 2016",
        },
      ],
      experience: [
        {
          role: "Data Analyst",
          company: "DeepMind",
          duration: "2018 - Present",
          description: "Built data pipelines and predictive models for healthcare research.",
        },
        {
          role: "Research Assistant",
          company: "Oxford Big Data Lab",
          duration: "2016 - 2018",
          description: "Worked on a predictive analytics model for public health interventions.",
        },
      ],
      skills: ["Python", "Pandas", "TensorFlow", "Data Visualization", "Scikit-learn"],
      publications: ["Predictive Analytics in Public Health (Nature, 2020)"],
    },
  },
  {
    id: "mit",
    name: "MIT",
    description: "Technical-focused resume with emphasis on engineering and projects.",
    thumbnail: "MIT.png",
    sampleData: {
      name: "Alice Newton",
      title: "Full Stack Developer",
      phone: "+1 617-555-0198",
      email: "alice.newton@mit.dev",
      address: "77 Massachusetts Ave, Cambridge, MA 02139, USA",
      summary: "Problem-solver with hands-on experience in building scalable web applications from scratch.",
      education: [
        {
          school: "MIT",
          degree: "BEng in Software Engineering",
          year: "2015 - 2019",
        },
      ],
      experience: [
        {
          role: "Software Engineer",
          company: "Amazon",
          duration: "2019 - 2023",
          description: "Built full-stack features for AWS dashboard with React and Go.",
        },
        {
          role: "Open Source Contributor",
          company: "Node.js Foundation",
          duration: "2020 - Present",
          description: "Contributed to performance improvements in the Node core.",
        },
      ],
      skills: ["React", "TypeScript", "Go", "AWS", "CI/CD", "Redis"],
      projects: ["AWS Cost Explorer Clone", "Go-based Static Site Generator"],
    },
  },
  {
    id: "cambridge",
    name: "Cambridge",
    description: "Elegant resume style for professionals in law, writing, and research.",
    thumbnail: "cambridge.png",
    sampleData: {
      name: "Edward Kingsley",
      title: "Legal Researcher",
      phone: "+44 1223 555789",
      email: "edward.kingsley@law.cam.ac.uk",
      address: "12 Legal Lane, Cambridge, CB2 1TN, United Kingdom",
      summary: "Dedicated legal researcher with publications in international law and governance.",
      education: [
        {
          school: "University of Cambridge",
          degree: "LLM in International Law",
          year: "2014 - 2016",
        },
        {
          school: "University of Edinburgh",
          degree: "BA in Political Science",
          year: "2010 - 2014",
        },
      ],
      experience: [
        {
          role: "Research Associate",
          company: "UNESCO",
          duration: "2017 - 2022",
          description: "Conducted field research and legal analysis for policy briefs.",
        },
        {
          role: "Legal Fellow",
          company: "World Bank",
          duration: "2016 - 2017",
          description: "Supported legislative reviews for East African regional policy.",
        },
      ],
      skills: ["Legal Writing", "Policy Analysis", "Research", "Editing"],
      languages: ["English", "French"],
    },
  },
  {
    id: "berkeley",
    name: "Berkeley",
    description: "Creative-style resume ideal for tech-savvy freelancers and digital artists.",
    thumbnail: "/thumbnails/berkeley.png",
    sampleData: {
      name: "Lina Park",
      title: "Freelance Web Developer",
      phone: "+1 510-555-0199",
      email: "lina.park@web.berkeley.io",
      address: "215 Creative Blvd, Berkeley, CA 94720, USA",
      summary: "Freelancer passionate about performance, minimal design, and web accessibility.",
      education: [
        {
          school: "UC Berkeley",
          degree: "BA in Media & Web Technologies",
          year: "2013 - 2017",
        },
      ],
      experience: [
        {
          role: "Freelancer",
          company: "Self-employed",
          duration: "2018 - Present",
          description: "Built custom websites for clients in fashion and retail sectors.",
        },
        {
          role: "Frontend Developer (Contract)",
          company: "Nike",
          duration: "2020 - 2021",
          description: "Improved Lighthouse scores and mobile responsiveness.",
        },
      ],
      skills: ["Vue", "Tailwind CSS", "Netlify", "Lighthouse", "Accessibility"],
      projects: ["E-commerce Site for Boutique", "PWA Portfolio Site"],
    },
  },
]
