import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <>
            <div className="card-content">
                <div className="card-subtitle">About</div>
                <div className="card-desc">
                    <p>Hi, I&apos;m a front-end web developer. I covert designs into the code. These are tools for my daily work.</p><br />
                    <p>HTML, CSS, Javascript, SASS, VS Code, Terminal
                        JS task runners(Gulp, grunt), Bundling tools(webpack, Parcel), Vite</p>
                </div>
            </div>
            <div className="card-social">
                <a href="">
                    <Image src="/icons/facebook.svg" alt="avatar" width="24" height="24" />
                </a>
                <a href="">
                    <Image src="/icons/twitter.svg" alt="avatar" width="24" height="24" />
                </a>
                <a href="">
                    <Image src="/icons/instagram.svg" alt="avatar" width="24" height="24" />
                </a>
                <a href="">
                    <Image src="/icons/github.svg" alt="avatar" width="24" height="24" />
                </a>
            </div>
        </>
    )
}

export default About;