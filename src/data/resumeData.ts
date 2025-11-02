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
    display: "linkedin.com/in/JoeVisualStoryteller",
    url: "https://www.linkedin.com/in/JoeVisualStoryteller/"
  },
  github: {
    display: "github.com/joedunn123456789",
    url: "https://github.com/joedunn123456789"
  }
};

export const summary: Summary = {
  main: "Systems Engineer with 10+ years of experience leveraging Artificial Intelligence (AI)-assisted workflows to design, deploy, and manage enterprise IT infrastructure at accelerated velocity. Expert in cloud platforms (Microsoft Azure, Amazon Web Services (AWS)), automation scripting, and integrating complex enterprise systems. Hand-selected by Chief Technology Officer (CTO) to lead AI adoption initiative, achieving 8x productivity gains through strategic use of AI tools for infrastructure automation, code generation, and technical problem-solving. Proven ability to lead technical projects, reduce operational costs, and maintain high-availability systems under strict compliance requirements including FedRAMP, NIST SP 800-53, and DoD STIGs."
};

export const keyAchievements: string[] = [
  "Hand-selected by Chief Technology Officer (CTO) to pioneer Artificial Intelligence (AI) adoption initiative - Led company's transition to AI-augmented infrastructure workflows, achieving 8x productivity increase and completing 120+ hours of work in under 14 days",
  "Architected and deployed company's first AWS cloud infrastructure in 6 weeks, implementing 8+ core services supporting 100+ users while reducing operational costs",
  "Maintained 99.9% system availability across hybrid Microsoft Azure/Microsoft 365 infrastructure supporting 75+ users while meeting FedRAMP (Federal Risk and Authorization Management Program) compliance standards"
];

export const experiences: Experience[] = [
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "AI Systems Engineer",
    date: "January 2024 – October 2025",
    administeredSystems: "Microsoft 365 Tenant, Azure, Microsoft Copilot Studio",
    bullets: [
      "Hand-selected by CTO to lead AI adoption initiative, achieving 8x productivity increase through AI-assisted workflows for automation development, documentation, and technical problem-solving; completed 120+ hours of infrastructure work in under 14 days",
      "Architected and deployed enterprise AI platform integrations including ChatGPT for ServiceNow (AI-powered ticket resolution and workflow automation), enhanced Google Gemini within Workspace ecosystem, and AWS AI suite (Amazon Q Developer, Bedrock, SageMaker) enabling custom model development and intelligent automation",
      "Implemented Retrieval-Augmented Generation (RAG) capabilities for Amazon Q, integrating company knowledge bases to improve AI response accuracy and enable context-aware enterprise search",
      "Led end-to-end Microsoft Copilot for Business implementation via Copilot Studio, including prompt engineering, workflow design, knowledge base optimization, and cross-departmental user training",
      "Extended Copilot functionality by integrating LangChain, LangTool, and PyTorch, enabling dynamic RAG, tool calling, and context-aware automation capabilities",
      "Pioneered AI-assisted development workflows for rapid PowerShell/Python script generation, debugging, and optimization; trained team members on prompt engineering and demonstrated ROI to leadership, leading to company-wide AI tool deployment",
      "Leveraged AI-assisted development to build Power Automate and ServiceNow Flow Designer automation, optimize web performance (Lighthouse scores 70→90), accelerate code generation for SCSS/Twig/JavaScript, and translate Figma designs to production code via MCP Claude integration"
    ],
  },
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Systems Engineer (Promoted from Systems Administrator)",
    date: "August 2022 – January 2024",
    administeredSystems: "Microsoft 365 Tenant, Azure, AWS, ServiceNow, Nice CXone, Zendesk, Google Workspace",
    bullets: [
      "Single-handedly architected and deployed company's first AWS cloud infrastructure in 6 weeks, implementing 8+ core services (EC2, ECS, RDS, S3, VPC, IAM, CloudWatch, ELB) to support 100+ users; enhanced security posture, reduced operational costs, and enabled scalable application deployment",
      "Managed hybrid Azure Active Directory and Microsoft 365 infrastructure for 75+ users, implementing comprehensive governance framework and maintaining 99.9% availability while meeting FedRAMP compliance requirements",
      "Reduced ticket resolution time by 30% by designing and deploying integrated ServiceNow and NICE CXOne solution; increased customer satisfaction by 35% through custom REST API integrations",
      "Built Azure Sentinel compliance program with quarterly disaster recovery testing, improving incident response time by 25%",
      "Automated internal workflows, onboarding, patching, and identity provisioning using PowerShell and Python scripting, reducing average processing time by 35%"
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation",
    role: "Information Technology Manager",
    date: "April 2021 – April 2022",
    administeredSystems: "Microsoft 365 Tenant, Salesforce, VMware ESXi",
    bullets: [
      "Led end-to-end Salesforce deployment with external data migration and workflow automation, achieving 25% increase in sales pipeline visibility and 100% user adoption within 2 months",
      "Reduced downtime by 40% by leading full-stack cloud migration to Microsoft 365 and Azure for 100 users; improved system reliability by 20% through VMware ESXi migration of 10 servers and 35TB of data",
      "Managed $1M IT budget and led IT operations staff across service desk, network, and systems teams supporting 24/7 operations",
      "Enforced network security posture and compliance controls tied to DoD STIGs, NIST, and agency-specific frameworks"
    ],
  },
  {
    company: "United States Army",
    role: "Systems Administrator / Information Management Director",
    date: "April 2008 – April 2021",
    administeredSystems: "Microsoft 365, Active Directory, SCCM, Intune",
    bullets: [
      "Managed Microsoft-based IT infrastructure (Windows Server, Active Directory, Intune, Exchange, Office 365) across 500+ classified and unclassified systems supporting battalion-level tactical operations",
      "Commanded and directed help desk, systems, and communications teams of 70+ personnel; delivered executive briefings to senior leadership on IT infrastructure and mission priorities",
      "Enforced security policies and compliance standards aligned with DISA STIGs, NIST 800-53, and RMF controls; reduced operational costs by 25% while maintaining system performance"
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