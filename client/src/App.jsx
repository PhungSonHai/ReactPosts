import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import DetailPost from './pages/DetailPost';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthContext } from './helpers/AuthContext';

function App() {
  const [authState, setAuthState] = useState(false)

  return (
    <React.Fragment>
      <Router>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Routes>
            <Route path='/' exact element={<Layout><Home/></Layout>}/>
            <Route path='/create-post' exact element={<Layout><CreatePost/></Layout>}/>
            <Route path='/posts/:id' exact element={<Layout><DetailPost/></Layout>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Login/>}/>
          </Routes>
        </AuthContext.Provider>
      </Router>
    </React.Fragment>
  )
}

export default App
