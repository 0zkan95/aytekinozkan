import React from 'react'
import { certificates } from '@/data'
import Link from 'next/link'
import './/styles/Layout.scss';
import { IoHome } from 'react-icons/io5';

const Layout = ({ children }: { children: any }) => {
    return (
        <div className='container'>
            <div className='heading-div'>
                <Link href="/" >
                    <IoHome size={30} />
                </Link>
                <h1 className="heading">
                    A Journey For
                    <span className="heading-span"> Front End Development </span>
                </h1>
            </div>

            <div className='main-con'>
                <div className='side-menu'>
                    <ul>
                        {certificates.map((item) => (
                            <li>
                                <Link href={`/dynamic/${item.id}`} key={item.id}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='certi-con'>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Layout;
