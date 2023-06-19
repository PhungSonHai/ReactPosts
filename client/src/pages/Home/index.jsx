import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listPosts, setListPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(response =>setListPosts(response.data))
            .catch(error => console.log(error))
    }, []) 

    return (
        <React.Fragment>
            <div className='d-flex align-items-center flex-column'>
                {listPosts.map((item, index) => {
                return <Card className="bg-primary text-white w-50 my-4" onClick={() => navigate(`/posts/${item.id}`)} style={{ cursor: "pointer" }} key={index}>
                            <Card.Header>{item.title}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {item.post_text}.
                                </p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title" className='text-warning'>{item.username}</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                })}
            </div>
        </React.Fragment>
    )
}

export default Home
