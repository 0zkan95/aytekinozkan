"use client"
import React from 'react';
import { certificates } from '@/data';
import Link from 'next/link';
import '@/components/styles/Layout.scss';
import { IoHome } from 'react-icons/io5';
import { MovingBorder } from '@/components/ui/MovingBorder'; // Import MovingBorder

const Layout = ({ children }: { children: React.ReactNode }) => { // Changed children type
    return (
        <div className='container'>
            <div className='heading-div'>
                <Link href="/" aria-label="Go to homepage">
                    <IoHome className='btn-home' size={30} />
                </Link>
                <h1 className="heading">
                    My Journey to
                    <span className="heading-span"> Front End Development </span>
                </h1>
            </div>

            <div className='main-con'>
                {/* Sidebar with Moving Border */}
                <div className='side-menu'> {/* This will be the container for border + content */}
                    <div className="moving-border-container-style"> {/* Mimics .moving-button__border-container */}
                        <MovingBorder duration={12000} rx="20px" ry="20px">
                            <div className="career-page-moving-blob" />
                        </MovingBorder>
                    </div>
                    <div className="side-menu-content"> {/* Actual content wrapper */}
                        <ul className='side-list'>
                            {certificates.map((item) => (
                                <li key={`cert-link-${item.id}`}>
                                    <Link href={`/career/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content Area with Moving Border */}
                <div className='certi-con'> {/* This will be the container for border + content */}
                    <div className="moving-border-container-style"> {/* Mimics .moving-button__border-container */}
                        <MovingBorder duration={15000} rx="20px" ry="20px">
                            <div className="career-page-moving-blob" />
                        </MovingBorder>
                    </div>
                    <div className="certi-con-content"> {/* Actual content wrapper */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout;
