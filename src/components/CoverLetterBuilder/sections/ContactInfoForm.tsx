import React from 'react';
import type { ContactInfo } from '../../../types/coverLetter';

interface ContactInfoFormProps {
  data: ContactInfo;
  onUpdate: (data: ContactInfo) => void;
}

const ContactInfoForm: React.FC<ContactInfoFormProps> = ({ data, onUpdate }) => {
  const updateField = (field: keyof ContactInfo, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
        <input
          type="text"
          value={data.yourName}
          onChange={(e) => updateField('yourName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={data.yourAddress}
          onChange={(e) => updateField('yourAddress', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="123 Main Street"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City, State ZIP</label>
        <input
          type="text"
          value={data.yourCityStateZip}
          onChange={(e) => updateField('yourCityStateZip', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="San Francisco, CA 94102"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            value={data.yourEmail}
            onChange={(e) => updateField('yourEmail', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="john.doe@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={data.yourPhone}
            onChange={(e) => updateField('yourPhone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
          <input
            type="url"
            value={data.yourLinkedIn}
            onChange={(e) => updateField('yourLinkedIn', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="linkedin.com/in/username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio</label>
          <input
            type="url"
            value={data.yourPortfolio}
            onChange={(e) => updateField('yourPortfolio', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="yourportfolio.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;