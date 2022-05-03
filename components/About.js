import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function About() {
    return (
        <>
            <div className="card-content">
                <div className="card-subtitle">About</div>
                <div className="card-desc">
                    <p>👋 Hi, I&apos;m a front-end web developer. I covert designs into the code. These tools are using for my daily work.</p><br />
                    <p>HTML, CSS, Javascript, SASS, VS Code, Terminal
                        JS task runners(Gulp, grunt), Bundling tools(webpack, Parcel), Vite</p>
                </div>
            </div>
            <div className="card-social">
                <Link href="https://twitter.com/KasunLuckshitha">
                    <a target="_blank">
                        <Image src="/icons/twitter.svg" alt="avatar" width="24" height="24" />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/devkasun">
                    <a target="_blank">
                        <Image src="/icons/instagram.svg" alt="avatar" width="24" height="24" />
                    </a>
                </Link>
                <Link href="https://www.facebook.com/devkasunlakshitha">
                    <a target="_blank">
                        <Image src="/icons/facebook.svg" alt="avatar" width="24" height="24" />
                    </a>
                </Link>
                <Link href="https://github.com/DevKasun">
                    <a target="_blank">
                        <Image src="/icons/github.svg" alt="avatar" width="24" height="24" />
                    </a>
                </Link>
            </div>
        </>
    )
}

export default About;