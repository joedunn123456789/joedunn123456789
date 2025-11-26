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
  "Pioneered company-wide AI adoption as CTO-selected lead, achieving 8x productivity gains and delivering 120+ hours of infrastructure work in 14 days through AI-assisted automation, code generation, and advanced problem-solving workflows",
  "Architected and deployed enterprise AWS cloud infrastructure from zero to production in 6 weeks, implementing 8+ core services (EC2, RDS, S3, VPC, IAM) supporting 100+ users while cutting operational costs 25%+",
  "Delivered 99.9% uptime across hybrid Azure/Microsoft 365 infrastructure supporting 75+ users under strict FedRAMP compliance, maintaining zero security incidents through proactive monitoring and automated remediation"
];

export const experiences: Experience[] = [
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Senior Systems Engineer, AI",
    date: "January 2024 – October 2025",
    administeredSystems: "Microsoft 365 Tenant, Azure, Microsoft Copilot Studio, MacOS",
    bullets: [
      "Spearheaded company-wide AI transformation as CTO-selected lead, delivering 8x productivity gains by implementing AI-assisted workflows for infrastructure automation, documentation, and problem-solving—completing 120+ hours of work in 14 days",
      "Engineered enterprise AI ecosystem integrating ChatGPT for ServiceNow (automated ticket resolution), Google Gemini (Workspace intelligence), and AWS AI suite (Amazon Q Developer, Bedrock, SageMaker) enabling custom model development, intelligent automation, and cross-platform AI capabilities",
      "Designed and deployed Retrieval-Augmented Generation (RAG) system for Amazon Q, integrating proprietary knowledge bases to boost AI accuracy 40%+ and enable context-aware enterprise search across 10,000+ documents",
      "Orchestrated end-to-end Microsoft Copilot for Business implementation through Copilot Studio, driving adoption across 5 departments via prompt engineering, workflow optimization, knowledge base curation, and hands-on training",
      "Extended Copilot capabilities by architecting LangChain, LangTool, and PyTorch integrations, unlocking dynamic RAG, advanced tool calling, and context-aware automation reducing manual workflows by 60%",
      "Revolutionized development velocity through AI-assisted PowerShell/Python generation, debugging, and optimization; evangelized prompt engineering to 15+ team members and secured executive buy-in for company-wide AI tool deployment",
      "Accelerated development cycles 3x by leveraging AI for Power Automate flows, ServiceNow automation, web optimization (Lighthouse 70→90), SCSS/Twig/JavaScript generation, and Figma-to-code translation via Claude MCP integration"
    ],
  },
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Systems Engineer, Infrastructure (Promoted from Systems Administrator)",
    date: "August 2022 – January 2024",
    administeredSystems: "Microsoft 365 Tenant, Azure, AWS, ServiceNow, Nice CXone, Zendesk, Google Workspace, MacOS",
    bullets: [
      "Architected and deployed company's first AWS cloud infrastructure from zero to production in 6 weeks, implementing 8+ services (EC2, ECS, RDS, S3, VPC, IAM, CloudWatch, ELB) supporting 100+ users—strengthening security posture, cutting costs 25%, and enabling scalable multi-tier application deployment",
      "Engineered and maintained hybrid Azure AD/Microsoft 365 infrastructure for 75+ users, implementing Zero Trust governance framework and delivering 99.9% uptime while exceeding FedRAMP Medium compliance requirements",
      "Administered 50+ MacOS endpoints via JumpCloud MDM, automating device provisioning, security hardening, patch deployment, and policy enforcement—reducing imaging time 40% and eliminating manual configuration drift",
      "Slashed ticket resolution time 30% and boosted customer satisfaction 35% by architecting integrated ServiceNow-NICE CXone solution with custom REST API middleware enabling seamless cross-platform workflow automation",
      "Established Azure Sentinel SIEM program with automated threat detection, quarterly disaster recovery drills, and incident playbooks—accelerating mean time to resolution (MTTR) by 25% and achieving zero compliance violations",
      "Eliminated 35% of manual processing overhead by engineering PowerShell/Python automation for employee onboarding, patch orchestration, and identity lifecycle management across hybrid cloud environment"
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation",
    role: "Information Technology Manager",
    date: "April 2021 – April 2022",
    administeredSystems: "Microsoft 365 Tenant, Salesforce, VMware ESXi, MacOS",
    bullets: [
      "Orchestrated complete Salesforce implementation with multi-source data migration and intelligent workflow automation, driving 25% pipeline visibility improvement and achieving 100% user adoption across sales organization within 60 days",
      "Eliminated 40% of system downtime by directing enterprise cloud migration to Microsoft 365/Azure for 100 users; increased reliability 20% through VMware ESXi consolidation of 10 physical servers and 35TB data with zero data loss",
      "Deployed JumpCloud MDM for MacBook fleet enabling zero-touch provisioning, remote management, and automated configuration—cutting imaging time 30% and reducing troubleshooting cycles 40% via centralized endpoint control",
      "Directed $1M IT budget and led cross-functional operations teams (service desk, network, systems) delivering 24/7 support with 95%+ SLA compliance across all service tiers",
      "Hardened network security and enforced compliance controls aligned to DoD STIGs, NIST 800-53, and agency-specific frameworks—maintaining zero audit findings across 4 quarterly reviews"
    ],
  },
  {
    company: "United States Army",
    role: "Systems Administrator / Information Management Director",
    date: "April 2008 – April 2021",
    administeredSystems: "Microsoft 365, Active Directory, SCCM, Intune",
    bullets: [
      "Directed mission-critical Microsoft infrastructure (Windows Server, Active Directory, Intune, Exchange, Office 365) across 500+ classified/unclassified systems supporting battalion-level tactical operations with 99.5%+ availability in austere environments",
      "Commanded cross-functional IT organization of 70+ personnel spanning help desk, systems engineering, and tactical communications; delivered strategic briefings to senior leadership on infrastructure modernization, cybersecurity posture, and mission-critical priorities",
      "Enforced stringent security policies aligned with DISA STIGs, NIST 800-53, and RMF controls while optimizing operations to reduce costs 25%—achieving zero critical audit findings across 12 compliance assessments"
    ],
  }
];

export const skillCategories = {
  "Artificial Intelligence & Automation": [
    "ChatGPT",
    "Claude AI",
    "GitHub Copilot",
    "Microsoft Copilot Studio",
    "Prompt Engineering",
    "LangChain",
    "PyTorch",
    "Retrieval-Augmented Generation (RAG)",
    "Amazon Q Developer",
    "Amazon Bedrock",
    "Amazon SageMaker"
  ],
  "Cloud Platforms & Infrastructure": [
    "Microsoft Azure (Azure AD, Sentinel, Policies, Conditional Access)",
    "Amazon Web Services (AWS) (EC2, S3, RDS, IAM, CloudWatch, VPC, ECS, ELB)",
    "Microsoft 365 (Exchange Online, SharePoint, Teams)",
    "Active Directory",
    "VMware ESXi",
    "Docker"
  ],
  "Operating Systems & Endpoint Management": [
    "Windows Server Administration",
    "Linux Administration (RHEL, Ubuntu, CentOS)",
    "MacOS Administration",
    "Microsoft Intune",
    "JumpCloud MDM",
    "Ansible",
    "Mobile Device Management (MDM)",
    "Endpoint Security & Patch Management"
  ],
  "Scripting & Development": [
    "PowerShell",
    "Python",
    "Bash",
    "REST API Development",
    "Git",
    "JavaScript",
    "HTML/CSS",
    "PHP",
    "SCSS",
    "Twig"
  ],
  "Enterprise Platforms": [
    "ServiceNow (Platform Administration, Flow Designer, Custom Integrations)",
    "Salesforce (Configuration, API Integration, Service Cloud)",
    "NICE CXone",
    "Zendesk",
    "Atlassian Suite (Jira, Confluence, Bitbucket)",
    "Google Workspace",
    "Power Automate"
  ],
  "Security & Compliance": [
    "Azure Sentinel (SIEM)",
    "Tenable Security Center",
    "FedRAMP",
    "NIST SP 800-53",
    "DoD STIGs",
    "RMF",
    "Identity and Access Management (IAM)",
    "Vulnerability Management"
  ],
  "Frameworks & Standards": [
    "DoD 8570",
    "DoD 8140",
    "ISO 27000",
    "NIST",
    "FedRAMP Medium",
    "FedRAMP High",
    "HIPAA"
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