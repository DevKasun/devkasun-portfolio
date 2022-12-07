import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SubLayout from '../../layout/SubLayout';
import classes from './index.module.scss';
import GhostContentAPI from '@tryghost/content-api'
import Post from './Post';

const Blog = () => {

    const [recentPost, setRecentPost] = useState([]);

    useEffect(() => {
        const api = new GhostContentAPI({
            url: 'https://css-blok.com',
            key: '0fd88efdfedaac94f109a82ea6',
            version: "v5.0"
        });

        api.posts.browse({ featured: true })
            .then((posts) => {
                setRecentPost(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    return (
        <SubLayout>
            <section className={classes.blogPage}>
                <Breadcrumb />
                <div className={classes.textContetn}>
                    <div className={classes.contentWrapper}>
                        <h3>My Blog website: CSS-BLOK</h3>
                        <p>As a front-end web developer, I have more than 6 years of experience. My expertise in front-end web development would be useful to others. Because of that, I decided to start a new blog site to share my knowledge. Hopefully, these articles will help people who want to make the web more colorful.</p>
                        <p>My blog website link: <Link href="https://css-blok.com"><a target="_blank">CSS-BLOK</a></Link></p>
                    </div>
                </div>
                <div className={classes.blogPosts}>
                    {/* TODO: Add a image of the blog */}
                    <div className={classes.allPosts}>
                        <Post recentPost={recentPost} />
                    </div>
                </div>
            </section>
        </SubLayout>
    )
}

export default Blog;