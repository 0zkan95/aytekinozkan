"use client";

import React from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Link component is not used directly in this card for now
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for links
import '../styles/ProjectDisplayCard.scss'; // Import the SCSS file

// Define the Project type based on your data structure in data/index.ts
interface Project {
  id: number;
  title: string;
  des: string;
  images: string[];
  iconLists: string[];
  githubLink?: string;
  visitLink?: string;
}

interface ProjectDisplayCardProps {
  project: Project;
}

const ProjectDisplayCard: React.FC<ProjectDisplayCardProps> = ({ project }) => {
  return (
    <div className="project-display-card">
      {project.images && project.images.length > 0 && (
        <div className="project-card-image-wrapper">
          <Image
            src={project.images[0]}
            alt={`Screenshot of ${project.title}`}
            width={500} // Adjust as needed
            height={300} // Adjust as needed
            className="project-card-image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.des}</p>
        
        {project.iconLists && project.iconLists.length > 0 && (
          <div className="project-card-tech-stack">
            <p className="tech-stack-label">Tech Stack:</p>
            <div className="tech-icons-list">
              {project.iconLists.map((icon, index) => (
                <img 
                  key={index} 
                  src={icon} 
                  alt={`Tech icon ${index + 1}`} 
                  className="tech-icon"
                  title={icon.substring(icon.lastIndexOf('/') + 1).replace('.svg', '')} // Basic title from filename
                />
              ))}
            </div>
          </div>
        )}

        <div className="project-card-links">
          {project.visitLink && (
            <a href={project.visitLink} target="_blank" rel="noopener noreferrer" className="project-link visit-link">
              <FaExternalLinkAlt /> Visit Site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplayCard;
