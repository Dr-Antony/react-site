import React, { useState } from 'react';
import style from './Post.module.css'
import MyButton from '../UI/Button/MyButton';
const Post = ({number,...props}) => {
const {id,title,body} = props.post;
    return (
        <div className={style.post__container}>
            <div className={style.post__content}>
                <strong>{props.post.id}.{title}</strong>
                <div>{body}</div>
            </div>
            <div className={style.post__btn}>
                <MyButton onClick={()=>{props.removePost(props.post)}}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default Post;