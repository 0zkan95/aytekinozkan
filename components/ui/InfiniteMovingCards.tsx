"use client";

import Link from 'next/link';
import '../styles/InfiniteCards.scss';
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
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
    }, []); // Runs only on mount

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            // Clear previous duplications if any, to handle potential re-renders if items change
            // This is a simplified clear, assumes direct children are only the mapped items + duplicates
            const originalItemCount = items.length;
            while (scrollerRef.current.children.length > originalItemCount && scrollerRef.current.children.length > 0) {
                 // Only remove if we have more children than original items (i.e. duplicates exist)
                if (scrollerRef.current.children.length > items.length) {
                    scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
                } else {
                    break; // Should not happen if logic is correct, but as a safeguard
                }
            }
            
            const scrollerContent = Array.from(scrollerRef.current.children);
            // Ensure we only duplicate if we have the original items
            if (scrollerContent.length === originalItemCount) {
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });
            }

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
                    <li key={`card-${item.id}-${idx}`} className="scroller-item">
                        <Link href={`/career/${item.id}`} data-test-id="career-link-v3"> {/* Added data-test-id */}
                            <div className="certi-con">
                                <div className="name-div">
                                    <span className="name">{item.name}</span>
                                </div>
                                <div className="img-con">
                                    <Image 
                                        src={item.img} 
                                        alt={item.name} 
                                        width={500} 
                                        height={260} 
                                        priority 
                                    />
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
