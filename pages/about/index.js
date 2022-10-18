import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import MasonaryGallery from '../../components/MasonaryGallery/MasonaryGallery';
import SubLayout from '../../layout/SubLayout';
import classes from './index.module.scss';

const index = () => {
    return (
        <SubLayout>
            <section className={classes.aboutPage}>
                <Breadcrumb />
                <div className={classes.textContetn}>
                    <div className={classes.contentWrapper}>
                        <h3>Kasun Lakshitha</h3>
                        <h5>Frontend web developer</h5>
                        <p><strong>👋 Hi,</strong> I'm an Enthusiastic Frontend Developer who loves to create beautiful user interfaces. I'm glad I decided to learn to program. It's taught me how to become resourceful and think outside the box. I've been able to accomplish many things I thought were impossible.</p>
                        <p><strong> Skills & Tools: </strong>HTML, CSS, Javascript, Jquery, SASS, React JS, Bootstrap, Bulma, TailwindCSS, VS Code, Terminal, Gulp, Grunt, Webpack, Vite, git, etc.</p>
                        <p>I love to level up my skills!</p>
                    </div>
                </div>
                <div className={classes.imageContent}>
                    <MasonaryGallery />
                </div>
            </section>
        </SubLayout>
    )
}

export default index;