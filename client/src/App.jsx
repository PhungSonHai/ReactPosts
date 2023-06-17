import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function App() {

  const [listPosts, setListPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(response =>setListPosts(response.data))
    .catch(error => console.log(error))
  }, []) 
  
  return (
    <>
      <div className='d-flex align-items-center flex-column'>
        {listPosts.map((item, index) => {
          return <Card className="bg-primary text-white w-50 mt-5" key={index}>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        {item.post_text}.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title" className='text-warning'>{item.username}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
        })}
      </div>
    </>
  )
}

export default App
