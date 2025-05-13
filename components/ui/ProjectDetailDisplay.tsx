"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectDetailDisplay.scss'; // Import the SCSS file

// Re-define Project type or import from a shared types file if available
interface Project {
  id: number;
  title: string;
  des: string;
  images: string[];
  iconLists: string[];
  githubLink?: string;
  visitLink?: string;
}

interface ProjectDetailDisplayProps {
  project: Project | null;
}

const ProjectDetailDisplay: React.FC<ProjectDetailDisplayProps> = ({ project }) => {
  const [currentBigImage, setCurrentBigImage] = useState<string | null>(null);

  useEffect(() => {
    // Set the first image as the big image when the project changes or on initial load
    if (project && project.images && project.images.length > 0) {
      setCurrentBigImage(project.images[0]);
    } else {
      setCurrentBigImage(null); // Reset if no project or no images
    }
  }, [project]); // Re-run when project prop changes

  if (!project) {
    return <div className="project-detail-placeholder"><p>Select a project from the list to view its details.</p></div>;
  }

  return (
    <div className="project-detail-display">
      <h2 className="project-detail-title">
        {project.title}
      </h2>
      
      <div className="project-detail-big-image-wrapper">
        {currentBigImage && (
          <Image 
            src={currentBigImage} 
            alt={`Main view of ${project.title}`} 
            width={700} // Example size, adjust with CSS
            height={450} // Example size, adjust with CSS
            className="project-detail-big-image"
            style={{ objectFit: 'contain', borderRadius: '8px' }} 
            priority // Prioritize loading for the main image of the selected project
          />
        )}
      </div>

      {project.images && project.images.length > 1 && (
        <div className="project-detail-thumbnails">
          {project.images.map((imgSrc, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentBigImage(imgSrc)} 
              className={`thumbnail-button ${currentBigImage === imgSrc ? 'active' : ''}`}
              aria-label={`View image ${index + 1} for ${project.title}`}
            >
              <Image 
                src={imgSrc} 
                alt={`Thumbnail ${index + 1} for ${project.title}`} 
                width={100} // Example size
                height={60}  // Example size
                className="thumbnail-image"
                style={{ objectFit: 'cover', borderRadius: '4px' }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Moved Tech Stack and Links above Description */}
      {project.iconLists && project.iconLists.length > 0 && (
        <div className="project-detail-tech-stack">
          <h4 className="tech-stack-detail-label">Technologies Used:</h4>
          <div className="tech-icons-list-detail">
            {project.iconLists.map((icon, index) => (
              <img 
                key={index} 
                src={icon} 
                alt="" // Decorative, tech name can be conveyed by title if needed
                className="tech-icon-detail"
                title={icon.substring(icon.lastIndexOf('/') + 1).replace('.svg', '').replace('_icon', '').replace('-logo','')}
              />
            ))}
          </div>
        </div>
      )}

      <div className="project-detail-links">
        {project.visitLink && (
          <a href={project.visitLink} target="_blank" rel="noopener noreferrer" className="project-detail-link visit-link">
            <FaExternalLinkAlt /> Visit Site
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-detail-link github-link">
            <FaGithub /> View on GitHub
          </a>
        )}
      </div>

      <p className="project-detail-description">
        {project.des}
      </p> {/* Description moved to the bottom */}
    </div>
  );
};

export default ProjectDetailDisplay;
