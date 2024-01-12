'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import SocialMedia from '../social-media/socialMedia';

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="fixed bottom-0 w-full py-4 bg-kblack">
            <div className="container mx-auto px-8 flex items-center justify-between">
                <ul>
                    <li>
                        <Link href="mailto:devkasunlakshitha@gmail.com" className="text-kwhite px-2 flex gap-1 hover:text-kwhite">
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
                <SocialMedia />
            </div>
        </footer>
    )
}
