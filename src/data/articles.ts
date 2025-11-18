import type { Article } from '../types/article';

export const articles: Article[] = [
  {
    id: '1',
    slug: 'microsoft-365-user-onboarding-best-practices',
    title: 'How to Onboard Users in Microsoft 365 Using Best Practices',
    description: 'A comprehensive guide to onboarding new users in Microsoft 365 environments with security, automation, and efficiency in mind.',
    category: 'Microsoft 365',
    tags: ['M365', 'Azure AD', 'PowerShell', 'Security', 'User Management'],
    datePublished: '2025-11-01',
    readTime: '12 min',
    author: {
      name: 'Joseph H Dunn II',
      title: 'Cloud Systems Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Onboarding users to Microsoft 365 is a critical process that sets the foundation for security, productivity, and compliance. This guide outlines enterprise-grade best practices for efficiently onboarding users while maintaining security posture.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pre-Onboarding Preparation'
      },
      {
        type: 'paragraph',
        content: 'Before creating any user accounts, ensure your Microsoft 365 environment is properly configured with the necessary policies and security baselines.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        content: 'Always use a standardized naming convention for user accounts, groups, and distribution lists to maintain consistency across your organization.'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Define User Account Standards'
      },
      {
        type: 'list',
        content: [
          'Username format (e.g., firstname.lastname@company.com)',
          'Password policies and complexity requirements',
          'Multi-factor authentication (MFA) requirements',
          'Default license assignments based on department/role',
          'Group membership templates'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Prepare Azure AD Groups'
      },
      {
        type: 'paragraph',
        content: 'Create role-based and department-based security groups before onboarding. This enables automated license assignment and access control through dynamic group membership.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `# Create a new Azure AD security group
New-AzureADGroup -DisplayName "Finance-Users" \`
  -MailEnabled $false \`
  -SecurityEnabled $true \`
  -MailNickName "FinanceUsers" \`
  -Description "Finance Department Users"`
      },
      {
        type: 'heading',
        level: 2,
        content: 'User Account Creation Process'
      },
      {
        type: 'paragraph',
        content: 'Follow these steps for each new user to ensure consistency and security compliance.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 1: Create the User Account'
      },
      {
        type: 'paragraph',
        content: 'Use PowerShell for bulk operations or the Microsoft 365 Admin Center for individual users. Always verify the user details before creating accounts.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `# Create a new Microsoft 365 user
New-MgUser -DisplayName "John Doe" \`
  -UserPrincipalName "john.doe@company.com" \`
  -MailNickname "john.doe" \`
  -AccountEnabled \`
  -PasswordProfile @{
    Password = "TempP@ssw0rd123!"
    ForceChangePasswordNextSignIn = $true
  } \`
  -Department "Engineering" \`
  -JobTitle "Software Engineer" \`
  -UsageLocation "US"`
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 2: Assign Licenses'
      },
      {
        type: 'paragraph',
        content: 'Assign appropriate Microsoft 365 licenses based on the user\'s role and department. Consider using group-based licensing for automated management.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `# Assign Microsoft 365 E3 license
Set-MgUserLicense -UserId "john.doe@company.com" \`
  -AddLicenses @{SkuId = "05e9a617-0261-4cee-bb44-138d3ef5d965"} \`
  -RemoveLicenses @()`
      },
      {
        type: 'callout',
        calloutType: 'warning',
        content: 'Always set the UsageLocation property before assigning licenses. Failure to do so will result in license assignment errors.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 3: Configure Multi-Factor Authentication'
      },
      {
        type: 'paragraph',
        content: 'Enable MFA for all users as part of your zero-trust security strategy. Use Conditional Access policies to enforce MFA requirements.'
      },
      {
        type: 'list',
        content: [
          'Enable MFA registration for the user account',
          'Configure trusted devices and locations',
          'Set up Conditional Access policies for sensitive applications',
          'Provide MFA enrollment instructions to the user'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 4: Add to Security Groups'
      },
      {
        type: 'paragraph',
        content: 'Add the user to appropriate security groups based on their department, role, and access requirements.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `# Add user to security group
Add-AzureADGroupMember -ObjectId "group-object-id" \`
  -RefObjectId "user-object-id"`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Post-Onboarding Tasks'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exchange Online Configuration'
      },
      {
        type: 'list',
        content: [
          'Configure mailbox retention policies',
          'Set up email forwarding rules if needed',
          'Add to distribution lists',
          'Configure shared mailbox access if required',
          'Enable email archiving'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'SharePoint & OneDrive Setup'
      },
      {
        type: 'list',
        content: [
          'Grant access to team sites and document libraries',
          'Configure OneDrive storage limits',
          'Set up data loss prevention (DLP) policies',
          'Enable external sharing restrictions'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Teams Configuration'
      },
      {
        type: 'list',
        content: [
          'Add to relevant Teams channels',
          'Configure Teams policies (messaging, calling, meetings)',
          'Set up Teams app permissions',
          'Provide Teams training resources'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Automation with PowerShell Script'
      },
      {
        type: 'paragraph',
        content: 'Automate the entire onboarding process with a comprehensive PowerShell script that handles user creation, licensing, and group membership.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `# Complete User Onboarding Script
param(
    [Parameter(Mandatory=$true)]
    [string]$FirstName,

    [Parameter(Mandatory=$true)]
    [string]$LastName,

    [Parameter(Mandatory=$true)]
    [string]$Department,

    [Parameter(Mandatory=$true)]
    [string]$JobTitle
)

# Connect to Microsoft Graph
Connect-MgGraph -Scopes "User.ReadWrite.All", "Group.ReadWrite.All"

# Define variables
$UPN = "$FirstName.$LastName@company.com".ToLower()
$DisplayName = "$FirstName $LastName"
$TempPassword = "TempP@ss$(Get-Random -Minimum 1000 -Maximum 9999)!"

# Create user
$NewUser = New-MgUser -DisplayName $DisplayName \`
    -UserPrincipalName $UPN \`
    -MailNickname "$FirstName.$LastName".ToLower() \`
    -AccountEnabled \`
    -PasswordProfile @{
        Password = $TempPassword
        ForceChangePasswordNextSignIn = $true
    } \`
    -Department $Department \`
    -JobTitle $JobTitle \`
    -UsageLocation "US"

Write-Host "User created: $UPN" -ForegroundColor Green

# Wait for user provisioning
Start-Sleep -Seconds 10

# Assign license (Microsoft 365 E3)
Set-MgUserLicense -UserId $NewUser.Id \`
    -AddLicenses @{SkuId = "05e9a617-0261-4cee-bb44-138d3ef5d965"} \`
    -RemoveLicenses @()

Write-Host "License assigned" -ForegroundColor Green

# Add to department group
$GroupId = (Get-MgGroup -Filter "displayName eq '$Department-Users'").Id
New-MgGroupMember -GroupId $GroupId -DirectoryObjectId $NewUser.Id

Write-Host "Added to $Department-Users group" -ForegroundColor Green

# Output credentials
Write-Host "\\nOnboarding Complete!" -ForegroundColor Cyan
Write-Host "Username: $UPN"
Write-Host "Temporary Password: $TempPassword"
Write-Host "User must change password on first login"`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Security Best Practices Checklist'
      },
      {
        type: 'callout',
        calloutType: 'info',
        content: 'Security should be a primary consideration throughout the entire onboarding process.'
      },
      {
        type: 'list',
        content: [
          'Enforce strong password policies with complexity requirements',
          'Require MFA for all user accounts without exception',
          'Use least-privilege access principles - only grant necessary permissions',
          'Enable audit logging for all user activities',
          'Implement conditional access policies based on risk levels',
          'Configure session timeouts for inactive users',
          'Enable Azure AD Identity Protection',
          'Set up alerts for suspicious sign-in activities',
          'Regularly review and audit user access permissions',
          'Implement data loss prevention (DLP) policies'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Offboarding Considerations'
      },
      {
        type: 'paragraph',
        content: 'Planning for offboarding is just as important as onboarding. Maintain a documented process for user account deactivation.'
      },
      {
        type: 'list',
        content: [
          'Disable the account immediately upon termination',
          'Revoke all licenses and access permissions',
          'Convert mailbox to shared mailbox for data retention',
          'Transfer OneDrive files to manager or department',
          'Remove from all groups and distribution lists',
          'Document all actions taken in audit log'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Effective Microsoft 365 user onboarding requires careful planning, standardization, and automation. By following these best practices, you ensure security compliance, operational efficiency, and a smooth experience for new users. Regular reviews and updates to your onboarding process help maintain alignment with evolving security requirements and organizational changes.'
      },
      {
        type: 'callout',
        calloutType: 'success',
        content: 'Remember: Automation is key to scaling your onboarding process while maintaining consistency and reducing human error.'
      }
    ]
  },
  {
    id: '2',
    slug: 'azure-ad-security-hardening',
    title: 'Azure AD Security Hardening for Enterprise Environments',
    description: 'Essential security configurations and hardening techniques for Azure Active Directory in enterprise deployments.',
    category: 'Azure',
    tags: ['Azure AD', 'Security', 'Identity', 'Zero Trust', 'Compliance'],
    datePublished: '2025-10-15',
    readTime: '15 min',
    author: {
      name: 'Joseph H Dunn II',
      title: 'Cloud Systems Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Azure Active Directory (Azure AD) is the backbone of identity and access management in Microsoft 365 environments. Proper security hardening is essential to protect against unauthorized access and data breaches.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Enable Conditional Access Policies'
      },
      {
        type: 'paragraph',
        content: 'Conditional Access is your first line of defense in implementing zero-trust security. Configure policies that evaluate risk signals before granting access to resources.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        content: 'Start with report-only mode when testing new Conditional Access policies to understand their impact before enforcement.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Recommended Policies'
      },
      {
        type: 'list',
        content: [
          'Require MFA for all administrators',
          'Block legacy authentication protocols',
          'Require compliant or hybrid Azure AD joined devices',
          'Block access from untrusted locations',
          'Require MFA for Azure management',
          'Implement sign-in frequency controls for sensitive apps'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Implement Privileged Identity Management (PIM)'
      },
      {
        type: 'paragraph',
        content: 'PIM provides just-in-time privileged access, reducing the attack surface by eliminating standing administrative permissions.'
      },
      {
        type: 'callout',
        calloutType: 'warning',
        content: 'Never assign permanent Global Administrator roles. Use PIM for time-bound, approved elevation requests.'
      }
    ]
  },
  {
    id: '3',
    slug: 'powershell-automation-tips',
    title: 'PowerShell Automation Tips for IT Administrators',
    description: 'Practical PowerShell automation techniques to streamline IT operations and improve efficiency.',
    category: 'PowerShell',
    tags: ['PowerShell', 'Automation', 'Scripting', 'DevOps'],
    datePublished: '2025-09-20',
    readTime: '10 min',
    author: {
      name: 'Joseph H Dunn II',
      title: 'Cloud Systems Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'PowerShell is an essential tool for modern IT administrators. This guide covers practical automation techniques that will save you time and reduce manual errors in your daily operations.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Error Handling Best Practices'
      },
      {
        type: 'paragraph',
        content: 'Robust error handling is critical for production scripts. Always use try-catch blocks and validate inputs before execution.'
      },
      {
        type: 'code',
        language: 'powershell',
        content: `try {
    $Users = Get-MgUser -All -ErrorAction Stop
    foreach ($User in $Users) {
        # Process each user
    }
}
catch {
    Write-Error "Failed to retrieve users: $_"
    # Log error and handle gracefully
}`
      }
    ]
  },
  {
    id: '4',
    slug: 'outlook-calendar-view-for-emails',
    title: 'How to Create a Calendar View for Emails in Microsoft Outlook',
    description: 'Learn how to visualize your emails in a calendar format using Outlook\'s custom view features for better time-based email management and tracking.',
    category: 'Microsoft 365',
    tags: ['Outlook', 'Productivity', 'Email Management', 'Custom Views', 'Microsoft 365'],
    datePublished: '2025-11-18',
    readTime: '8 min',
    author: {
      name: 'Joseph H Dunn II',
      title: 'Cloud Systems Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Microsoft Outlook\'s custom view feature is a powerful but often overlooked tool that allows you to visualize emails in different formats. One particularly useful configuration is displaying emails in a calendar-style view, which helps you track time-sensitive communications, project timelines, and scheduled correspondence at a glance.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Why Use Calendar View for Emails?'
      },
      {
        type: 'paragraph',
        content: 'Traditional list views in Outlook work well for most scenarios, but calendar views provide unique advantages for specific use cases:'
      },
      {
        type: 'list',
        content: [
          'Visualize email patterns and communication timelines',
          'Track project-related emails chronologically',
          'Identify gaps in communication or response times',
          'Monitor time-sensitive emails and deadlines',
          'Better understand email volume distribution across days',
          'Quickly identify when important communications occurred'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        content: 'Calendar views are especially useful for project managers, support teams, and anyone managing time-sensitive workflows through email.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Creating a Basic Calendar View'
      },
      {
        type: 'paragraph',
        content: 'Follow these steps to create a calendar-style view for your emails in Outlook desktop application:'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 1: Access View Settings'
      },
      {
        type: 'list',
        content: [
          'Open Microsoft Outlook and navigate to your Inbox or desired folder',
          'Click the "View" tab in the ribbon',
          'Click "Change View" in the Current View group',
          'Select "Manage Views" at the bottom of the dropdown'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 2: Create New View'
      },
      {
        type: 'list',
        content: [
          'In the Manage All Views dialog, click "New"',
          'Enter a name for your view (e.g., "Email Calendar" or "Timeline View")',
          'In the "Type of view" section, select "Timeline"',
          'Choose where to apply the view (This folder, All Mail folders, etc.)',
          'Click "OK" to proceed to detailed settings'
        ]
      },
      {
        type: 'callout',
        calloutType: 'info',
        content: 'The "Timeline" view type is what creates the calendar-style visualization. This is different from the Calendar module - it applies to your Mail folders.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Step 3: Configure Timeline Settings'
      },
      {
        type: 'paragraph',
        content: 'The Advanced View Settings dialog opens automatically. Here you can customize your calendar view:'
      },
      {
        type: 'list',
        content: [
          'Fields: Choose which fields to display (Subject, From, Size, etc.)',
          'Group By: Organize emails by sender, category, or other criteria',
          'Sort: Define the sorting order within each day',
          'Filter: Apply filters to show only specific emails',
          'Other Settings: Adjust font, grid lines, and reading pane options',
          'Format Timeline: Set the default time scale (day, week, month)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Customizing Your Calendar View'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Adjusting the Time Scale'
      },
      {
        type: 'paragraph',
        content: 'The timeline view offers multiple time scale options to suit different needs:'
      },
      {
        type: 'list',
        content: [
          'Day view: Shows emails hour-by-hour (best for high-volume analysis)',
          'Week view: Displays a 7-day overview (ideal for weekly planning)',
          'Month view: Shows entire month at once (good for long-term patterns)',
          'Upper and Lower scales: Can be set independently for flexibility'
        ]
      },
      {
        type: 'paragraph',
        content: 'To change the time scale after creating your view, click the time scale labels at the top of the timeline to toggle between different zoom levels.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Adding Useful Fields'
      },
      {
        type: 'paragraph',
        content: 'Customize which information appears for each email in the timeline:'
      },
      {
        type: 'list',
        content: [
          'Click "Fields" in the Advanced View Settings',
          'Add fields like: Received, From, Subject, Categories, Flag Status',
          'Remove unnecessary fields to reduce clutter',
          'Arrange fields in your preferred order',
          'Set maximum width for subject lines to prevent overflow'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Applying Filters'
      },
      {
        type: 'paragraph',
        content: 'Filters help you focus on specific types of emails in your calendar view:'
      },
      {
        type: 'list',
        content: [
          'Click "Filter" in Advanced View Settings',
          'Filter by sender, subject keywords, date ranges, or categories',
          'Combine multiple filter criteria for precise results',
          'Use "From" field to track communications with specific contacts',
          'Apply category filters to see project-specific email timelines'
        ]
      },
      {
        type: 'callout',
        calloutType: 'warning',
        content: 'Remember that filtered views only show emails matching your criteria. Emails that don\'t match will be hidden, not deleted.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Use Cases'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Project Timeline Tracking'
      },
      {
        type: 'paragraph',
        content: 'Create a filtered calendar view for project-related emails:'
      },
      {
        type: 'list',
        content: [
          'Create a new timeline view named "Project Alpha Timeline"',
          'Apply filter: Subject contains "Project Alpha" OR From contains team members',
          'Use categories to color-code different project phases',
          'Set time scale to week view for overview perspective',
          'Add "Due By" field if tracking action items via email'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Client Communication History'
      },
      {
        type: 'paragraph',
        content: 'Visualize all communications with a specific client:'
      },
      {
        type: 'list',
        content: [
          'Create timeline view named "Client Communications"',
          'Filter by From or To containing client email domain',
          'Group by sender to separate incoming vs outgoing',
          'Use month view to see long-term communication patterns',
          'Identify response time gaps and follow-up opportunities'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Support Ticket Timeline'
      },
      {
        type: 'paragraph',
        content: 'Track support requests and responses chronologically:'
      },
      {
        type: 'list',
        content: [
          'Filter emails with specific ticket number format',
          'Group by conversation to keep related emails together',
          'Display received time, sender, and subject',
          'Use day view for detailed hour-by-hour ticket flow',
          'Monitor SLA compliance and response times'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Advanced Tips and Tricks'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Creating Multiple Specialized Views'
      },
      {
        type: 'paragraph',
        content: 'Don\'t limit yourself to one calendar view. Create multiple views for different purposes:'
      },
      {
        type: 'list',
        content: [
          'Management View: Emails from leadership and important stakeholders',
          'Vendor Communications: Track external partner correspondence',
          'Team Updates: Internal team communications and status updates',
          'Urgent Items: High-priority and flagged emails only',
          'Weekly Digest: Month view of all emails for pattern analysis'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Switching Between Views'
      },
      {
        type: 'paragraph',
        content: 'Quickly toggle between your different views:'
      },
      {
        type: 'list',
        content: [
          'Use View tab → Change View to access all your custom views',
          'Create keyboard shortcuts for frequently used views',
          'Pin your most-used views to Quick Access toolbar',
          'Right-click folder and select "Change View" for quick switching',
          'Each folder can remember its last-used view'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Combining with Categories'
      },
      {
        type: 'paragraph',
        content: 'Categories add powerful visual organization to timeline views:'
      },
      {
        type: 'list',
        content: [
          'Assign color categories to emails (e.g., Red for urgent, Blue for projects)',
          'Categories appear as colored bars in timeline view',
          'Filter timeline view by specific category',
          'Use Quick Steps to automatically categorize incoming emails',
          'Create category-based rules for automatic organization'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Troubleshooting Common Issues'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Timeline View Not Showing All Emails'
      },
      {
        type: 'list',
        content: [
          'Check if filters are too restrictive',
          'Verify date range settings in Filter dialog',
          'Ensure "Show items" is set to appropriate time period',
          'Clear all filters temporarily to see all emails',
          'Check if folder permissions allow viewing all items'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Performance Issues with Large Mailboxes'
      },
      {
        type: 'list',
        content: [
          'Apply date range filters to reduce data load',
          'Limit timeline view to specific folders rather than "All Mail"',
          'Archive old emails to separate PST files',
          'Enable Cached Exchange Mode for better performance',
          'Reduce number of displayed fields'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'View Not Available on Mobile or Web'
      },
      {
        type: 'paragraph',
        content: 'Custom timeline views are a desktop Outlook feature and may not sync to other platforms:'
      },
      {
        type: 'list',
        content: [
          'Timeline views only work in Outlook desktop application',
          'Outlook Web App (OWA) and mobile apps use different view systems',
          'Consider using search folders as alternative for mobile access',
          'Categories and flags sync across platforms for consistent organization',
          'Use Quick Steps to maintain workflow consistency'
        ]
      },
      {
        type: 'callout',
        calloutType: 'info',
        content: 'Custom views are stored locally on your computer. If you use multiple devices, you\'ll need to recreate views on each one.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exporting and Sharing View Settings'
      },
      {
        type: 'paragraph',
        content: 'While you cannot directly export custom views, you can document your settings to recreate them:'
      },
      {
        type: 'list',
        content: [
          'Screenshot or document your view configuration settings',
          'Create step-by-step guides for team members',
          'Use Group Policy to deploy standard views in enterprise environments',
          'Consider using PowerShell scripts for programmatic view creation',
          'Share filter criteria and field selections via documentation'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Best Practices'
      },
      {
        type: 'list',
        content: [
          'Start simple: Create basic timeline view first, then add complexity',
          'Name views descriptively so you remember their purpose',
          'Regularly review and clean up unused custom views',
          'Combine timeline views with categories for maximum effectiveness',
          'Use filters strategically to reduce information overload',
          'Document your view configurations for backup purposes',
          'Test views with different time scales to find optimal visualization',
          'Consider creating views for both short-term and long-term analysis'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Calendar-style timeline views in Outlook provide a powerful way to visualize and analyze your email communications from a temporal perspective. Whether you\'re tracking project timelines, monitoring client relationships, or analyzing communication patterns, custom timeline views help transform your inbox from a simple list into a strategic time-management tool.'
      },
      {
        type: 'paragraph',
        content: 'By mastering custom views, you can significantly improve your email management efficiency and gain valuable insights into your communication patterns. Start with a simple timeline view and gradually add filters and customizations as you discover what works best for your workflow.'
      },
      {
        type: 'callout',
        calloutType: 'success',
        content: 'Pro tip: Combine timeline views with Outlook rules, Quick Steps, and categories for a complete email management system that saves hours each week.'
      }
    ]
  }
];
