type Experience = {
  company: string
  role: string
  date: string
  bullets: string[]
}

const experiences: Experience[] = [
  {
    company: "Tactis LLC (Remote, HQ Washington, D.C.)",
    role: "Systems Engineer (Promoted from System Administrator)",
    date: "Aug 2022 – Oct 2025",
    bullets: [
      "Reduced ticket resolution time by 30% by designing and deploying an integrated ServiceNow and NICE CXOne solution.",
      "Improved incident response time by 25% and enhanced threat visibility by building an Azure Sentinel compliance program.",
      "Increased customer satisfaction by 35% by engineering custom integrations between NICE CXOne and Zendesk using REST APIs.",
      "Optimized Atlassian suite (Jira, Confluence, Bitbucket), driving 25% issue resolution, 30% sprint predictability, and 99.9% uptime for 75+ users.",
      "Reduced downtime by 25% through hybrid Azure Active Directory and Microsoft 365 infrastructure management.",
      "Boosted throughput by scripting automated task flows in PowerShell & Python for onboarding, patching, & identity provisioning.",
      "Led disaster recovery planning, validating business continuity via quarterly failover testing with 99.9% system availability SLAs.",
      "Owned cloud governance and cybersecurity enforcement using Azure Policies, conditional access, and Sentinel analytics rules.",
      "Built workflow automation in Power Automate and ServiceNow Flow Designer to eliminate redundant manual interventions.",
      "Engaged Security, Ops, and Dev teams to enforce and support IT governance, change controls, and FedRAMP compliance audits.",
      "Automated internal service requests and approval workflows, reducing average processing time by 35%.",
      "Led Drupal/PHP website modernization with Acquia Cloud support, improving scalability and maintainability.",
      "Built and maintained local dev environments with Docker/DDEV; managed source control with Bitbucket.",
      "Refactored SCSS and Twig templates using Bootstrap 5, mobile-first methodology with desktop overrides.",
      "Configured Drupal Views and Block Embeds to enhance homepage functionality.",
      "Developed custom reusable components for content authors, expanding publishing flexibility.",
      "Translated Figma designs into pixel-accurate, production-ready code.",
      "Increased Lighthouse performance scores from 70 → 90, boosting speed, accessibility, and SEO."
    ],
  },
  {
    company: "Tlingit Haida Tribal Business Corporation (Government Contracting, Tribal-owned Business Solutions)",
    role: "Information Technology Manager",
    date: "Apr 2021 – Apr 2022",
    bullets: [
      "Led end-to-end Salesforce deployment, including external data migration, and workflow automation, resulting in a 25% increase in sales and ticketing pipelines visibility",
      "Customized and integrated Salesforce with existing business systems, reducing manual reporting time by 10 hours per week",
      "Guided Salesforce adoption by designing dashboards and training sessions, boosting the user adoption rate to 100% within 2 months",
      "Developed with customizations, Service Cloud case management workflows, reducing ticket resolution time by 25% through automated routing and escalation rules",
      "Integrated Salesforce with external ticketing platform Jira, enabling bi-directional sync and improving cross-teams collaboration",
      "Fine-tuned knowledge base article suggestions within Service Console, boosting the first-contact resolution rates by 15%",
      "Increased operational efficiency by standardizing IT workflows and modernizing cross-site network architecture for 2 locations.",
      "Improved system reliability by 20% by migrating 10 on-prem servers and 35TB of structured data to VMware ESXi 7.7.",
      "Reduced downtime by 40% by leading full-stack cloud migrations to Microsoft 365 and Azure for 100 users.",
      "Drove a 20% boost in user productivity by upgrading Active Directory and email services with modern access controls & policies.",
      "Owned a $1M IT budget, aligning procurement, vendor selections, and resource planning with business objectives.",
      "Enforced network security posture and enforced compliance controls tied to DoD STIGs, NIST, and agency-specific frameworks.",
      "Managed IT operations staff across service desk, network, and systems teams, supporting 24/7 operations & project execution.",
      "Created disaster recovery plans to protect data integrity & restore services during unplanned outages."
    ],
  },
  {
    company: "Crystal Management (Cybersecurity, IT, Transformation, Veteran-owned Services Provider)",
    role: "System Administrator",
    date: "Feb 2021 – Apr 2021",
    bullets: [
      "Supported the Air Force's ACAS compliance reporting by generating authenticated scans and remediating findings.",
      "Migrated security center by configuring Tenable SC and integrating ACAS data feeds into vulnerability management dashboards.",
      "Led Red Hat Enterprise Linux 7.x upgrades, scripting deployment tasks and rollback contingencies for zero downtime transitions.",
      "Improved system updates and audits by automating routine tasks using Bash scripting and security scan scheduling workflows.",
      "Partnered with base cyber teams to uphold Information Assurance standards, applying DISA STIGs and implementation guides.",
      "Drove system hardening and patch management on DoD-classified networks in accordance with RMF & NIST 800-53 policies.",
      "Monitored system logs and IDS alerts to identify anomalies and support incident response escalations with cybersecurity staff.",
      "Documented system changes and compliance actions in alignment with Change Control Board (CCB) and DoD standards."
    ],
  },
  {
    company: "United States Army",
    role: "Information Management Director",
    date: "Jan 2018 – Apr 2021",
    bullets: [
      "Directed large-scale IT initiatives, including GFEBS (Army Salesforce) system enhancements and full SharePoint Online migration.",
      "Cut costs 25% and increased user adoption by leading architecture redesign, permissions, and training for SharePoint migration.",
      "Integrated network security policies across 500+ classified and unclassified systems, applying RMF controls & threat mitigation.",
      "Led help desk, systems, and communications teams of 70+ personnel across cross-functional IT support and logistics operations.",
      "Established continuity of operations, backup strategy, and system uptime assurance during deployed and garrison operations.",
      "Delivered executive briefings and technical reports to senior leadership, aligning IT infrastructure goals with mission priorities."
    ],
  }
]

const skills: string[] = [
  "ServiceNow Install and Development",
  "Salesforce Install and Development", 
  "Strategic Infrastructure Planning",
  "Cloud Architecture Design",
  "Disaster Recovery Strategy",
  "Cybersecurity Frameworks",
  "IT Governance & Compliance",
  "Cross-Functional Team Leadership",
  "Workflow Process Optimization",
  "Incident Response Coordination",
  "Vendor Relationship Management",
  "Scrum Project Execution & Reporting"
]

const certifications: string[] = [
  "Microsoft Certified: Azure Fundamentals",
  "Azure Administrator Associate",
  "AWS Solutions Architect – Associate",
  "CompTIA Security+",
  "Microsoft 365 Fundamentals",
  "ServiceNow Developer",
  "ServiceNow System Administrator",
  "SalesForce Developer",
  "SalesForce System Administrator"
]

const education = {
  degree: "Bachelor of Science (BS), Computer Science",
  institution: "Full Sail University",
  date: "July 2018",
}

export default function Resume() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 space-y-10 text-black">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Joseph Henry Dunn II</h1>
        <p className="text-sm text-gray-700">
          33772 Windmill Rd Wildomar, CA 92595 • 830-666-2525 • jdunn0423@gmail.com
        </p>
      </header>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
          Summary
        </h2>
        <div className="space-y-3 text-gray-800">
          <p>
            Cloud Systems Engineer | Infrastructure Manager | Automation Leader with 10+ years of experience specializing in cloud architecture, enterprise IT infrastructure, and secure system automation across federal, defense, and corporate environments.
          </p>
          <p>
            Leads hybrid teams of engineers, developers, and cybersecurity analysts to design, deploy, and support fault-tolerant cloud environments in Azure and AWS, often under tight compliance constraints tied to public and DoD-grade security standards.
          </p>
          <p>
            Spearheads automation of IT workflows and repetitive system tasks using PowerShell, Python, Power Automate, and ServiceNow, freeing up hundreds of team hours annually while reducing error rates in mission-critical environments.
          </p>
          <p>
            Drives end-to-end execution of enterprise IT rollouts, migrating legacy infrastructure to the cloud, aligning architecture with NIST SP 800-53 and FedRAMP standards, and delivering uptime SLAs above 99.9% across Microsoft 365 and custom platforms.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm border border-gray-200"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
          Experience
        </h2>
        <ol className="relative border-l border-gray-300 pl-6 space-y-8">
          {experiences.map((job, idx) => (
            <li key={idx} className="ml-4">
              <div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
              <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                  <h3 className="font-semibold text-lg">
                    {job.role}
                  </h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {job.date}
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {job.company}
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-2 text-gray-800">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((c) => (
            <div 
              key={c}
              className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
            >
              <span className="text-gray-800">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
          Education
        </h2>
        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
          <p className="text-gray-800">
            <span className="font-semibold">{education.degree}</span><br />
            {education.institution} • {education.date}
          </p>
        </div>
      </section>
    </main>
  )
}