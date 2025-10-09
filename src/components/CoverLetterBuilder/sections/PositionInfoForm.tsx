import React from 'react';
import type { PositionInfo } from '../../../types/coverLetter';

interface PositionInfoFormProps {
  data: PositionInfo;
  onUpdate: (data: PositionInfo) => void;
}

const PositionInfoForm: React.FC<PositionInfoFormProps> = ({ data, onUpdate }) => {
  const updateField = (field: keyof PositionInfo, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
        <input
          type="text"
          value={data.jobTitle}
          onChange={(e) => updateField('jobTitle', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Senior Frontend Developer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Where did you find this job?</label>
        <input
          type="text"
          value={data.source}
          onChange={(e) => updateField('source', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="LinkedIn, Company Website, Referral, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Referred by (if applicable)</label>
        <input
          type="text"
          value={data.reference}
          onChange={(e) => updateField('reference', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Sarah Johnson, Senior Engineer"
        />
      </div>
    </div>
  );
};

export default PositionInfoForm;