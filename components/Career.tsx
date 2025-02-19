"use client";
import '@/components/styles/Career.scss';
import React from "react";
import { certificates, tools } from "@/data";
import { InfiniteMovingCards } from './ui/InfiniteCards';


const Career = () => {
    return (
        <section id="career" className="career-sec">
            <h1 className="heading">
                A Journey For
                <span className="heading-span"> Front End Development </span>
            </h1>

            <div className="career-con">
                <div className="certificates">
                    <InfiniteMovingCards 
                        items={certificates}
                        direction='right'
                        speed='slow'
                        />
                </div>

                <div className="tools-con">
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
