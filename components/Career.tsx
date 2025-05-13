"use client";
import '@/components/styles/Career.scss';
import React from "react";
import { certificates, tools } from "@/data";
import { InfiniteMovingCards } from './ui/InfiniteCards';


const Career = () => {
    return (
        <section id="career" className="career-sec">
            <h1 className="heading" data-aos="fade-down">
                My Journey to
                <span className="heading-span"> Front End Development </span>
            </h1>

            <div className="career-con">
                <div className="certificates" data-aos="fade-right" data-aos-delay="200">
                    <InfiniteMovingCards 
                        key={certificates.length} // Added key prop
                        items={certificates}
                        direction='right'
                        speed='slow'
                        />
                </div>

                <div className="tools-con" data-aos="fade-left" data-aos-delay="400">
                    {tools.map((tool) => (
                        <React.Fragment key={tool.id}>
                            <div className="img-con">
                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="img"
                                />
                                
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
