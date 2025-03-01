"use client"
import React from 'react';
import './styles/Hero.scss';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './MagicButton';
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import { socialMedia } from "@/data";


const Hero = () => {
    return (
        <div className='container'>
            <div className='spotlights'>
                <Spotlight fill='blue' className='spotlight-1' />
                <Spotlight fill='white' className='spotlight-2' />
                <Spotlight fill='purple' className='spotlight-3' />
            </div>

            <div className="grid-container">

                <div className="grid-overlay" />

            </div>

            <div className="content">
                <div className="inner-content">
                    <p className="first-text">
                        Dynamic Web Magic with Next.js
                    </p>

                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="TextGenerateEffect"
                    />

                    <p className="second-text">
                        Hi! I&apos;m Aytekin, a Juniur Front-End Developer based in Turkey.
                    </p>

                    <Link href="#projects">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </Link>

                    <div className="social-medias">
                        {socialMedia.map((info) => (
                            <div
                                key={info.id}
                                className="social-item"
                            >
                                <a href={info.link}>
                                    <img
                                        src={info.img}
                                        alt="icons"
                                        width={20}
                                        height={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Hero
