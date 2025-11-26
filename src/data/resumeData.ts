export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: {
    display: string;
    url: string;
  };
  github: {
    display: string;
    url: string;
  };
}

export interface Summary {
  main: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  administeredSystems?: string;
  bullets: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Joseph Henry Dunn II",
  location: "Wildomar, CA",
  phone: "830-666-2525",
  email: "jdunn0423@gmail.com",
  linkedin: {
    display: "linkedin.com/in/joevisualstoryteller",
    url: "https://www.linkedin.com/in/joevisualstoryteller/"
  },
  github: {
    display: "github.com/joedunn123456789",
    url: "https://github.com/joedunn123456789"
  }
};

export const summary: Summary = {
  main: "AI-Augmented Systems Engineer with 10+ years designing, deploying, and optimizing enterprise IT infrastructure. Hand-selected by CTO to pioneer AI adoption initiative, achieving 8x productivity gains and completing 120+ hours of infrastructure work in 14 days through AI-assisted automation, code generation, and problem-solving. Expert in cloud platforms (Microsoft Azure, AWS), enterprise AI integration (ChatGPT, Claude, Amazon Q, Microsoft Copilot Studio), and RAG implementation. Proven track record architecting scalable cloud solutions, maintaining 99.9% uptime, and reducing costs while meeting FedRAMP, NIST 800-53, and DoD STIG compliance."
};

export const keyAchievements: string[] = [
  "Pioneered company-wide AI adoption as CTO-selected lead, achieving 8x productivity gains and delivering 120+ hours of infrastructure work in 14 days",
  "Built enterprise AWS cloud infrastructure from zero to production in 6 weeks, implementing 8+ services supporting 100+ users while cutting costs 25%",
  "Delivered 99.9% uptime across hybrid Azure/M365 infrastructure for 75+ users under strict FedRAMP compliance with zero security incidents"
];

export const experiences: Experience[] = [
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Senior Systems Engineer, AI",
    date: "January 2024 – Present",
    administeredSystems: "Microsoft 365 Tenant, Azure, Microsoft Copilot Studio, MacOS",
    bullets: [
      "Spearheaded company-wide AI transformation as CTO-selected lead, achieving 8x productivity gains and completing 120+ hours of infrastructure work in 14 days",
      "Engineered enterprise AI ecosystem integrating ChatGPT, Google Gemini, and AWS AI suite (Amazon Q, Bedrock, SageMaker) for intelligent automation across platforms",
      "Designed and deployed RAG system for Amazon Q, integrating proprietary knowledge bases to boost AI accuracy 40%+ across 10,000+ documents",
      "Orchestrated Microsoft Copilot for Business implementation across 5 departments through prompt engineering, workflow optimization, and hands-on training",
      "Extended Copilot capabilities by architecting LangChain, LangTool, and PyTorch integrations, reducing manual workflows by 60% through context-aware automation",
      "Evangelized AI-assisted development to 15+ team members through PowerShell/Python generation demonstrations, securing executive buy-in for company-wide AI deployment",
      "Accelerated development cycles 3x using AI for Power Automate, ServiceNow automation, web optimization (Lighthouse 70→90), and code generation"
    ],
  },
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Systems Engineer, Infrastructure (Promoted from Systems Administrator)",
    date: "August 2022 – January 2024",
    administeredSystems: "Microsoft 365 Tenant, Azure, AWS, ServiceNow, Nice CXone, Zendesk, Google Workspace, MacOS",
    bullets: [
      "Built AWS cloud environment from zero to production in 6 weeks, implementing 8+ core services to support 100+ users and reduce costs 25%",
      "Engineered hybrid Azure AD/M365 infrastructure for 75+ users with Zero Trust framework, delivering 99.9% uptime while exceeding FedRAMP Medium compliance",
      "Administered 50+ MacOS endpoints via JumpCloud MDM, automating provisioning and security hardening to reduce imaging time 40% and eliminate configuration drift",
      "Slashed ticket resolution time 30% and boosted satisfaction 35% by architecting integrated ServiceNow-NICE CXone solution with custom REST API middleware",
      "Established Azure Sentinel SIEM program with automated threat detection and incident playbooks, accelerating MTTR by 25% with zero compliance violations",
      "Eliminated 35% of manual overhead by engineering PowerShell/Python automation for employee onboarding, patching, and identity lifecycle management"
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation",
    role: "Information Technology Manager",
    date: "April 2021 – April 2022",
    administeredSystems: "Microsoft 365 Tenant, Salesforce, VMware ESXi, MacOS",
    bullets: [
      "Orchestrated Salesforce implementation with data migration and workflow automation, driving 25% pipeline visibility improvement and achieving 100% user adoption in 60 days",
      "Eliminated 40% of downtime by directing Microsoft 365/Azure migration for 100 users; consolidated 10 servers and 35TB via VMware ESXi with zero data loss",
      "Deployed JumpCloud MDM for MacBook fleet, enabling zero-touch provisioning and cutting imaging time 30% through centralized endpoint control",
      "Directed $1M IT budget and led cross-functional teams (service desk, network, systems) delivering 24/7 support with 95%+ SLA compliance",
      "Hardened network security aligned to DoD STIGs and NIST 800-53, maintaining zero audit findings across 4 quarterly reviews"
    ],
  },
  {
    company: "United States Army",
    role: "Systems Administrator / Information Management Director",
    date: "April 2008 – April 2021",
    administeredSystems: "Microsoft 365, Active Directory, SCCM, Intune",
    bullets: [
      "Directed mission-critical Microsoft infrastructure across 500+ classified/unclassified systems supporting battalion-level tactical operations with 99.5%+ availability in austere environments",
      "Commanded IT organization of 70+ personnel (help desk, systems, communications); delivered strategic briefings to senior leadership on infrastructure modernization and cybersecurity",
      "Enforced security policies aligned with DISA STIGs, NIST 800-53, and RMF controls, reducing costs 25% with zero critical audit findings across 12 assessments"
    ],
  }
];

export const skillCategories = {
  "Artificial Intelligence & Automation": [
    "ChatGPT",
    "Claude AI",
    "Microsoft Copilot Studio",
    "Amazon Q Developer",
    "LangChain",
    "RAG (Retrieval-Augmented Generation)"
  ],
  "Cloud Platforms": [
    "Microsoft Azure (Azure AD, Sentinel, Conditional Access)",
    "AWS (EC2, S3, RDS, IAM, VPC, CloudWatch)",
    "Microsoft 365 (Exchange, SharePoint, Teams)",
    "VMware ESXi",
    "Docker"
  ],
  "Operating Systems & Endpoint": [
    "Windows Server",
    "Linux (RHEL, Ubuntu, CentOS)",
    "MacOS",
    "Microsoft Intune",
    "JumpCloud MDM",
    "Ansible"
  ],
  "Scripting & Development": [
    "PowerShell",
    "Python",
    "Bash",
    "REST API",
    "Git",
    "JavaScript"
  ],
  "Enterprise Platforms": [
    "ServiceNow (Admin, Flow Designer)",
    "Salesforce (API Integration, Service Cloud)",
    "NICE CXone",
    "Atlassian Suite (Jira, Confluence)",
    "Power Automate"
  ],
  "Security & Compliance": [
    "Azure Sentinel (SIEM)",
    "FedRAMP (Medium/High)",
    "NIST SP 800-53",
    "DoD STIGs",
    "RMF",
    "Zero Trust Architecture"
  ]
};

export const skills: string[] = [
  "placeholder1",
  "placeholder2",
  "placeholder3",
  "placeholder4",
  "placeholder5",
  "placeholder6"
];

export const education = {
  degree: "Bachelor of Science (BS), Computer Science",
  institution: "Full Sail University",
  date: "July 2018",
};

export const certifications: string[] = [
  "CompTIA Security+ (DoD 8570 IAT Level II)",
  "AWS Solutions Architect Associate",
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "ITIL v4 Foundation"
];