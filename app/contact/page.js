import React from 'react'
import Image from 'next/image'
import SocialMedia from '../componets/social-media/socialMedia'
import Link from 'next/link'

export default function Contact() {
    return (
        <main className='about py-28'>
            <section className='pb-14'>
                <div className="container mx-auto px-8">
                    <div className='flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-4'>
                        <Image className='col-span-2' src={'/images/workspace-1.jpg'} width={4032} height={3024} alt="developer_image" />
                        <div className='col-span-2'>
                            <h2 className='text-4xl pb-6'>How to connect with me?</h2>
                            <p className='text-lg pb-8'>As a passionate Front-End Web Developer, I&#39;m always excited to collaborate, share insights, or simply talk about the latest web technologies. Whether you have a project in mind, need assistance with your web presence, or just want to discuss the ever-evolving world of web development, don&#39;t hesitate to get in touch. You can reach me via email or follow me on social media for updates and insights into my work.</p>

                            <div className="pb-8">
                                <p className='text-lg pb-2 text-kgray'>Email:</p>
                                <Link className='transition-all duration-300 delay-300 hover:underline' href="mailto:devkasunlakshitha@gmail.com">devkasunlakshitha@gmail.com</Link>
                            </div>
                            <div className="pb-8">
                                <p className='text-lg pb-2 text-kgray'>Follow me on social media:</p>
                                <SocialMedia />
                            </div>
                            <div className="pb-8">
                                <p className='text-lg pb-2 text-kgray'>Checkout my latest projects:</p>
                                <Link className='transition-all duration-300 delay-300 hover:underline' target='_blank' href="https://github.com/DevKasun?tab=repositories">
                                    Github Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
