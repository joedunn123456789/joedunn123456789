// src/components/ResumeBuilder/sections/SkillsForm.tsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Skill } from '../../../types/resume';

interface SkillsFormProps {
  data: Skill[];
  onUpdate: (data: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onUpdate }) => {
  const addSkill = (): void => {
    const newSkill: Skill = {
      id: uuidv4(),
      name: '',
      category: 'Technical',
      level: 3
    };
    onUpdate([...data, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: any): void => {
    const updated = data.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    onUpdate(updated);
  };

  const removeSkill = (id: string): void => {
    onUpdate(data.filter(skill => skill.id !== id));
  };

  const categories = ['Technical', 'Soft Skills', 'Tools', 'Languages', 'Other'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
        <button 
          onClick={addSkill}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
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
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            type="button"
          >
            Add Your First Skill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((skill, index) => (
            <div key={skill.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-800">Skill #{index + 1}</h4>
                <button 
                  onClick={() => removeSkill(skill.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors duration-200"
                  type="button"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name *</label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="JavaScript, React, Communication, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={skill.category}
                    onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proficiency Level: {skill.level}/5
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(level => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => updateSkill(skill.id, 'level', level)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        level <= skill.level
                          ? 'bg-blue-500 border-blue-600 text-white scale-110'
                          : 'bg-gray-200 border-gray-300 text-gray-400 hover:bg-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsForm;