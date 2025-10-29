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
    display: "linkedin.com/in/joe-d-80b388358",
    url: "https://www.linkedin.com/in/joe-d-80b388358/"
  },
  github: {
    display: "github.com/joedunn123456789",
    url: "https://github.com/joedunn123456789"
  }
};

export const summary: Summary = {
  main: "Systems Engineer with 10+ years of experience leveraging AI-assisted workflows to design, deploy, and manage enterprise IT infrastructure at accelerated velocity. Expert in cloud platforms (Azure, AWS), automation scripting, and integrating complex enterprise systems. Hand-selected by CTO to lead AI adoption initiative, achieving 8x productivity gains through strategic use of AI tools for infrastructure automation, code generation, and technical problem-solving. Proven ability to lead technical projects, reduce operational costs, and maintain high-availability systems under strict compliance requirements."
};

export const keyAchievements: string[] = [
  "Hand-selected by CTO to pioneer AI adoption initiative - Led company's transition to AI-augmented infrastructure workflows, achieving 8x productivity increase and completing 120+ hours of work in under 14 days",
  "Reduced ticket resolution time by 30% through integrated ServiceNow and NICE CXOne deployment with custom REST API integrations",
  "Maintained 99.9% system availability across hybrid Azure/Microsoft 365 infrastructure supporting 75+ users while meeting FedRAMP compliance standards",
  "Increased customer satisfaction by 35% by engineering seamless API integrations between enterprise platforms",
  "Improved incident response time by 25% by building comprehensive Azure Sentinel compliance and monitoring program"
];

export const experiences: Experience[] = [
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "AI Systems Engineer",
    date: "Jan 2024 – Oct 2025",
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
    role: "Systems Engineer",
    date: "Aug 2023 – Jan 2024",
    administeredSystems: "Microsoft 365 Tenant, Azure, AWS, ServiceNow, Nice CXone, Zendesk",
    bullets: [
      "Single-handedly architected and deployed company's first AWS cloud infrastructure in 6 weeks, implementing 8+ core services (EC2, ECS, RDS, S3, VPC, IAM, CloudWatch, ELB) to support 100+ users; enhanced security posture, reduced operational costs, and enabled scalable application deployment",
      "Managed hybrid Azure Active Directory and Microsoft 365 infrastructure for 75+ users, implementing comprehensive governance framework (Policies, conditional access, Sentinel analytics rules) and maintaining 99.9% availability while meeting FedRAMP compliance requirements",
      "Built Azure Sentinel compliance program with quarterly disaster recovery testing, improving incident response time by 25% and reducing downtime by 25%",
      "Reduced ticket resolution time by 30% by designing and deploying integrated ServiceNow and NICE CXOne solution; increased customer satisfaction by 35% through custom REST API integrations between NICE CXOne and Zendesk",
      "Developed bidirectional REST API in ServiceNow to synchronize tables with NIH's DRC source of truth, implementing Git-based change detection logic to optimize data operations and maintain integrity",
      "Engineered automated voice analytics pipeline (NICE CXOne → Google Cloud Storage → Speech-to-Text API → Firebase → BigQuery) for call transcription, logging, and reporting analysis",
      "Automated internal workflows, onboarding, patching, and identity provisioning using PowerShell and Python scripting, reducing average processing time by 35%",
      "Led Drupal/PHP website modernization leveraging Docker containerization with DDEV and Acquia Cloud, improving scalability and streamlined local-to-production workflows"
    ],
  },
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Systems Administrator",
    date: "Aug 2022 – Aug 2023",
    administeredSystems: "Nice CXone, Microsoft 365 Tenant, ServiceNow, Zendesk, Google Workspace",
    bullets: [
      "Administered enterprise platforms including ServiceNow (user management, integrations, workflow configuration), NICE CXOne/Zendesk integration, Microsoft 365 (Exchange, SharePoint, Teams), and Google Workspace, maintaining 99.9% system availability",
      "Optimized Atlassian suite (Jira, Confluence, Bitbucket) driving 25% faster issue resolution, 30% improved sprint predictability, and 99.9% uptime",
      "Built and maintained local development environments with Docker/DDEV; managed source control with Bitbucket"
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation",
    role: "Information Technology Manager",
    date: "Apr 2021 – Apr 2022",
    administeredSystems: "Microsoft 365 Tenant, Phone Plan Administrator, Vehicle GPS Administrator",
    bullets: [
      "Led end-to-end Salesforce deployment with external data migration and workflow automation, achieving 25% increase in sales and ticketing pipeline visibility, 100% user adoption within 2 months, and reducing manual reporting time by 10 hours per week",
      "Developed Service Cloud case management workflows and integrated Salesforce with Jira for bi-directional sync, reducing ticket resolution time by 25% through automated routing",
      "Reduced downtime by 40% by leading full-stack cloud migration to Microsoft 365 and Azure for 100 users; improved system reliability by 20% through VMware ESXi 7.7 migration of 10 servers and 35TB of data",
      "Upgraded Active Directory and email services with modern access controls, driving 20% boost in user productivity; standardized IT workflows and modernized network architecture for 2 locations",
      "Managed $1M IT budget and led IT operations staff across service desk, network, and systems teams supporting 24/7 operations",
      "Enforced network security posture and compliance controls tied to DoD STIGs, NIST, and agency-specific frameworks; created disaster recovery plans to protect data integrity"
    ],
  },
  {
    company: "Crystal Management",
    role: "System Administrator",
    date: "Feb 2021 – Apr 2021",
    administeredSystems: "ACAS, Red Hat Enterprise Linux",
    bullets: [
      "Supported Air Force ACAS compliance reporting by generating authenticated scans, remediating findings, and configuring Tenable Security Center with integrated vulnerability management dashboards",
      "Partnered with base cyber teams to uphold Information Assurance standards, applying DISA STIGs and driving system hardening and patch management on DoD-classified networks per RMF and NIST 800-53 policies",
      "Led Red Hat Enterprise Linux 7.x upgrades, scripting deployment tasks and rollback contingencies for zero-downtime transitions; automated routine tasks using Bash scripting"
    ],
  },
  {
    company: "United States Army",
    role: "Systems Administrator || Information Management Director",
    date: "Apr 2008 – Apr 2021",
    administeredSystems: "Microsoft 365 Tenant, Legacy Microsoft Active Directory",
    bullets: [
      "Managed Microsoft-based IT infrastructure (Windows Server, Active Directory, Entra ID, Intune, Exchange, Office 365) across 500+ classified and unclassified systems supporting battalion-level tactical operations",
      "Commanded and directed help desk, systems, and communications teams of 70+ personnel across cross-functional IT operations; delivered executive briefings to senior leadership aligning IT infrastructure with mission priorities",
      "Coordinated with DISA and higher commands to implement STIG requirements and technical directives; enforced security policies and compliance standards aligned with AR 25-2, DISA STIGs, NIST 800-53, and RMF controls",
      "Orchestrated collaborative training initiatives for OCIO initiatives, GFEBS (Army Salesforce) enhancements, and SharePoint Online migration projects; provided technical expertise ensuring Microsoft services integrated into mission command systems",
      "Managed software deployment and updates using SCCM and Intune across multiple echelons; configured Microsoft 365 Conditional Access Policies to strengthen enterprise security posture",
      "Monitored system performance and maintained operational efficiency reducing costs 25% while increasing user adoption; planned disaster recovery exercises ensuring business continuity during deployed environments",
      "Coordinated employment of signal and IT personnel at all command levels; arranged transportation logistics and resource planning for equipment assets valued in millions of dollars during deployment operations"
    ],
  }
];

export const skillCategories = {
  "AI & Automation": [
    "ChatGPT",
    "Claude",
    "GitHub Copilot",
    "Prompt Engineering",
    "LangChain",
    "PyTorch",
    "Retrieval-Augmented Generation (RAG)",
    "Amazon Q Developer",
    "Amazon Bedrock",
    "Amazon SageMaker",
    "Microsoft Copilot Studio"
  ],
  "Cloud & Infrastructure Administration": [
    "Microsoft Azure (Azure AD, Azure Sentinel, App Services, Policies, Conditional Access)",
    "AWS (EC2, S3, RDS, IAM, CloudWatch, VPC, ECS, ELB)",
    "Microsoft 365 (Exchange Online, SharePoint, Teams, Security & Compliance)",
    "Active Directory",
    "VMware ESXi",
    "Hyper-V",
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
    "Drupal"
  ],
  "Enterprise Platform Administration": [
    "ServiceNow (Platform Administration, Flow Designer, Custom Integrations)",
    "Salesforce (Configuration, API Integration, Workflow Automation)",
    "NICE CXone",
    "Zendesk",
    "Atlassian Suite (Jira, Confluence, Bitbucket)",
    "Google Workspace"
  ],
  "Security & Compliance": [
    "Azure Sentinel",
    "Tenable Security Center",
    "FedRAMP",
    "NIST SP 800-53",
    "DoD STIGs",
    "RMF",
    "Identity and Access Management",
    "Vulnerability Management",
    "Security Operations"
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