"use client"

import { certificates } from '@/data';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './career.scss';

export default function CareerPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="career-container">
            <h1 
                data-aos="fade-down"
                data-aos-duration="1000"
                className="career-title"
            >
                My Certificates
            </h1>
            <div className="certificates-grid">
                {certificates.map((certificate, index) => (
                    <Link 
                        href={`/career/${certificate.id}`} 
                        key={certificate.id}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={index * 100}
                        className="certificate-card"
                    >
                        <h2 className="certificate-name">{certificate.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
} 