'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="fixed bottom-0 w-full py-4 bg-kblack">
            <div className="container mx-auto px-8 flex items-center justify-between">
                <ul>
                    <li>
                        <Link href="mailto:devkasunlakshitha@gmail.com" className="text-kgray px-2 flex gap-1 hover:text-kwhite">
                            <Image width={20} height={20} src={'icons/at-sign.svg'} alt="at-sign" />
                            devkasunlakshitha@gmail.com
                        </Link>
                    </li>
                </ul>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:text-kwhite ${pathname === '/' ? 'active text-kwhite' : 'text-kgray'}`} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:text-kwhite ${pathname === '/about-me' ? 'active text-kwhite' : 'text-kgray'}`} href="/about-me">About</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:text-kwhite ${pathname === '/blog' ? 'active text-kwhite' : 'text-kgray'}`} href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:text-kwhite ${pathname === '/contact' ? 'active text-kwhite' : 'text-kgray'}`} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <ul className='social-media flex items-center'>
                    <li>
                        <Link target='_blank' href='' className='block px-2 cursor-pointer hover:scale-125 duration-300'>
                            <Image width={24} height={24} src={'icons/twitter.svg'} alt='twitter_link' />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='' className='block px-2 cursor-pointer hover:scale-125 duration-300'>
                            <Image width={24} height={24} src={'icons/linkedin.svg'} alt='linkedin_link' />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='' className='block px-2 cursor-pointer hover:scale-125 duration-300'>
                            <Image width={24} height={24} src={'icons/instagram.svg'} alt='instagram_link' />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='' className='block px-2 cursor-pointer hover:scale-125 duration-300'>
                            <Image width={24} height={24} src={'icons/facebook.svg'} alt='facebook_link' />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
