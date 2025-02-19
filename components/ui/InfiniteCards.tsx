"use client";



import Link from 'next/link';
import '../styles/InfiniteCards.scss';
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
}: {
    items: {
        id: number;
        name: string;
        img: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div ref={containerRef} className="scroller">
            <ul ref={scrollerRef}>
                {items.map((item, idx) => (
                    <Link href={`/dynamic/${item.id}`} className="scroller-item" key={idx}>
                        
                            <div className="certi-con">
                            <div className="name-div">
                                    <span className="name">{item.name}</span>
                                </div>
                                <div className="img-con">
                                    <Image src={item.img} alt={item.name} width={700} height={460} priority />
                                </div>
                                
                            </div>
                        
                    </Link>
                ))}
            </ul>
        </div>
    );
};
