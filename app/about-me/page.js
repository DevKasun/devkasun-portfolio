import React from 'react'
import Skills from '../componets/skills/skills'
import { RhinoPartnersSkills, sevenSignsSkills, skills } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <main className='about py-28'>
            <section className='pb-14'>
                <div className="container mx-auto px-8">
                    <div className='flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-3'>
                        <Image src={'/images/developer.png'} width={1080} height={1080} alt="developer_image" />
                        <div className='col-span-2'>
                            <h2 className='text-4xl pb-6'>Who am I?</h2>
                            <p className='text-lg pb-4'>
                                Hi, I&#39;m an Enthusiastic Frontend Developer who loves to create beautiful user interfaces. I&#39;m glad I decided to learn to program. It&#39;s taught me how to become resourceful and think outside the box. I&#39;ve been able to accomplish many things I thought were impossible.
                            </p>
                            <p className='text-lg pb-4'>
                                Skills & Tools:
                            </p>
                            <Skills skills={skills} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-14'>
                <div className="container mx-auto px-8">
                    <h2 className='text-4xl pb-6'>Professional Experience</h2>

                    <div className="row grid sm:grid-cols-1 gap-8 pb-8 lg:grid-cols-3">
                        <div className="flex-3">
                            <h4 className='text-xl'>Senior Front-end Web developer</h4>
                            <p className='text-lg flex items-center gap-2 text-kgray'>Rhino Partners <Link href={'https://rhino-partners.com/'}><Image src={"/icons/link.svg"} width={16} height={16} alt={'link_icon'} /></Link></p>
                            <p className='text-sm pt-2 text-kgray'>Oct 2019 - Present</p>
                        </div>
                        <div className='col-span-2'>Acquired Skills: <Skills skills={RhinoPartnersSkills} /></div>
                    </div>

                    <div className="row grid sm:grid-cols-1 gap-4 pb-8 lg:grid-cols-3">
                        <div className="flex-3">
                            <h4 className='text-xl'>Front-end Web developer</h4>
                            <p className='text-lg flex items-center gap-2 text-kgray'>SevenSigns <Link href={'https://sevensigns.lk/'}><Image src={"/icons/link.svg"} width={16} height={16} alt={'link_icon'} /></Link></p>
                            <p className='text-sm pt-2 text-kgray'>Dec 2016 - Aug 2018</p>
                        </div>
                        <div className='col-span-2'>Acquired Skills: <Skills skills={sevenSignsSkills} /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
