import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import classes from './SubLayout.module.scss';

const SubLayout = ({ children }) => {
    return (
        <div className={classes.pageWrapper}>
            {children}
        </div>
    )
}

export default SubLayout