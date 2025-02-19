

"use client"
import Layout from '@/components/Layout';
import { certificates } from '@/data';
import Image from 'next/image';

interface PageProps {
    params: { id: string };
}



export default function DynamicPage({ params }: PageProps) {
    const item = certificates.find((item) => item.id.toString() === params.id);

    if (!item) {
        return <div>Certificate not found!</div>
    }


    return (
        <Layout>
            <h1>{item.name}</h1>
            <Image src={item.img} alt={item.name} priority width={780} height={460} />
        </Layout>
    )
}

