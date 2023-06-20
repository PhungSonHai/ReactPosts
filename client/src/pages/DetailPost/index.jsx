import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateTime } from '../../common';

function DetailPost() {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {   
        axios.get(`http://localhost:3001/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
    }, [])

    if(post) {
        var createdAt = formatDateTime(post.createdAt)
        var updatedAt = formatDateTime(post.updatedAt)
    }

    return (
        <React.Fragment>
            <div className={`d-flex flex-fill flex-column align-items-center justify-content-center`}>
                <h2 className={`text-uppercase fw-bold`}>Detail Post</h2>
                {
                    post 
                    ? 
                    <div>
                        <div>
                            <span className={`fw-bold fs-5`}>User: </span>
                            <span>{post.username}</span>
                        </div>
                        <div>
                            <span className={`fw-bold fs-5`}>Title: </span>
                            <span>{post.title}</span>
                        </div>
                        <div>
                            <span className={`fw-bold fs-5`}>Content: </span>
                            <span>{post.post_text}</span>
                        </div>
                        <div>
                            <span className={`fw-bold fs-5`}>Created At: </span>
                            <span>{createdAt}</span>
                        </div>
                        <div>
                            <span className={`fw-bold fs-5`}>Updated At: </span>
                            <span>{updatedAt}</span>
                        </div>
                    </div>
                    : 
                    <p>No data</p>
                }
            </div>
        </React.Fragment>
    )
}

export default DetailPost