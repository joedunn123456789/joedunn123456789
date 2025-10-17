import React from 'react';

interface SkillsFormProps {
  data: string[];
  onUpdate: (data: string[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onUpdate }) => {
  const addSkill = (): void => {
    onUpdate([...data, '']);
  };

  const updateSkill = (index: number, value: string): void => {
    const updated = [...data];
    updated[index] = value;
    onUpdate(updated);
  };

  const removeSkill = (index: number): void => {
    onUpdate(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Skills to Highlight</h3>
        <button 
          onClick={addSkill}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
          type="button"
        >
          <span>+</span>
          Add Skill
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No skills added yet.</p>
          <button 
            onClick={addSkill}
            className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
            type="button"
          >
            Add Your First Skill
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="React, TypeScript, Project Management, etc."
              />
              <button
                onClick={() => removeSkill(index)}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                type="button"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsForm;