import React from 'react';
import type { EmployerInfo } from '../../../types/coverLetter';

interface EmployerInfoFormProps {
  data: EmployerInfo;
  onUpdate: (data: EmployerInfo) => void;
}

const EmployerInfoForm: React.FC<EmployerInfoFormProps> = ({ data, onUpdate }) => {
  const updateField = (field: keyof EmployerInfo, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
        <input
          type="text"
          value={data.companyName}
          onChange={(e) => updateField('companyName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Tech Innovations Inc."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Manager Name</label>
          <input
            type="text"
            value={data.hiringManagerName}
            onChange={(e) => updateField('hiringManagerName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Manager Title</label>
          <input
            type="text"
            value={data.hiringManagerTitle}
            onChange={(e) => updateField('hiringManagerTitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Hiring Manager"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company Address</label>
        <input
          type="text"
          value={data.companyAddress}
          onChange={(e) => updateField('companyAddress', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="456 Tech Avenue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City, State ZIP</label>
        <input
          type="text"
          value={data.companyCityStateZip}
          onChange={(e) => updateField('companyCityStateZip', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="San Francisco, CA 94103"
        />
      </div>
    </div>
  );
};

export default EmployerInfoForm;