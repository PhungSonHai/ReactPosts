import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Layout><Home/></Layout>}/>
          <Route path='/create-post' exact element={<Layout><CreatePost/></Layout>}/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
