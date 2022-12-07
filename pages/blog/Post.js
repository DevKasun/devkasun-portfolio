import React from 'react';
import Link from 'next/link';
import classes from './Post.module.scss';

const Post = (props) => {

    console.log(props.recentPost);

    const featuredPosts = props.recentPost

    return (
        <>
            {
                featuredPosts.map(post => {
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
        </>
    )
}

export default Post;