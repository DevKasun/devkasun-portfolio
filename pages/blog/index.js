import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SubLayout from '../../layout/SubLayout';
import classes from './index.module.scss';
import GhostContentAPI from '@tryghost/content-api'

const Blog = () => {

    const [recentPost, setRecentPost] = useState([]);

    useEffect(() => {
        const api = new GhostContentAPI({
            url: process.env.GHOST_API_URL,
            key: process.env.GHOST_API_KEY,
            version: process.env.GHOST_API_VERSION
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
                        <h3>Blog and Vlog</h3>
                        <p>My blog website link: <Link href="https://css-blok.com"><a target="_blank">CSS-BLOK</a></Link></p>
                        <p>My Vlog on youtube: <Link href="https://youtube.com/playlist?list=PLiYdfKK79iZwFIENjpFWP-7NlMsjUlFMJ"><a target="_blank">DevKasun</a></Link></p>
                        <p>Gaming youtube channel: <Link href="https://www.youtube.com/@devkasungaming"><a target="_blank">DevKasun Gaming</a></Link></p>
                    </div>
                </div>
                <div className={classes.blogPosts}>
                    <div className={classes.allPosts}>
                        {
                            recentPost.slice(0, 3).map(post => {
                                return (
                                    <div className={classes.postWrapper} key={post.id}>
                                        <Link className={classes.postLink} href={post.url} target="_blank">
                                            <a className={classes.link}>
                                                <h4 className={classes.postTitle}>{post.title}</h4>
                                                <p className={classes.postContent}>{post.excerpt}</p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </SubLayout>
    )
}

export default Blog;