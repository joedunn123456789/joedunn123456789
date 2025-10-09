import React from 'react';

interface AchievementsFormProps {
  data: string[];
  onUpdate: (data: string[]) => void;
}

const AchievementsForm: React.FC<AchievementsFormProps> = ({ data, onUpdate }) => {
  const addAchievement = (): void => {
    onUpdate([...data, '']);
  };

  const updateAchievement = (index: number, value: string): void => {
    const updated = [...data];
    updated[index] = value;
    onUpdate(updated);
  };

  const removeAchievement = (index: number): void => {
    onUpdate(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Key Achievements</h3>
        <button 
          onClick={addAchievement}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
          type="button"
        >
          <span>+</span>
          Add Achievement
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No achievements added yet.</p>
          <button 
            onClick={addAchievement}
            className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
            type="button"
          >
            Add Your First Achievement
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((achievement, index) => (
            <div key={index} className="flex gap-2">
              <textarea
                value={achievement}
                onChange={(e) => updateAchievement(index, e.target.value)}
                rows={2}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
                placeholder="Increased sales by 30% through targeted marketing campaigns..."
              />
              <button
                onClick={() => removeAchievement(index)}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 self-start"
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

export default AchievementsForm;