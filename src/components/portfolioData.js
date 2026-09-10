import ZGLogo from "../assets/Experience/ZG.svg";
import SVILogo from "../assets/Experience/SVI.png";
import GenLogo from "../assets/Experience/GenerationThailand.jpg";
import KbtgLogo from "../assets/Experience/kbtgKampus.png";
import GosoftLogo from "../assets/Experience/gosoft.jpeg";

import ponyMart from "../assets/projects/PonyMart.png";
import crud from "../assets/projects/SimpleCRUD.png";
import colmar from "../assets/projects/ColmarAcademy.png";

// Navigation Menus
export const navSections = [
  { id: "About", label: "About", icon: "👤" },
  { id: "WorkExperience", label: "Work Experience", icon: "💼" },
  { id: "ClientProjects", label: "Client Projects", icon: "🏢" },
  { id: "Skills", label: "Skills", icon: "⚡" },
  { id: "Extracurricular", label: "Extracurricular", icon: "🚀" },
  { id: "Contact", label: "Contact", icon: "📡" },
];

// 1. Professional Work Experience (Employers)
export const workExperiences = [
  {
    id: "zygen",
    company: "Zygen Co., Ltd.",
    position: "Technical ABAP Consultant",
    period: "Apr 2025 – Present (1.5+ Years)",
    shortPeriod: "Apr 2025 – Present",
    logo: ZGLogo,
    badge: "Current Employer",
    location: "Bangkok, Thailand",
    summary: "Delivering SAP S/4HANA and ECC 6.0 consulting and implementation for enterprise clients.",
    responsibilities: [
      "Develop Clean-Core extensions using ABAP Cloud and SAP BTP.",
      "Build CDS Views, AMDP procedures, RAP business objects, and OData services.",
      "Develop custom SAP Fiori Elements and SAPUI5 interfaces.",
      "Implement BAPI, RFC, BDC interfaces, ALV reports, Smart Forms, and Adobe Forms.",
      "Maintain code quality with ATC (ABAP Test Cockpit), ABAP Unit tests, and performance tuning.",
      "Support SIT and UAT testing, issue investigation, and bug fixing.",
    ],
    tech: ["SAP S/4HANA", "SAP ECC6", "Clean-Core", "ABAP Cloud", "BTP", "RAP", "CDS Views", "Fiori / UI5", "FI • SD • MM"],
  },
  {
    id: "svi",
    company: "SVI Public Company Limited",
    position: "Graduate Engineer – Program Management",
    period: "Oct 2021 – Aug 2022 (1 Year)",
    shortPeriod: "Oct 2021 – Aug 2022",
    logo: SVILogo,
    badge: "Manufacturing Engineering",
    location: "Lamphun / Chiang Mai, Thailand",
    summary: "Managed electronics manufacturing engineering programs and cross-functional team execution.",
    responsibilities: [
      "Handled project improvement and schedule tracking for electronics assembly (SMT / IMT).",
      "Coordinated cross-functional teams across engineering, production, and quality departments.",
      "Reviewed technical drawings, specifications, and manufacturing process changes.",
      "Prepared progress reports and technical documentation for client programs.",
    ],
    tech: ["Program Management", "SMT-IMT Process", "Engineering Analysis", "Cross-Functional Coordination"],
  },
];

// 2. Client Projects (7 Client Implementations)
export const clientProjects = [
  {
    id: "client-1",
    client: "Integrated Petrochemicals & Refining Industry",
    project: "SAP S/4HANA Private Cloud Implementation",
    role: "Technical ABAP Consultant",
    tags: ["S/4HANA Private Cloud", "Clean-Core", "ABAP Cloud", "RAP", "Fiori", "CDS / AMDP", "ATC"],
    summary: "Implemented Clean-Core extensions and modern ABAP Cloud solutions on SAP S/4HANA Private Cloud.",
    responsibilities: [
      "Built Clean-Core extensions using in-app and ABAP Cloud on SAP BTP.",
      "Created CDS Views, AMDP routines, and RAP business objects for OData consumption.",
      "Developed SAP Fiori Elements and SAPUI5 applications.",
      "Enforced quality checks with ATC, ABAP Unit testing, and performance tuning.",
      "Resolved technical issues during Unit Test, SIT, and UAT.",
    ],
  },
  {
    id: "client-2",
    client: "Agro & Food Industry",
    project: "SAP S/4HANA Implementation (UK)",
    role: "Technical ABAP Consultant",
    tags: ["S/4HANA", "HANA Coding", "Smart Forms", "BDC", "BAPI", "RFC", "ALV Grid"],
    summary: "Implemented technical specifications across multiple SAP modules for UK rollout.",
    responsibilities: [
      "Collaborated with functional consultants across multiple modules.",
      "Wrote ABAP code optimized for SAP HANA in-memory database.",
      "Created custom Smart Forms and SAPscript documents.",
      "Built BDC batch input interfaces and ALV Grid / List reports.",
      "Integrated BAPI and RFC connections with defect fixing.",
    ],
  },
  {
    id: "client-3",
    client: "Agriculture & Food Industry",
    project: "SAP S/4HANA Implementation",
    role: "Technical ABAP Consultant",
    tags: ["S/4HANA", "Dialog Programming", "BAPI", "RFC", "ALV List"],
    summary: "Developed dialog transactions and reporting for full-lifecycle implementation.",
    responsibilities: [
      "Developed interactive SAP GUI Dialog screens (screen painter, PBO/PAI module pools).",
      "Created ALV Grid and List reports for operational data.",
      "Implemented BAPI and RFC integrations for data exchange.",
      "Supported functional testing and issue resolution.",
    ],
  },
  {
    id: "client-4",
    client: "Energy & Utilities Industry",
    project: "SAP S/4HANA Implementation",
    role: "Technical ABAP Consultant",
    tags: ["S/4HANA", "User Exits", "BAdIs", "Smart Forms", "BDC", "BAPI"],
    summary: "Implemented enhancements, BAdIs, and document outputs for utility systems.",
    responsibilities: [
      "Configured User Exits, BAdIs, and custom enhancement points.",
      "Built BDC programs for automated mass data uploading.",
      "Developed Smart Forms for utility statements and operational documents.",
      "Conducted defect resolution and system testing.",
    ],
  },
  {
    id: "client-5",
    client: "Energy & Utilities Industry",
    project: "Enterprise Bank Interface",
    role: "Technical ABAP Consultant",
    tags: ["FI Module", "Banking Interface", "BDC", "BAPI", "RFC", "ALV"],
    summary: "Built secure bank interface programs and financial reporting for FI module.",
    responsibilities: [
      "Developed ABAP programs for SAP Financial Accounting (FI) module.",
      "Automated bank statement processing and data exchange using BDC & BAPI.",
      "Created ALV reports for payment reconciliation and transaction tracking.",
      "Assisted in bank integration testing and issue fixes.",
    ],
  },
  {
    id: "client-6",
    client: "Petrochemicals & Chemicals Industry",
    project: "SAP Logistics System Integration",
    role: "Technical ABAP Consultant",
    tags: ["MM Module", "Logistics", "BAPI", "RFC", "BDC", "ALV"],
    summary: "Integrated logistics execution systems with SAP Material Management module.",
    responsibilities: [
      "Built custom enhancements for the Material Management (MM) module.",
      "Connected external logistics software using RFC and BAPI endpoints.",
      "Programmed BDC routines for goods movement and order tracking.",
      "Developed ALV reports for inventory tracking.",
    ],
  },
  {
    id: "client-7",
    client: "Transportation & Logistics Industry",
    project: "Operational Support & Enhancements",
    role: "SAP ABAP Consultant",
    tags: ["Operations Support", "Smart Forms", "SAPScript", "User Exits", "BAdIs"],
    summary: "Provided ongoing technical support and enhancements for production SAP systems.",
    responsibilities: [
      "Maintained and improved SAPScript and Smart Forms templates.",
      "Implemented custom validations via User Exits and BAdIs.",
      "Investigated incident tickets, fixed bugs, and supported end-users.",
    ],
  },
];

// 3. Extracurricular (Bootcamps + Coding Hobbies)
export const extracurricularData = {
  bootcamps: [
    {
      id: "gen-th",
      title: "Generation Thailand x GenKX",
      program: "Junior Software Developer Bootcamp",
      period: "Apr 2024 – Jul 2024",
      logo: GenLogo,
      badge: "Full-Stack Bootcamp",
      desc: "Intensive 3-month full-stack development bootcamp focused on the MERN stack and agile teamwork.",
      highlights: [
        "Full-stack development using MongoDB, Express, React, and Node.js.",
        "Software development lifecycle, Git version control, and team sprints.",
        "Hands-on project delivery and code reviews.",
      ],
    },
    {
      id: "kbtg",
      title: "KBTG Kampus",
      program: "Infrastructure Engineer Bootcamp",
      period: "Sep 2023 – Dec 2023",
      logo: KbtgLogo,
      badge: "DevOps & Cloud Bootcamp",
      desc: "Cloud infrastructure and DevOps program covering containerization, telemetry, and Linux systems.",
      highlights: [
        "DevOps practices and CI/CD concepts.",
        "Cloud architecture, Linux system administration, and Docker.",
        "Observability fundamentals: Monitoring, Logging, and Tracing.",
      ],
    },
    {
      id: "gosoft",
      title: "Gosoft Academy",
      program: "Automated Tester Bootcamp",
      location: "Nonthaburi, Thailand",
      period: "Dec 2024 – Jan 2025",
      logo: GosoftLogo,
      badge: "QA & Automation Bootcamp",
      desc: "Software test automation bootcamp covering test design, Selenium, and Robot Framework.",
      highlights: [
        "Learned foundational software testing concepts.",
        "Applied automation principles using Selenium and Robot Framework for test development.",
      ],
    },
  ],
  hobbyProjects: [
    {
      id: "pony-mart",
      title: "Pony Mart",
      type: "MERN Stack E-Commerce",
      image: ponyMart,
      desc: "Full-stack e-commerce web application with product listings, cart, and authentication.",
      liveUrl: "https://jsd-7-cmfm-frontend.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: "crud-app",
      title: "Simple CRUD",
      type: "DOM Manipulation App",
      image: crud,
      desc: "Client-side interactive data manager practicing JavaScript ES6+ and DOM manipulation.",
      liveUrl: "https://05-fear-js.vercel.app/",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      id: "colmar-academy",
      title: "Colmar Academy",
      type: "Responsive Landing Page",
      image: colmar,
      desc: "Responsive institutional academy landing page built using semantic HTML5 and CSS.",
      liveUrl: "https://5-fear-colmar.vercel.app/",
      tags: ["HTML5", "CSS3", "Responsive"],
    },
  ],
};
