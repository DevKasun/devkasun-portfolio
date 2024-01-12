import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia() {
    return (
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
    )
}
