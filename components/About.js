import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function About() {
    return (
        <>
            <div className="card-content">
                <div className="card-subtitle">About</div>
                <div className="card-desc">
                    <p>👋 Hi, I&apos;m an Enthusiastic Frontend Developer who loves to create beautiful user interfaces. I'm glad I decided to learn to program. It's taught me how to become resourceful and think outside the box. I've been able to accomplish many things I thought were impossible.</p><br />
                    <p>
                        <strong>Skills & Tools: </strong>HTML, CSS, Javascript, Jquery, SASS, React JS, Bootstrap, Bulma, TailwindCSS, VS Code, Terminal, Gulp, Grunt, Webpack, Vite, git,  etc.
                    </p><br />
                    <p>I love to level up my skills!</p>

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
