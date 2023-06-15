import React, { useState } from 'react';
import Post from '../Post/Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const PostList = ({ posts, title, removePost }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
    }
    return (
        <div >
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    return (
                        <CSSTransition key={post.id}
                            timeout={500}
                            classNames="post">
                            <Post removePost={removePost} number={index + 1} post={post} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    )
}

export default PostList;