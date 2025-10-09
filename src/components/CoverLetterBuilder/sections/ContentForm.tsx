import React from 'react';
import type { LetterContent } from '../../../types/coverLetter';

interface ContentFormProps {
  data: LetterContent;
  onUpdate: (data: LetterContent) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ data, onUpdate }) => {
  const updateField = (field: keyof LetterContent, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
        <textarea
          value={data.introduction}
          onChange={(e) => updateField('introduction', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
          placeholder="Express your interest and mention the position you're applying for..."
        />
        <p className="text-sm text-gray-500 mt-1">Start strong - mention the position and why you're excited about it.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Body</label>
        <textarea
          value={data.body}
          onChange={(e) => updateField('body', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
          placeholder="Discuss your qualifications, experience, and why you're a good fit..."
        />
        <p className="text-sm text-gray-500 mt-1">Highlight your relevant experience and connect it to the company's needs.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Conclusion</label>
        <textarea
          value={data.conclusion}
          onChange={(e) => updateField('conclusion', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
          placeholder="Reiterate your interest and include a call to action..."
        />
        <p className="text-sm text-gray-500 mt-1">End with enthusiasm and mention your availability for an interview.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Signature</label>
        <input
          type="text"
          value={data.signature}
          onChange={(e) => updateField('signature', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Sincerely, Your Name"
        />
      </div>
    </div>
  );
};

export default ContentForm;