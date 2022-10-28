import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import TimeLine from '../../components/TimeLine/TimeLine';
import SubLayout from '../../layout/SubLayout';
import classes from './index.module.scss';

const index = () => {
    return (
        <SubLayout>
            <section className={classes.experiencePage}>
                <Breadcrumb />
                <div className={classes.textContetn}>
                    <div className={classes.contentWrapper}>
                        <h3>Experiece</h3>
                        <p>As a front-end web developer, I have more than 6 years of experience. Almost two years of experience working from home. Communication, problem-solving, and receiving feedback and improving on it are some of my most vital skills.</p>
                    </div>
                </div>
                <div className={classes.timeLine}>
                    <TimeLine />
                </div>
            </section>
        </SubLayout>
    )
}

export default index;