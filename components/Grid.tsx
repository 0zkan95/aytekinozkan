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
import fGlobe from '../public/flexy-globe.jpg';



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
        <div className='cell first-cell'>
          <div className='img-div'>
            <Image
              id='first-img'
              src={first}
              alt='img'
              priority
            />
          </div>
          <div className='content'>
            <h3>I prioritize client collaboration, fostering open communication </h3>
          </div>

        </div>
        <div className='cell second-cell'>
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
        <div className='cell third-cell'>
          <div className='third-content'>
            <p>I constantly try to <br />improve</p>

            <h3>My tech stack </h3>
          </div>
          <div className='list-con'>
            <div className='left-list-con'>
              {leftLists.map((item, i) => (
                <span key={i} id='left-span1'>
                  {item}
                </span>
              ))}
              <span id='left-span2'></span>
            </div>
            <div className='right-list-con'>
              <span id='right-span1'></span>
              {rightLists.map((item, i) => (
                <span key={i} id='right-span2'>
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
        <div className='cell fourth-cell'>
          <div className='content'>
            <h3>Tech enthusiast with a passion for development. </h3>
          </div>
          <Image
            id='fourth-grid'
            src={gridsvg}
            alt='img'
            fill
          />
          <Image
            id='fourth-img'
            src={fourth1}
            alt='img'
          />
        </div>

        <div className='cell fifth-cell'>
          <div className='content'>
            <p>The Inside Scoop</p>
            <h3>Currently building a JS Animation library</h3>

          </div>
          <Image
            id='fifth-img'
            src={fifth}
            alt='img'
          />
          <Image
            id='fifth-grid'
            src={gridsvg}
            alt='img'
            fill
          />


        </div>
        <div className='cell sixth-cell'>
          <div className='bg-animation'>

            <div className='lottie-div'>
              <Lottie 
                loop= {copied}
                autoplay= {copied}
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
