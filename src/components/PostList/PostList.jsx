import React, { useState } from 'react';
import Post from '../Post/Post';
const PostList = ({posts,title,removePost}) => {
    return (
        <div >
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) => {
                return <Post removePost={removePost} number={index+1} post={post} key={post.id} />
            })}
        </div>
    )
}

export default PostList;