import React from 'react';
import Head from 'next/head';

import classes from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>DevKasun Home page</title>
                <meta name="description" content="Welcome to my website. Checkout projects that I have done." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}

export default Layout;