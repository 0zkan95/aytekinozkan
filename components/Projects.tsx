"use client"
import React from 'react';
import { projects } from '@/data';
import { Button } from "./ui/MovingBorder"; // Using MovingBorder.Button for project cards
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link
import MagicButton from './MagicButton'; // Import MagicButton
import { FaArrowRight } from 'react-icons/fa6'; // Example icon for the button
import '@/components/styles/Projects.scss';

const Projects = () => {
    const displayedProjects = projects.slice(0, 4); // Show only the first 4 projects

    return (
        <section id='projects' className='projects-container'>
            <h1 className='projects-heading'>
                A small selection of {" "}
                <span>recent projects</span>
            </h1>
            <div className='proj-cards'>
                {displayedProjects.map((project) => ( // Map over displayedProjects
                    <Button
                        className='proj-cards-button'
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        key={project.id}
                        style={{
                            borderRadius: "1.75rem",
                            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        }}
                    >
                        <a 
                            href={project.visitLink || project.githubLink || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View project: ${project.title}`}
                        >
                            <div className='button-con'>
                                {project.images && project.images.length > 0 && (
                                    <Image
                                        className='button-img'
                                        src={project.images[0]}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                                <div className='button-info'>
                                    <h1 id={`project-title-${project.id}`} className='button-info-title-class'>
                                        {project.title}
                                    </h1>
                                    {/* Description <p> tag removed */}
                                </div>
                            </div>
                        </a>
                    </Button>
                ))}
            </div>
            {projects.length > displayedProjects.length && (
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}> {/* Increased margin slightly */}
                    <Link href="/projects" passHref legacyBehavior>
                        <a> {/* MagicButton will be the content of this link */}
                            <MagicButton
                                title="View All Projects"
                                icon={<FaArrowRight />}
                                position="right"
                            />
                        </a>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default Projects;
