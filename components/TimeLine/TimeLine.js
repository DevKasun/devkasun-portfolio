import classes from './TimeLine.module.scss'

const TimeLine = () => {
    return (
        <div className={classes.timelineWrapper}>
            <div className={classes.timelineItem}>
                <div className={classes.year}>
                    <span>2016</span>
                </div>
                <div className={classes.line}></div>
                <div className={classes.descWrap}>
                    <div className={classes.subhead}>Front-end web developer at Sevensigns.lk</div>
                    <div className={classes.timeRange}>Dec 2016 - Aug 2018</div>
                </div>
            </div>
            <div className={classes.timelineItem}>
                <div className={classes.year}>
                    <span>2019</span>
                </div>
                <div className={classes.line}></div>
                <div className={classes.descWrap}>
                    <div className={classes.subhead}>Front-end web developer at Rhino Partners</div>
                    <div className={classes.timeRange}>Oct 2019 - Present</div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine;