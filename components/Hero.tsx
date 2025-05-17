"use client"
import React from 'react';
import './styles/Hero.scss';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './MagicButton';
import { FaLocationArrow, FaGithub, FaSquareXTwitter, FaLinkedinIn } from "react-icons/fa6"; // Added social icons
import Link from 'next/link';
import { socialMedia } from "@/data";


const Hero = () => {
    const renderSocialIcon = (id: number) => {
        switch (id) {
            case 1: // GitHub
                return <FaGithub size="1.25rem" />; // 20px
            case 2: // Twitter/X
                return <FaSquareXTwitter size="1.25rem" />;
            case 3: // LinkedIn
                return <FaLinkedinIn size="1.25rem" />;
            default:
                return null;
        }
    };
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
                    <p className="first-text" data-aos="fade-down">
                        Dynamic Web Magic with Next.js
                    </p>

                    <div data-aos="fade-right" data-aos-delay="200">
                        <TextGenerateEffect
                            words="Transforming Concepts into Seamless User Experiences"
                            className="TextGenerateEffect"
                        />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="400">
                        <TextGenerateEffect
                            words="Hi! I'm Aytekin, a Full Stack Developer based in Ankara,Turkey."
                            className="second-text"
                        />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="600">
                        <Link href="#projects">
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </Link>
                    </div>

                    <ul className="social-medias" data-aos="fade-up" data-aos-delay="800"> {/* Changed div to ul */}
                        {socialMedia.map((info) => (
                            <li key={info.id} className="social-item"> {/* Changed div to li */}
                                <a href={info.link} aria-label={`Social media link ${info.id}`}>
                                    {renderSocialIcon(info.id)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Hero
