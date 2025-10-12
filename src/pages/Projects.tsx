// src/pages/Projects.tsx
import React from "react";
import ProjectCard from "../components/ProductPage/ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
