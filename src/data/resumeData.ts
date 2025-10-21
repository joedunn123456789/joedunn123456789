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
  whyICode: string;
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
  main: "Systems Engineer with 10+ years of experience leveraging AI-assisted workflows to design, deploy, and manage enterprise IT infrastructure at accelerated velocity. Expert in cloud platforms (Azure, AWS), automation scripting, and integrating complex enterprise systems. Hand-selected by CTO to lead AI adoption initiative, achieving 8x productivity gains through strategic use of AI tools for infrastructure automation, code generation, and technical problem-solving. Proven ability to lead technical projects, reduce operational costs, and maintain high-availability systems under strict compliance requirements.",
  whyICode: "AI-Augmented Infrastructure Engineering: Pioneered the use of AI tools in infrastructure engineering workflows, demonstrating how Systems Engineers can leverage LLMs for script generation, debugging, documentation, and problem-solving. Proven track record of 8x productivity gains while maintaining code quality and security standards. Advocate for responsible AI adoption in enterprise IT environments."
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
    role: "Systems Engineer (Promoted from System Administrator)",
    date: "Aug 2022 – Oct 2025",
    administeredSystems: "Nice CXone, Microsoft 365 Tenant, ServiceNow, Zendesk, Google Workspace",
    bullets: [
      "Hand-selected by CTO to lead AI adoption initiative for infrastructure engineering team",
      "Achieved 8x productivity increase by implementing AI-assisted workflows for automation development, documentation, and technical problem-solving",
      "Completed 120+ hours of infrastructure work in under 14 days using AI-augmented development techniques",
      "Pioneered use of AI tools (Claude, ChatGPT) for rapid PowerShell/Python script generation, debugging, and optimization",
      "Trained team members on effective prompt engineering and AI-assisted infrastructure workflows",
      "Demonstrated ROI of AI adoption to leadership, leading to company-wide AI tool deployment",
      "Reduced downtime by 25% through hybrid Azure Active Directory and Microsoft 365 infrastructure management for 75+ users",
      "Built Azure Sentinel compliance program, improving incident response time by 25% and enhancing threat visibility",
      "Implemented Azure governance framework using Policies, conditional access controls, and Sentinel analytics rules",
      "Served as Security Administrator for Microsoft 365 Tenant, implemented and deployed custom Microsoft Sentinel solution",
      "Managed security operations including user onboarding, off-boarding, access reviews, and identity lifecycle management",
      "Led disaster recovery planning with quarterly failover testing, maintaining 99.9% system availability SLA",
      "Owned cloud governance and cybersecurity enforcement supporting FedRAMP compliance audits",
      "Reduced ticket resolution time by 30% by designing and deploying integrated ServiceNow and NICE CXOne solution",
      "Increased customer satisfaction by 35% by engineering custom REST API integrations between NICE CXOne and Zendesk",
      "Automated internal service requests and approval workflows, reducing average processing time by 35%",
      "Built workflow automation in Power Automate and ServiceNow Flow Designer using AI-assisted development",
      "Scripted automated task flows in PowerShell and Python for onboarding, patching, and identity provisioning",
      "Optimized Atlassian suite (Jira, Confluence, Bitbucket) driving 25% faster issue resolution, 30% improved sprint predictability, and 99.9% uptime",
      "Administered ServiceNow platform including user management, integrations, and workflow configuration",
      "Managed NICE CXOne contact center platform with Zendesk integration for seamless customer support",
      "Led Drupal/PHP website modernization with Acquia Cloud support, improving scalability and maintainability",
      "Leveraged AI tools for rapid code generation and debugging of SCSS, Twig, and JavaScript components",
      "Built and maintained local development environments with Docker/DDEV; managed source control with Bitbucket",
      "Increased Lighthouse performance scores from 70 to 90 through AI-assisted optimization recommendations",
      "Translated Figma designs into production-ready code using AI-powered code generation",
      "Engaged Security, Operations, and Development teams to enforce IT governance and change controls",
      "Evangelized AI adoption across technical teams, demonstrating productivity benefits",
      "Documented AI-assisted workflows and best practices for team knowledge sharing"
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation",
    role: "Information Technology Manager",
    date: "Apr 2021 – Apr 2022",
    administeredSystems: "Microsoft 365 Tenant, Phone Plan Administrator, Vehicle GPS Administrator",
    bullets: [
      "Led end-to-end Salesforce deployment including external data migration and workflow automation, resulting in 25% increase in sales and ticketing pipeline visibility",
      "Customized and integrated Salesforce with existing business systems, reducing manual reporting time by 10 hours per week",
      "Achieved 100% user adoption within 2 months through comprehensive dashboard design and training programs",
      "Developed Service Cloud case management workflows, reducing ticket resolution time by 25% through automated routing",
      "Integrated Salesforce with Jira for bi-directional sync, improving cross-team collaboration",
      "Reduced downtime by 40% by leading full-stack cloud migration to Microsoft 365 and Azure for 100 users",
      "Improved system reliability by 20% by migrating 10 on-premise servers and 35TB of data to VMware ESXi 7.7",
      "Upgraded Active Directory and email services with modern access controls, driving 20% boost in user productivity",
      "Standardized IT workflows and modernized cross-site network architecture for 2 locations",
      "Managed $1M IT budget, aligning procurement, vendor selection, and resource planning with business objectives",
      "Led IT operations staff across service desk, network, and systems teams supporting 24/7 operations",
      "Enforced network security posture and compliance controls tied to DoD STIGs, NIST, and agency-specific frameworks",
      "Managed security operations including user onboarding, off-boarding, access provisioning, and identity lifecycle management",
      "Created disaster recovery plans to protect data integrity and restore services during unplanned outages"
    ],
  },
  {
    company: "Crystal Management",
    role: "System Administrator",
    date: "Feb 2021 – Apr 2021",
    administeredSystems: "ACAS, Red Hat Enterprise Linux",
    bullets: [
      "Supported Air Force ACAS compliance reporting by generating authenticated scans and remediating findings",
      "Configured Tenable Security Center and integrated ACAS data feeds into vulnerability management dashboards",
      "Partnered with base cyber teams to uphold Information Assurance standards, applying DISA STIGs",
      "Drove system hardening and patch management on DoD-classified networks per RMF and NIST 800-53 policies",
      "Led Red Hat Enterprise Linux 7.x upgrades, scripting deployment tasks and rollback contingencies for zero-downtime transitions",
      "Automated routine tasks using Bash scripting and security scan scheduling workflows",
      "Monitored system logs and IDS alerts to identify anomalies and support incident response escalations",
      "Documented system changes and compliance actions in alignment with Change Control Board standards",
      "Managed security operations including user onboarding, off-boarding, access control, and account lifecycle management"
    ],
  },
  {
    company: "United States Army",
    role: "Information Management Director",
    date: "Jan 2018 – Apr 2021",
    administeredSystems: "Microsoft 365 Tenant, Legacy Microsoft Active Directory",
    bullets: [
      "Directed enterprise IT projects including GFEBS (Army Salesforce) system enhancements and SharePoint Online migration",
      "Cut costs 25% and increased user adoption by leading architecture redesign, permissions configuration, and training",
      "Integrated network security policies across 500+ classified and unclassified systems, applying RMF controls",
      "Established continuity of operations, backup strategy, and system uptime assurance during deployed operations",
      "Led help desk, systems, and communications teams of 70+ personnel across cross-functional IT operations",
      "Delivered executive briefings and technical reports to senior leadership",
      "Aligned IT infrastructure goals with mission priorities and operational requirements",
      "Managed complex projects in high-stakes, time-sensitive environments",
      "Managed security operations including user onboarding, off-boarding, access control, and identity lifecycle management for 500+ users"
    ],
  }
];

export const skillCategories = {
  "AI & Productivity Tools": [
    "AI-Assisted Development (ChatGPT, Claude, GitHub Copilot)",
    "Prompt Engineering for Infrastructure Automation",
    "AI-Powered Code Generation & Debugging",
    "Workflow Acceleration using LLMs"
  ],
  "Cloud & Infrastructure": [
    "Microsoft Azure: Azure AD, Azure Sentinel, App Services, Policies, Conditional Access",
    "AWS: EC2, S3, IAM, solutions architecture",
    "Microsoft 365: Exchange Online, SharePoint, Teams, security & compliance",
    "Virtualization: VMware ESXi, Hyper-V, Docker",
    "Active Directory: User management, Group Policy, hybrid environments"
  ],
  "Automation & Scripting": [
    "PowerShell: Azure automation, AD management, AI-assisted script generation",
    "Python: API integration, data processing, workflow automation",
    "Bash: Linux system administration, deployment scripts"
  ],
  "Enterprise Platforms": [
    "ServiceNow: Platform administration, Flow Designer, custom integrations",
    "Salesforce: Platform configuration, API integration, workflow automation",
    "Atlassian Suite: Jira, Confluence, Bitbucket administration"
  ],
  "Development & Integration": [
    "REST API integration and development",
    "Git version control and collaboration",
    "Web technologies: HTML, CSS/SCSS, JavaScript, PHP (Drupal)",
    "AI-assisted debugging and code optimization"
  ],
  "Security & Compliance": [
    "Azure Sentinel, Tenable Security Center",
    "FedRAMP, NIST SP 800-53, DoD STIGs, RMF",
    "Identity and Access Management",
    "Vulnerability management and remediation"
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

export const certificationCategories = {
  "Cloud & Infrastructure": [
    "Microsoft 365 Certified: Administrator Expert",
    "AWS Certified SysOps Administrator - Associate",
    "CompTIA Security+",
    "Professional Google Workspace Administrator"
  ],
  "Development & Platforms": [
    "Certified Application Developer - ServiceNow",
    "Salesforce Certified Platform Developer II"
  ]
};

export const certifications: string[] = [
  "Microsoft Certified: Azure Fundamentals",
  "Azure Administrator Associate",
  "AWS Solutions Architect – Associate",
  "CompTIA Security+",
  "Microsoft 365 Fundamentals",
  "ServiceNow Developer",
  "ServiceNow System Administrator",
  "SalesForce Developer",
  "SalesForce System Administrator"
];

export const education = {
  degree: "Bachelor of Science (BS), Computer Science",
  institution: "Full Sail University",
  date: "July 2018",
};