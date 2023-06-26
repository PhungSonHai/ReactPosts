import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { useState, useEffect } from 'react';
import images from '../../assets';
import Dropdown from 'react-bootstrap/Dropdown';

const cx = classNames.bind(styles);

function index() {
  const [tabActive, setTabActive] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setTabActive(location.pathname.split("/")[1])
  }, [location.pathname])

  return (
    <React.Fragment>
      <Nav className={`${cx('header')} bg-dark px-5 py-3 d-flex justify-content-between align-items-center`} justify variant="pills" defaultActiveKey="/">
          <div className='d-flex'>
              <Nav.Item className='me-3'>
                <Link to="/" className={`${cx('nav-header', `${tabActive == "" ? "active" : ""}`)} text-white text-decoration-none fw-bold`} style={{ whiteSpace: "pre" }}>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className='me-3'>
                <Link to="/create-post" className={`${cx('nav-header', `${tabActive == "create-post" ? "active" : ""}`)} text-white text-decoration-none fw-bold`} style={{ whiteSpace: "pre" }}>
                  Create Post
                </Link>
              </Nav.Item>
          </div>
          
          <div>
            <Dropdown>
              <Dropdown.Toggle className={`${cx('custom-toggle')} p-0 border-0`} style={{ backgroundColor: "unset" }}>
                <img src={images.userSvg} alt="User" width={50} height={50} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div>
                  <Link to='/me/profile' className={`text-decoration-none`}>
                    <div className={`${cx('text-dropdown')} py-1 text-dark px-3`}>
                      My Profile
                    </div>
                  </Link>
                  {
                    !localStorage.getItem("accessToken") && (
                      <React.Fragment>
                        <Link to='/register' className={`text-decoration-none`}>
                          <div className={`${cx('text-dropdown')} py-1 text-dark px-3`}>
                            Register
                          </div>
                        </Link>
                        <Link to='/login' className={`text-decoration-none`}>
                          <div className={`${cx('text-dropdown')} py-1 text-dark px-3`}>
                            Login
                          </div>
                        </Link>
                      </React.Fragment>
                    )
                  }
                </div>
                <Dropdown.Divider />
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </Nav>
    </React.Fragment>
  )
}

export default index
