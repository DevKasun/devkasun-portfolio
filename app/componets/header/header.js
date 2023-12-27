import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='fixed top-0 bottom-0 w-full py-4'>
            <div className="container mx-auto flex items-center justify-between">
                <Link href='/' className='text-2xl'>DevKasun</Link>
                <button>
                    <Image width={24} height={24} src="/icons/menu.svg" className='' alt="menu_icons" />
                </button>
            </div>
        </header>
    )
}
