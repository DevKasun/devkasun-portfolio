import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
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
                        <p>Almost 2 years of experience working from home 100% of the time. Some of my most vital skills are communication, problem-solving, and the ability to receive feedback and improve upon it.</p>
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