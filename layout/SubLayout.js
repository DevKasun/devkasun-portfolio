import React from 'react';
import classes from './SubLayout.module.scss';

const SubLayout = ({ children }) => {
    return (
        <div className={classes.pageWrapper}>
            {children}
        </div>
    )
}

export default SubLayout