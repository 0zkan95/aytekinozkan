
"use client"
import React from 'react'
import { projects } from '@/data';
import { Button } from "./ui/MovingBorder";
import Image from 'next/image';
import '../components/styles/Projects.scss';


const Projects = () => {
    return (
        <section id='projects' className='projects-container'>
            <h1 className='projects-heading'>
                A small selection of {" "}
                <span>recent projects</span>
            </h1>
            <div className='proj-cards'>
                {projects.map((card) => (
                    <Button
                        className='proj-cards-button'
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        key={card.id}
                        style={{
                            borderRadius: "1.75rem",
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        }}
                    >
                        <a href={card.link}>
                        <div className='button-con'>
                            <Image
                                className='button-img'
                                src={card.img}
                                alt={card.title}
                                width={300}
                                height={200}
                            />
                            <div className='button-info'>
                                <h1 className='button-info-title'>
                                    {card.title}
                                </h1>
                                <p className='button-info-desc'>
                                    {card.des}
                                </p>
                            </div>
                        </div>
                        </a>
                    </Button>
                ))}
            </div>
        </section>
    )
}

export default Projects
