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
        "In my current role as a Test Engineer, I have built upon the foundational skills and knowledge acquired during my Technical Graduate program. With a strong foundation in testing methodologies and tools, I now focus on delivering impactful contributions that span the entire software development lifecycle. My responsibilities encompass a range of activities, from meticulous analysis of project documents to strategic planning and production of comprehensive test documentation. Through keen understanding of project designs and requirements, I have crafted and executed tests to ensure high-quality delivery. Additionally, I have taken on leadership roles in internal meetings and engagements with external partners, leveraging my communication skills to drive project alignment. By navigating the complexities of ensuring key payment milestones are met, I have demonstrated a holistic understanding of project dynamics, solidifying my position as a trusted Test Engineer.",
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
        "As a Technical Graduate, I thrived in my Test Engineer role, leveraging the graduate scheme as a catalyst for personal and professional growth. Despite the challenges posed by the COVID-19 pandemic, I proactively pursued opportunities for self-development, acquiring a deep understanding of testing methodologies and tools through rigorous training and practice. My commitment to learning led to recognition within the company, earning me multiple awards and solidifying my position as an integral team member. By the end of my tenure on the graduate scheme, I had established myself as a valuable asset to the team, paving the way for future growth and responsibilities.",
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
        "As a Cyber Crime Intern within the Hi-Tech Crime Unit, I played a pivotal role in supporting Forensic Examiners with complex case work, while also contributing to my own projects under close supervision. Notably, I collaborated with the ISO Technical Lead to spearhead the lab's quest for ISO 17025 accreditation, which culminated in a successful evaluation and subsequent award of accreditation for acquisition as well as adherence to industry Codes of Practice.\n\nThroughout my internship, I had the opportunity to design and implement key components of the acquisition and extraction stages. This involved conducting thorough assessments of the lab's current capabilities, researching cutting-edge software and techniques, and presenting findings to inform strategic decisions. As a result, the team was able to make significant changes to their practices, ultimately enhancing their ability to tackle complex cybercrime cases.",
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
        "As part of my dissertation research project, I made a contribution to the field of drone forensics by developing and validating novel techniques for extracting valuable forensic artifacts from consumer drones using open-source and hobbyist tools. This pioneering work caught the attention of Interpol, who recognized its significance and sought permission to feature it in their First Responders guide. Through this collaboration, my research was incorporated into a comprehensive resource designed to equip forensic labs and police services with essential knowledge for responding to drone-related incidents. This achievement not only demonstrates my expertise in advanced technologies but also showcases my ability to translate academic research into practical applications that benefit law enforcement agencies worldwide.",
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
        "I was honored to receive the Best External Impact Project Prize at the British Computer Society's awards, recognizing my dissertation research on drone forensics as having made a significant impact beyond academia. This award acknowledged the practical applications of my work in the law enforcement community, as demonstrated by its inclusion in Interpol's First Responders guide. This achievement highlights my ability to translate academic research into real-world solutions that benefit society and underscores my commitment to making a tangible difference through technology.",
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
      description: "I leveraged the AI Programming with Python nanodegree from Udacity to develop hands-on expertise in creating neural networks for image classification using Python. Through this course, I gained a strong foundation in deep learning concepts and practical experience building complex models that can accurately classify images. This achievement showcases my ability to adapt to new technologies and expand my skillset in areas such as machine learning and artificial intelligence.",
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
        "A vital qualification I successfully completed the Certified Tester Foundation Level certification with ISTQB, demonstrating my understanding of fundamental testing concepts and terminology. This rigorous training program provided me with a deep understanding of software delivery approaches, including Agile and V-model methodologies. This achievement highlights my commitment to professional development in the field of software testing and my ability to apply theoretical knowledge in real-world scenarios.offering a comprehensive understanding of testing terminology and concepts applicable across software delivery approaches. Awarded by ISTQB in 2021.",
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
        "I earned the Project Fundamentals Qualification from APM, solidifying my grasp of core project management principles and terminology. This qualification equipped me with a comprehensive understanding of essential concepts relevant to delivering projects in the tech industry, including scope, schedule, budgeting, and resource allocation. This achievement demonstrates my ability to apply fundamental project management knowledge to drive successful outcomes in fast-paced technology environments.",
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
        "I achieved the ITIL 4 Foundation certificate in IT Service Management from PeopleCert/AXELOS, demonstrating my understanding of the core concepts and best practices for delivering high-quality IT services. Through this certification, I gained insight into the ITIL framework and its application to service management, including incident management, problem management, and change management. This achievement highlights my ability to think strategically about IT service delivery and optimize processes for improved efficiency and customer satisfaction.",
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
        "I obtained advanced training in using MSAB for forensic phone analysis, developing expertise in extracting and analyzing digital evidence from mobile devices to support investigations. This specialized training, awarded by Gwent Police in 2017, equipped me with the skills to extract and interpret data from mobile devices, providing valuable insights for investigative purposes. Although this certification has expired (2020), I remain proficient in the techniques and methodologies learned during my training, ensuring that my expertise remains relevant and effective in supporting investigations.",
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
        "I achieved the ACE v6 certification, solidifying my expertise in digital forensics and investigative analysis through hands-on proficiency with AccessData tools. This industry-recognized certification demonstrates my ability to utilize AccessData tools for efficient and thorough examination of digital evidence in forensic investigations. Awarded by AccessData in 2017, this achievement showcases my technical skills and analytical capabilities in digital forensics, although the certification has expired (2019).",
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
        "I underwent comprehensive training in courtroom skills through the Expert Witness training program, led by renowned legal training company Bond Solon. This immersive course equipped me with the expertise and confidence to effectively communicate complex technical information to judges, lawyers, and jurors as an expert witness. By mastering essential courtroom skills, such as presenting evidence, cross-examination, and effective communication, I am now better prepared to provide high-quality testimony in legal proceedings.",
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
        "I further honed my skills in written evidence through a comprehensive report writing training program with Bond Solon. This course enabled me to craft clear, concise, and compelling reports that effectively communicate complex technical information to various stakeholders. By mastering best practices for report writing, including structuring, summarising, and presenting data, I am now more effective in producing high-quality written evidence that supports investigations and court proceedings.",
      logo: LeidosLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
