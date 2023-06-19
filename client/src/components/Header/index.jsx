import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function index() {
  const [tabActive, setTabActive] = useState('/')

  const handleSetTabActive = (tab) => {
    setTabActive(tab)
  }

  return (
    <React.Fragment>
      <Nav className='bg-dark px-5 py-3 d-flex justify-content-between align-items-center' justify variant="pills" defaultActiveKey="/">
          <div className='d-flex'>
              <Nav.Item className='me-3'>
                <Link to="/" className={`${cx('nav-header', `${tabActive == "/" ? "active" : ""}`)} text-white text-decoration-none fw-bold`} style={{ whiteSpace: "pre" }} onClick={() => handleSetTabActive("/")}>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className='me-3'>
                <Link to="/create-post" className={`${cx('nav-header', `${tabActive == "create-post" ? "active" : ""}`)} text-white text-decoration-none fw-bold`} style={{ whiteSpace: "pre" }} onClick={() => handleSetTabActive("create-post")}>
                  Create Post
                </Link>
              </Nav.Item>
          </div>
          
          <div>
            <NavDropdown title="Setting" id="nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </div>
      </Nav>
    </React.Fragment>
  )
}

export default index
