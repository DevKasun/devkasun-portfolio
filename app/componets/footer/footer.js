'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="fixed bottom-0 w-full py-4">
            <div className="container mx-auto flex items-center justify-between">
                <ul>
                    <li><Link href="mailto:devkasunlakshitha@gmail.com" class="text-kgray px-2">devkasunlakshitha@gmail.com</Link></li>
                </ul>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:underline ${pathname === '/' ? 'active text-kwhite' : 'text-kgray'}`} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:underline ${pathname === '/about-me' ? 'active text-kwhite' : 'text-kgray'}`} href="/about-me">About</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:underline ${pathname === '/blog' ? 'active text-kwhite' : 'text-kgray'}`} href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={`link block px-2 text-xl duration-300 hover:underline ${pathname === '/contact' ? 'active text-kwhite' : 'text-kgray'}`} href="/contact">Contact</Link>
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
