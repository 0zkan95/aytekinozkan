"use client";
import Image from 'next/image';
import './styles/Grid.scss';
import Lottie from 'lottie-react';
import animationData from "@/data/confetti.json";
import MagicButton from './MagicButton';
import { IoCopyOutline } from "react-icons/io5";
import { useState } from 'react';
import first from '../public/b1.svg';
import gridsvg from '../public/grid.svg';
import fourth1 from '../public/b4.svg';
import fifth from '../public/b5.svg';
import fGlobe from '../public/flexy-globe.jpg'; // Restore static image import
// import InteractiveGlobe from './ui/InteractiveGlobe'; // Remove globe component import


const Grid = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "aytekin7ozkan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  const leftLists = ["ReactJS", "Next.JS", "Typescript"];
  const rightLists = ["HTML", "CSS", "JavaScript"];

  

  return (
    <section id="about">
      <div className="bento-grid-con">
        <div className='cell first-cell' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom">
          <div className='img-div'>
            <Image
              id='first-img'
              src={first}
              alt="" // Decorative
              priority
            />
          </div>
          <div className='content'>
            <h3>I prioritize client collaboration, fostering open communication </h3>
          </div>

        </div>
        <div className='cell second-cell' 
          data-aos="flip-left" 
          data-aos-duration="1200"
          data-aos-delay="200">
          <div className='img-div'>
            <Image
              src={fGlobe}
              alt='flexy globe'
              priority
            />
          </div>
          <div className='content'>
            <h3>I'm very flexible with time zone communications </h3>
          </div>

        </div>
        <div className='cell third-cell' 
          data-aos="zoom-in" 
          data-aos-duration="1500"
          data-aos-delay="300">
          <div className='third-content'>
            <p>I constantly try to <br />improve</p>

            <h3>My tech stack </h3>
          </div>
          <div className='list-con'>
            <ul className='left-list-con'> {/* Changed div to ul */}
              {leftLists.map((item, i) => (
                <li key={i} className='tech-item'> {/* Changed span to li, id to className */}
                  {item}
                </li>
              ))}
              <li className='tech-item-placeholder'></li> {/* Changed span to li, id to className */}
            </ul>
            <ul className='right-list-con'> {/* Changed div to ul */}
              <li className='tech-item-placeholder'></li> {/* Changed span to li, id to className */}
              {rightLists.map((item, i) => (
                <li key={i} className='tech-item'> {/* Changed span to li, id to className */}
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className='cell fourth-cell' 
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-delay="400">
          <div className='content'>
            <h3>Tech enthusiast with a passion for development. </h3>
          </div>
          <Image
            id='fourth-grid'
            src={gridsvg}
            alt="" // Decorative
            fill
          />
          <Image
            id='fourth-img'
            src={fourth1}
            alt="" // Decorative
          />
        </div>

        <div className='cell fifth-cell' 
          data-aos="fade-left" 
          data-aos-duration="1200"
          data-aos-delay="500">
          <div className='content'>
            <p>The Inside Scoop</p>
            <h3>Currently building a JS Animation library</h3>

          </div>
          <Image
            id='fifth-img'
            src={fifth}
            alt="" // Decorative
          />
          <Image
            id='fifth-grid'
            src={gridsvg}
            alt="" // Decorative
            fill
          />


        </div>
        <div className='cell sixth-cell' 
          data-aos="zoom-out" 
          data-aos-duration="1500"
          data-aos-delay="600">
          <div className='bg-animation'>

            <div className='lottie-div'>
              <Lottie 
                loop={copied}
                autoplay={copied}
                animationData={animationData}
                style={{
                  height: 200,
                  width: 400
                }}   
              />
            </div>
            <h3>Do you want to start a project together? </h3>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
