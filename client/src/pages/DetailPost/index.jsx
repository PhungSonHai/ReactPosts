import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateTime } from '../../common';
import classNames from 'classnames/bind';
import styles from './detail-post.module.scss';
import images from '../../assets';
import Form from 'react-bootstrap/Form';

const cx = classNames.bind(styles);

function DetailPost() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [valueComment, setValueComment] = useState("")

    useEffect(() => {   
        axios.get(`http://localhost:3001/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))

        axios.get(`http://localhost:3001/comment/${id}/getAll`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error))
    }, [])

    if(post) {
        var createdAt = formatDateTime(post.createdAt)
        var updatedAt = formatDateTime(post.updatedAt)
    }

    const handleAddComment = () => {
        let data = {
            comment: valueComment,
            postId: id
        }

        axios.post(`http://localhost:3001/comment/create`, data)
            .then(() => {
                setComments([...comments, data])
                setValueComment("")
            })
            .catch(error => console.log(error))
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleAddComment()
        }
    }

    return (
        <React.Fragment>
            <div className={`d-flex flex-fill justify-content-between align-items-center`}>
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

                <div className={`flex-fill d-flex justify-content-center`}>
                    <div>
                        <div className={`${cx('wrap-list-comment')} px-3 pb-2`}>
                            {
                                comments.map((item, index) => {
                                    return <div key={index} className={`d-flex mt-2`}>
                                                <img width={20} height={20} className={`${cx('icon-comment')} me-1`} src={images.dotSvg} alt="" />
                                                <span className={`${cx('text-comment')}`}>{item.comment}</span>
                                            </div>
                                })
                            }
                        </div>
                        <div className={`mt-5`}>
                            <div className={`d-flex`}>
                                <Form.Control type="text" value={valueComment} onChange={(event) => setValueComment(event.target.value)} onKeyDown={handleKeyPress} className={`${cx('input-comment')} me-2`} placeholder="Message..." />
                                <div>
                                    <img width={40} height={40} onClick={handleAddComment} className={`${cx('icon-send')}`} src={images.sendSvg} alt="send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DetailPost