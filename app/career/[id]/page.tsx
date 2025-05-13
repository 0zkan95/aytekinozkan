"use client"

import { certificates } from '@/data';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface PageProps {
    params: { id: string };
}

export default function DynamicPage({ params }: PageProps) {
    const item = certificates.find((item) => item.id.toString() === params.id);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    if (!item) {
        return <div>Certificate not found!</div>
    }

    return (
        <div className="certificate-detail-container">
            <h1 
                data-aos="fade-down"
                data-aos-duration="1000"
                className="certificate-title"
            >
                {item.name}
            </h1>
            <div 
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="certificate-image-container"
            >
                <Image 
                    src={item.img} 
                    alt={item.name} 
                    priority 
                    width={780} 
                    height={460}
                    className="certificate-image"
                />
            </div>
        </div>
    )
}
