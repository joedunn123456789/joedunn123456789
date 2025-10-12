// src/components/ProdcutPage/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  repoUrl: string;
  liveUrl?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, repoUrl, liveUrl, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex gap-4">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        GitHub Repo
      </a>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
