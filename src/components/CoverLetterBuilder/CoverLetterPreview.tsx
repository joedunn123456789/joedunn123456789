// src/components/CoverLetterBuilder/CoverLetterPreview.tsx
import React from 'react';
import type { CoverLetterData } from '../../types/coverLetter';

interface CoverLetterPreviewProps {
  data: CoverLetterData;
}

const CoverLetterPreview: React.FC<CoverLetterPreviewProps> = ({ data }) => {
  const { contactInfo, employerInfo, positionInfo, content, skills, achievements } = data;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div id="cover-letter-preview" className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto">
      {/* Sender's Contact Info */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{contactInfo.yourName}</h1>
        <div className="text-gray-600 space-y-1 text-sm">
          <p>{contactInfo.yourAddress}</p>
          <p>{contactInfo.yourCityStateZip}</p>
          <p>{contactInfo.yourEmail} | {contactInfo.yourPhone}</p>
          {contactInfo.yourLinkedIn && <p>LinkedIn: {contactInfo.yourLinkedIn}</p>}
          {contactInfo.yourPortfolio && <p>Portfolio: {contactInfo.yourPortfolio}</p>}
        </div>
      </div>

      {/* Date */}
      <div className="mb-8">
        <p className="text-gray-600">{currentDate}</p>
      </div>

      {/* Employer's Contact Info */}
      <div className="mb-8">
        <p className="text-gray-600">
          {employerInfo.hiringManagerName && `${employerInfo.hiringManagerName}<br />`}
          {employerInfo.hiringManagerTitle && `${employerInfo.hiringManagerTitle}<br />`}
          {employerInfo.companyName}<br />
          {employerInfo.companyAddress}<br />
          {employerInfo.companyCityStateZip}
        </p>
      </div>

      {/* Salutation */}
      <div className="mb-6">
        <p className="text-gray-600">
          Dear {employerInfo.hiringManagerName || 'Hiring Manager'},
        </p>
      </div>

      {/* Introduction */}
      {content.introduction && (
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">{content.introduction}</p>
        </div>
      )}

      {/* Body */}
      {content.body && (
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">{content.body}</p>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            My qualifications include expertise in {skills.join(', ')}.
          </p>
        </div>
      )}

      {/* Achievements Section */}
      {achievements.length > 0 && (
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            Some of my key achievements include:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Conclusion */}
      {content.conclusion && (
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{content.conclusion}</p>
        </div>
      )}

      {/* Closing */}
      <div className="mb-16">
        <p className="text-gray-700 mb-4">Sincerely,</p>
        <p className="text-gray-700 font-semibold">{content.signature || contactInfo.yourName}</p>
      </div>

      {/* Position Reference */}
      {positionInfo.jobTitle && (
        <div className="text-sm text-gray-500 border-t pt-4">
          <p>Re: {positionInfo.jobTitle} position{positionInfo.source && ` - Found on ${positionInfo.source}`}</p>
          {positionInfo.reference && <p>Referred by: {positionInfo.reference}</p>}
        </div>
      )}
    </div>
  );
};

export default CoverLetterPreview;