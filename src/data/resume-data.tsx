import {
  GwentLogo,
  LeidosLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Henry Blackie",
  initials: "HB",
  location: "United Kingdom",
  locationLink: "https://www.google.com/maps/place/United+Kingdom",
  about:
    "BSc (Hons) Computer Forensics",
  summary:
    "I am a Computer Forensics Graduate currently working as an I&V Engineer at Leidos. I have a strong interest in technology and always try to keep myself occupied with a few ongoing projects, recently I have been working on developing a web scraping toolkit. I have also recently completed an artificial intelligence nanodegree with Udacity and I am currently undertaking a Cyber Defence training course.",
  avatarUrl: "https://avatars.githubusercontent.com/u/5684989?v=4",
  personalWebsiteUrl: "https://www.henryblackie.co.uk",
  contact: {
    email: "kaht4koyq@relay.firefox.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/HenryBlackie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henryblackie/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/henry_blackie",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of South Wales",
      degree: "BSc (Hons) Computer Forensics | BCS Best External Impact Project Prize",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Leidos",
      link: "https://www.leidos.com",
      badges: ['Current Role', 'Hybrid Working'],
      title: "Test Engineer",
      logo: LeidosLogo,
      start: "2021",
      end: null,
      description:
        "In my role as a Test Engineer, I have been consistently delivering impactful contributions that span the entire software development lifecycle. My responsibilities have been diverse, ranging from meticulous analysis of project documents to the strategic planning and production of comprehensive test documentation. Through keen understanding of project designs and requirements, I have crafted and executed tests to ensure a high-quality consistent delivery. My work extends beyond the testing phase, encompassing the identification and communication of defects, along with active participation in triages and resolutions. My role has seen me take charge of internal meetings and engagements with external key partners, where my ability to lead discussions and communicate effectively has played a pivotal role in project alignment. Beyond the expected tasks of a Test Engineer, I have successfully navigate the complexities of ensuring key payment milestones are met, demonstrating a holistic understanding of project dynamics.",
    },
    {
      company: "Leidos",
      link: "https://www.leidos.com",
      badges: [],
      title: "Technical Graduate",
      logo: LeidosLogo,
      start: "2019",
      end: "2021",
      description:
        "During my time on the graduate scheme, I honed my skills in as a Test Engineer, focusing on personal and professional development. Despite the challenges posed by the COVID-19 pandemic, I took initiative in my own learning journey and skill enhancement. Actively participating in training opportunities, I dedicated myself to learning about this new role. I prioritised self-development, acquiring a comprehensive understanding of testing methodologies and tools. This commitment not only fortified my expertise but also contributed to my recognition in the company, where I not only received several recognition awards for my hard work, but also became an essential member of my team. Rather than continuing with the graduate scheme and moving to new projects, I was requested to stay and continue my work within the team.",
    },
    {
      company: "Gwent Police",
      link: "https://www.gwent.police.uk",
      badges: ["Hi-Tech Crime Unit"],
      title: "Cyber Crime Intern",
      logo: GwentLogo,
      start: "2017",
      end: "2018",
      description:
        "During this year I assisted Forensic Examiners with case work, while also doing some of my own under supervision. I also worked with the ISO Technical Lead to help the lab acquire ISO 17025 accreditation. In my second week of the internship the lab went through their first evaluation, before I left they had been awarded the accreditation for acquisition as well as the Codes of Practice. I provided assistance in design and implementation for the acquisition and extraction stages. As a part of the extraction stage I evaluated the labs current capabilities and researched in to new software and techniques to keep them up to date. As a result of this they ended up making some big changes to their practices.",
    },
  ],
  skills: [
    "Acquisition",
    "AI Programming",
    "Android Forensics",
    "Artificial Intelligence (AI)",
    "Atlassian Jira",
    "Burp Suite",
    "Cloud Forensics",
    "Cyber Security",
    "Cybercrime Investigations",
    "Data Carving",
    "EnCase Forensic",
    "File Recovery",
    "Forensic Sciences",
    "FTK",
    "Jupyter Notebooks",
    "Machine Learning",
    "Macquisition (Cellebrite Digital Collector)",
    "Magnet IEF",
    "Open Source Intelligence",
    "Python",
    "RAM Capture",
    "Splunk",
    "Test Execution",
    "The Sleuth Kit",
    "UFED",
    "Web Artefact Analysis",
    "Web Scraping",
    "Windows Forensics",
    "Wireshark",
    "XRY",
  ],
  projects: [
    {
      title: "Interpol First Responders Guide",
      techStack: [
        "Android Forensics",
        "Computer Forensics",
        "Drone Forensics",
      ],
      description:
        "Contributed in 2019.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Best External Impact Project Prize",
      techStack: [
        "Android Forensics",
        "Computer Forensics",
        "Drone Forensics",
      ],
      description:
        "Awarded by the British Computer Society in 2019.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "AI Programming with Python Nanodegree",
      techStack: [
        "Artificial Intelligence",
        "Linear Algebra",
        "Matplotlib",
        "NumPy",
        "Pandas",
        "Python",
        "PyTorch",
      ],
      description: "Provided by Udacity, this nanodegree gave me the opportunity to learn about and create neural networks for image classification.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Certified Tester Foundation Level",
      techStack: [
        "Agile",
        "DevOps",
        "Waterfall",
      ],
      description:
        "A vital qualification offering a comprehensive understanding of testing terminology and concepts applicable across software delivery approaches. Awarded by ISTQB in 2021.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Project Fundamentals Qualification",
      techStack: [
        "Communication",
        "Planning and Scheduling",
        "Project Reviews",
        "Project Risk Management",
        "Resource Management",
        "Teamwork",
      ],
      description:
        "This provided a foundational understanding of project management principles and terminology. It covered essential concepts applicaple to delivering projects in the tech industry. Awarded by APM in 2019.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "ITIL 4 Foundation Certificate in IT Service Management",
      techStack: [
        "IT and Digital Service Operations",
        "ITIL"
      ],
      description:
        "A Fundamental qualification that introduces key principles and practices for effective IT service management. It offered a solid understanding of the ITIL Framework, enabling me to contribute to improved service delivery and organisational efficieny. Awarded by PeopleCert/AXELOS in 2019.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "MSAB Kiosk Training",
      techStack: [
        "Android",
        "Data Recovery",
        "iPhone",
        "Mobile Forensics",
      ],
      description:
        "I received training in the use of MSAB for forensic phone analysis, gaining expertise in extracting and analysing digital evidence from mobile devices for investigative purposes. Awarded by Gwent Police in 2017 (expired 2020).",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "AccessData Certified Examiner v6",
      techStack: [
        "Artefact Analysis",
        "Data Recovery",
        "Registry Forensics",
        "Windows Forensics",
      ],
      description:
        "Attained ACE v6 certification, demonstrating proficiency in digital forensics and investigative analysis. The certification validates skills in utilising AccessData tools for efficient and thorough examination of digital evidence in forensic investigations. Awarded by AccessData in 2017 (expired 2019).",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Court Room Skills Training (Expert Witness)",
      techStack: [
        "Court Room Skills",
        "Expert Witness",
      ],
      description:
        "Awarded by Bond Solon in 2017.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Excellence in Report Writing - Written Evidence",
      techStack: [
        "Court Room Skills",
        "Expert Witness",
      ],
      description:
        "Awarded by Bond Solon in 2017.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
