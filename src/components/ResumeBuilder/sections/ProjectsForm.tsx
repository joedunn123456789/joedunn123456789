// src/components/ResumeBuilder/sections/ProjectsForm.tsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Project } from '../../../types/resume';

interface ProjectsFormProps {
  data: Project[];
  onUpdate: (data: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ data, onUpdate }) => {
  const addProject = (): void => {
    const newProject: Project = {
      id: uuidv4(),
      name: '',
      description: '',
      technologies: [],
      url: ''
    };
    onUpdate([...data, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: any): void => {
    const updated = data.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    );
    onUpdate(updated);
  };

  const removeProject = (id: string): void => {
    onUpdate(data.filter(project => project.id !== id));
  };

  const addTechnology = (id: string): void => {
    const project = data.find(p => p.id === id);
    if (project) {
      const updatedTech = [...project.technologies, ''];
      updateProject(id, 'technologies', updatedTech);
    }
  };

  const updateTechnology = (id: string, index: number, value: string): void => {
    const project = data.find(p => p.id === id);
    if (project) {
      const updatedTech = [...project.technologies];
      updatedTech[index] = value;
      updateProject(id, 'technologies', updatedTech);
    }
  };

  const removeTechnology = (id: string, index: number): void => {
    const project = data.find(p => p.id === id);
    if (project) {
      const updatedTech = project.technologies.filter((_, i) => i !== index);
      updateProject(id, 'technologies', updatedTech);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
        <button 
          onClick={addProject}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
          type="button"
        >
          <span>+</span>
          Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No projects added yet.</p>
          <button 
            onClick={addProject}
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            type="button"
          >
            Add Your First Project
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-800">Project #{index + 1}</h4>
                <button 
                  onClick={() => removeProject(project.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors duration-200"
                  type="button"
                >
                  Remove
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Name *</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="My Awesome Project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                    placeholder="Describe the project, your role, and key achievements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project URL</label>
                  <input
                    type="url"
                    value={project.url}
                    onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://github.com/username/project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
                  <div className="space-y-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={tech}
                          onChange={(e) => updateTechnology(project.id, techIndex, e.target.value)}
                          placeholder="Technology or tool used..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => removeTechnology(project.id, techIndex)}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => addTechnology(project.id)}
                    className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                    type="button"
                  >
                    <span>+</span>
                    Add Technology
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;