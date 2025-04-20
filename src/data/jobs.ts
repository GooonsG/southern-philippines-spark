
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance";
  salary: string;
  description: string;
  requirements: string[];
  postedAt: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Student Assistant - Computer Lab",
    company: "University IT Department",
    location: "Main Campus",
    type: "Part-time",
    salary: "₱89/hour",
    description: "Assist students with basic computer issues, maintain lab equipment, and help with administrative tasks.",
    requirements: [
      "Currently enrolled student",
      "Basic knowledge of computer hardware and software",
      "Good communication skills",
      "Available 15 hours/week"
    ],
    postedAt: "2023-04-15"
  },
  {
    id: 2,
    title: "Research Assistant - Engineering",
    company: "Mechanical Engineering Department",
    location: "Engineering Building",
    type: "Part-time",
    salary: "₱12,000/month",
    description: "Support faculty research projects, assist with data collection and analysis, and help prepare research materials.",
    requirements: [
      "3rd or 4th year engineering student",
      "Minimum GPA of 2.5",
      "Experience with laboratory equipment",
      "Strong analytical skills"
    ],
    postedAt: "2023-04-10"
  },
  {
    id: 3,
    title: "Graphic Design Intern",
    company: "Campus Marketing Office",
    location: "Admin Building",
    type: "Internship",
    salary: "₱5,000/month",
    description: "Create visual content for university events, design marketing materials, and assist with social media campaigns.",
    requirements: [
      "Portfolio demonstrating design skills",
      "Proficiency in Adobe Creative Suite",
      "Creative mindset",
      "Ability to meet deadlines"
    ],
    postedAt: "2023-04-08"
  },
  {
    id: 4,
    title: "Math Tutor",
    company: "Student Learning Center",
    location: "Library Building",
    type: "Part-time",
    salary: "₱150/hour",
    description: "Provide tutoring services to students in various math subjects including calculus, statistics, and linear algebra.",
    requirements: [
      "Strong understanding of math concepts",
      "Grade of A or B in relevant math courses",
      "Patient and clear communication",
      "Available for at least 10 hours/week"
    ],
    postedAt: "2023-04-05"
  },
  {
    id: 5,
    title: "Web Developer",
    company: "Local Tech Startup",
    location: "Remote / Hybrid",
    type: "Freelance",
    salary: "₱20,000 - ₱30,000/project",
    description: "Develop and maintain websites for clients, implement responsive design, and integrate backend functionalities.",
    requirements: [
      "Knowledge of HTML, CSS, and JavaScript",
      "Experience with React or Angular",
      "Basic understanding of backend technologies",
      "Portfolio of previous work"
    ],
    postedAt: "2023-04-01"
  },
  {
    id: 6,
    title: "Library Assistant",
    company: "University Library",
    location: "Main Library",
    type: "Part-time",
    salary: "₱85/hour",
    description: "Help with circulation desk duties, assist patrons with finding resources, and maintain library organization.",
    requirements: [
      "Good organizational skills",
      "Attention to detail",
      "Knowledge of library classification systems",
      "Available for evening/weekend shifts"
    ],
    postedAt: "2023-03-28"
  }
];
