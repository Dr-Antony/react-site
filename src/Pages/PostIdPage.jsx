import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/postsService';

import style from './PostIdPage.module.css'


import Preloader from '../components/Preloader/Preloader';

const PostIdPage = (props) => {
    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(null);


    const getPost = async (id) => {
        setIsLoading(true)
        const { data } = await PostService.getById(id)
        setIsLoading(false)
        setPost(data)
    }
    const getComment = async (id) => {
        setIsLoading(true)
        const { data } = await PostService.getCommentsByPost(id)
        setIsLoading(false)
        setComments(data)
        console.log(data)
    }


    useEffect(() => {
        getPost(params.id)
        getComment(params.id)
    }, [])
    return (
        <div>
            <div>
                {isLoading ? <Preloader /> : <div>{post.id}. {post.body}</div>}
            </div>
            <div>
                <h1>Comments:</h1>
                {isLoading ? <Preloader /> :
                    comments.map((comment) => {
                        return (
                            <div key={comment.id} className={style.comment__container} >
                                <h2>Id: {comment.id}</h2>
                                <h3>Email: {comment.email}</h3>
                                <h4>{comment.body}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostIdPage;