"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import '../styles/FloatingNavbar.scss';
// import ThemeToggleButton from "./ThemeToggleButton"; // Removed import

export const FloatingNav = ({
    navItems,
    className
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious() ?? 0;
            const direction = current - previous;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.ul // Corrected: comment removed from here
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2
                }}
                className={`motion-div ${className || ''}`} // This class will now apply to ul
            >
                {navItems.map((item, idx: number) => (
                    <li key={`nav-item-${idx}`} className="nav-item"> {/* Added li wrapper */}
                        <Link
                            href={item.link}
                            className="link"
                        >
                            <span className="icon">{item.icon}</span>
                            <span className="name">{item.name}</span>
                        </Link>
                    </li>
                ))}
                {/* <ThemeToggleButton /> Removed the toggle button instance */}
            </motion.ul>
        </AnimatePresence>
    );
};
