'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='fixed top-0 w-full h-fit py-4 bg-kblack'>
            <div className="container mx-auto px-8 flex items-center justify-between">
                <Link href='/' className='text-2xl'>DevKasun</Link>
                <button>
                    <Image width={24} height={24} src="/icons/menu.svg" alt="menu_icons" />
                </button>
            </div>
        </header>
    )
}
