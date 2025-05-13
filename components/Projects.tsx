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
            <h1 className='projects-heading' data-aos="fade-down">
                A small selection of {" "}
                <span>recent projects</span>
            </h1>
            
            <div className="proj-cards">
                {displayedProjects.map((project, index) => (
                    <div key={project.id} data-aos="zoom-in-up" data-aos-delay={index * 150}>
                        <Button
                            className='proj-cards-button'
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            style={{
                                borderRadius: "1.75rem",
                                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                width: "100%"
                            }}
                        >
                            <a 
                                href={project.visitLink || project.githubLink || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View project: ${project.title}`}
                            >
                                <div className="button-con">
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
                                        <h1 className='button-info-title-class'>
                                            {project.title}
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        </Button>
                    </div>
                ))}
            </div>

            {projects.length > displayedProjects.length && (
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }} data-aos="fade-up" data-aos-delay="300">
                    <Link href="/projects" passHref legacyBehavior>
                        <a>
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
    );
};

export default Projects;
