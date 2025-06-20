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
      image: "/profile.png",
      summary:
        "Experienced software engineer with a strong background in academic research and system architecture. Skilled in developing robust and scalable applications across a variety of platforms, with expertise in modern web technologies, API design, and database management. Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Passionate about optimizing performance, maintaining clean code, and implementing innovative technical solutions to solve complex problems.",
      education: [
        {
          school: "Harvard University",
          degree: "BSc in Computer Science",
          year: "2018 - 2022",
        },
        {
          school: "MIT",
          degree: "Certificate in Cloud Architecture",
          year: "2023",
        },
      ],
      experience: [
        {
          role: "Backend Developer",
          company: "Meta",
          duration: "2022 - Present",
          description: [
            "Built microservices with AWS Lambda and DynamoDB...",
            "Integrated authentication using AWS Cognito...",
          ],
        },
      ],
      skills: ["Node.js", "PostgreSQL", "GraphQL", "Docker", "Kubernetes"],
      certifications: [
        {
          title: "AWS Certified Developer",
          institution: "Amazon",
          year: "2022",
        },
        {
          title: "Scrum Master",
          institution: "Scrum Alliance",
          year: "2021",
        },
      ],
      references: [ // ✅ New field
        {
          name: "Dr. Emily Stone",
          position: "Professor of Computer Science",
          company: "Harvard University",
          contact: "estone@harvard.edu / +1 (555) 987-6543",
        },
        {
          name: "Sarah Kim",
          position: "Engineering Manager",
          company: "Meta",
          contact: "s.kim@meta.com / +1 (555) 246-8100",
        },
      ],
    },
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
      linkedin: "https://www.linkedin.com/in/janestanford",
      image: "/profile.png",
      summary: "Innovative product designer with a strong focus on user experience, accessibility, and human-centered design. Experienced in building scalable and intuitive design systems that enhance usability and improve user engagement. Skilled in prototyping, UX research, and cross-functional collaboration, particularly in agile environments. Passionate about creating seamless digital experiences that empower users and solve real-world problems through thoughtful design.",
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
          description: ["Led design systems projects and improved onboarding UX."],
        },
        {
          role: "Design Intern",
          company: "Adobe",
          duration: "2020 - 2021",
          description: ["Helped redesign parts of the Illustrator interface for accessibility."],
        },
      ],
      skills: ["Figma", "UX Research", "Prototyping", "HTML/CSS", "Adobe XD", "React"],
      certifications: [
        {
          title: "Google UX Design Certificate",
          institution: "Coursera",
          year: "2022",
        },
      ],
      projects: ["Accessibility-Focused Design System", "Onboarding Flow Redesign"],
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
      linkedin: "https://www.linkedin.com/in/williamoxford",
      image: "/profile.png",
      summary: "Highly analytical data scientist with deep expertise in machine learning, statistical modeling, and big data technologies. Proven track record of building predictive models that drive impactful insights in healthcare and research domains. Experienced in data pipeline development, feature engineering, and visualization using industry-standard tools. Enthusiastic about applying data-driven approaches to solve complex real-world problems and contribute to scientific innovation.",
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
          description: ["Built data pipelines and predictive models for healthcare research.", "Worked on predictive analytics model for public health interventions."],
        },
        {
          role: "Research Assistant",
          company: "Oxford Big Data Lab",
          duration: "2016 - 2018",
          description: ["Worked on predictive analytics model for public health interventions."],
        },
      ],
      skills: ["Python", "Pandas", "TensorFlow", "Data Visualization", "Scikit-learn"],
      certifications: [
        {
          title: "Google Professional Data Engineer",
          institution: "Google",
          year: "2019",
        },
      ],
      publications: ["Predictive Analytics in Public Health (Nature, 2020)"],
      languages: ["English"],
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
      linkedin: "https://www.linkedin.com/in/alicenewton",
      image: "/profile.png",
      summary: "Full stack developer with a solid background in software engineering and cloud infrastructure. Specializes in building high-performance, scalable applications with modern JavaScript frameworks and backend services. Experienced in DevOps practices, CI/CD pipelines, and agile development environments. Committed to writing maintainable code, optimizing performance, and continuously learning cutting-edge technologies.",
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
          description: ["Built full-stack features for AWS dashboard with React and Go."],
        },
        {
          role: "Open Source Contributor",
          company: "Node.js Foundation",
          duration: "2020 - Present",
          description: ["Contributed to performance improvements in the Node core."],
        },
      ],
      skills: ["React", "TypeScript", "Go", "AWS", "CI/CD", "Redis"],
      certifications: [
        {
          title: "Certified Kubernetes Application Developer",
          institution: "CNCF",
          year: "2021",
        },
      ],
      projects: ["AWS Cost Explorer Clone", "Go-based Static Site Generator"],
      languages: ["English"],
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
      linkedin: "https://www.linkedin.com/in/edwardkingsley",
      image: "/profile.png",
      summary: "Dedicated legal researcher with extensive experience in international law, governance, and policy analysis. Adept at conducting in-depth legal research, drafting comprehensive reports, and collaborating with global institutions. Passionate about contributing to justice and legal reform through evidence-based policy recommendations and fieldwork. Known for strong writing skills, attention to detail, and a deep understanding of geopolitical legal issues.",
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
          description: ["Conducted field research and legal analysis for policy briefs."],
        },
        {
          role: "Legal Fellow",
          company: "World Bank",
          duration: "2016 - 2017",
          description: ["Supported legislative reviews for East African regional policy."],
        },
      ],
      skills: ["Legal Writing", "Policy Analysis", "Research", "Editing"],
      certifications: [
        {
          title: "International Law Certification",
          institution: "The Hague Academy of International Law",
          year: "2015",
        },
      ],
      publications: ["Global Governance and Legal Systems (Cambridge Press, 2021)"],
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
      title: "Web Developer",
      phone: "+1 510-555-0199",
      email: "lina.park@web.berkeley.io",
      address: "215 Creative Blvd, Berkeley, CA 94720, USA",
      linkedin: "https://www.linkedin.com/in/linaparkdev",
      image: "/profile.png",
      summary: "Creative and detail-oriented freelance web developer with a passion for modern web performance, clean UI design, and accessibility. Experienced in building responsive, mobile-first websites using cutting-edge front-end technologies and deployment platforms. Skilled in client communication, version control, and optimizing digital experiences for diverse audiences. Driven by a desire to combine minimalism with functional design that delivers results.",
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
          description: ["Built custom websites for clients in fashion and retail sectors."],
        },
        {
          role: "Frontend Developer (Contract)",
          company: "Nike",
          duration: "2020 - 2021",
          description: ["Improved Lighthouse scores and mobile responsiveness."],
        },
      ],
      skills: ["Vue", "Tailwind CSS", "Netlify", "Lighthouse", "Accessibility"],
      certifications: [
        {
          title: "Frontend Web Developer Nanodegree",
          institution: "Udacity",
          year: "2019",
        },
      ],
      projects: ["E-commerce Site for Boutique", "PWA Portfolio Site"],
      languages: ["English", "Korean"],
    },
  },
];
