// src/components/ResumeBuilder/sections/ExperienceForm.tsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { WorkExperience } from '../../../types/resume';

interface ExperienceFormProps {
  data: WorkExperience[];
  onUpdate: (data: WorkExperience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onUpdate }) => {
  const addExperience = (): void => {
    const newExperience: WorkExperience = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ['']
    };
    onUpdate([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any): void => {
    const updated = data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onUpdate(updated);
  };

  const removeExperience = (id: string): void => {
    onUpdate(data.filter(exp => exp.id !== id));
  };

  const addDescription = (id: string): void => {
    const updated = data.map(exp =>
      exp.id === id ? { ...exp, description: [...exp.description, ''] } : exp
    );
    onUpdate(updated);
  };

  const updateDescription = (id: string, index: number, value: string): void => {
    const updated = data.map(exp => {
      if (exp.id === id) {
        const newDescription = [...exp.description];
        newDescription[index] = value;
        return { ...exp, description: newDescription };
      }
      return exp;
    });
    onUpdate(updated);
  };

  const removeDescription = (id: string, index: number): void => {
    const updated = data.map(exp => {
      if (exp.id === id) {
        const newDescription = exp.description.filter((_, i) => i !== index);
        return { ...exp, description: newDescription };
      }
      return exp;
    });
    onUpdate(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
        <button 
          onClick={addExperience}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
          type="button"
        >
          <span>+</span>
          Add Experience
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No work experience added yet.</p>
          <button 
            onClick={addExperience}
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            type="button"
          >
            Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((exp, index) => (
            <div key={exp.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-800">Experience #{index + 1}</h4>
                <button 
                  onClick={() => removeExperience(exp.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors duration-200"
                  type="button"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Current Position</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities & Achievements</label>
                <div className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex gap-2">
                      <input
                        type="text"
                        value={desc}
                        onChange={(e) => updateDescription(exp.id, descIndex, e.target.value)}
                        placeholder="Describe your responsibilities and achievements..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {descIndex > 0 && (
                        <button
                          onClick={() => removeDescription(exp.id, descIndex)}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                          type="button"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => addDescription(exp.id)}
                  className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                  type="button"
                >
                  <span>+</span>
                  Add Responsibility
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;