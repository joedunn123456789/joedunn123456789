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
  }
];
