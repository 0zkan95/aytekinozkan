"use client";

import React, { useState, useEffect } from 'react';
import { projects } from '@/data'; 
import ProjectDetailDisplay from '@/components/ui/ProjectDetailDisplay'; // Import the new detail display component
import Link from 'next/link'; 
import { IoHome } from 'react-icons/io5';
import './projects.scss'; 

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects.length > 0 ? projects[0] : null);

  // Handle case where projects might be empty initially or id doesn't match
  useEffect(() => {
    if (!selectedProject && projects.length > 0) {
      setSelectedProject(projects[0]);
    }
  }, [projects, selectedProject]);

  if (!projects || projects.length === 0) {
    return (
      <main className="projects-page-container">
        <div className="projects-page-header">
          <Link href="/" className="home-link-projects-page" aria-label="Go to homepage">
            <IoHome size={28} />
          </Link>
          <h1 className="projects-page-title">Small Selection of My Projects</h1>
        </div>
        <p>No projects to display at the moment.</p>
      </main>
    );
  }

  return (
    <main className="projects-page-container">
      <div className="projects-page-header">
        <Link href="/" className="home-link-projects-page" aria-label="Go to homepage">
          <IoHome size={28} />
        </Link>
        <h1 className="projects-page-title">
          Small Selection <span className="projects-title-highlight">of My Projects</span>
        </h1>
      </div>

      <div className="projects-layout-wrapper"> 
        <aside className="projects-sidebar">
          <ul>
            {projects.map((project) => (
              <li 
                key={project.id} 
                className={selectedProject?.id === project.id ? 'active' : ''}
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </aside>
        <section className="project-detail-content-area">
          {selectedProject ? (
            <ProjectDetailDisplay project={selectedProject} />
          ) : (
            <p>Select a project from the list to view its details.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
