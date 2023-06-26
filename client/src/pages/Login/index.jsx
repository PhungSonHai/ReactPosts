import React, { useState } from 'react';
import images from './../../assets';
import classNames from 'classnames/bind';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Toast from 'react-bootstrap/Toast';
import * as Yup from 'yup';
import axios from 'axios';

const cx = classNames.bind(styles);

function index() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const initialValues = {
    username: "",
    password: ""
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data)
      .then(response => {
        if(response.data.error) {
          setError(response.data.error)
        } else {
          localStorage.setItem("accessToken", response.data)
          navigate('/')
        }
      })
      .catch(error => setError("Error occurred"))
  } 

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(30).required(),
    password: Yup.string().min(8).required(),
  })

  return (
    <React.Fragment>
      <Toast onClose={() => setError('')} className={`position-fixed top-0 end-0`} show={error !== ''} delay={5000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
      </Toast>

      <div className={`d-flex flex-column vh-100`}>
        <div className={`p-3`}>
          <img width={50} height={50} className={`${cx('icon-back')}`} onClick={() => navigate(-1)} src={images.arrowBack} alt="arrow-back" />
        </div>
        <div className={`d-flex justify-content-center align-items-center flex-fill`}>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
              <div className={`${cx('wrap-form-login')} d-flex flex-column align-items-center`}>
                <h2 className={`text-uppercase fw-bold`}>Login</h2>
                <div className={`w-100`}>
                  <div className={`mt-3`}>
                    <label htmlFor="input-username" className={`fw-bold`}>Username</label>
                    <Field id="input-username" name="username" className={`form-control mt-1`} autoComplete="off" placeholder="Username..."/>
                    <ErrorMessage name='username' className='text-danger' component="small"/>
                  </div>
                  <div className={`mt-3`}>
                    <label htmlFor="input-password" className={`fw-bold`}>Password</label>
                    <Field id="input-password" type="password" name="password" className={`form-control mt-1`} autoComplete="off" placeholder="Password..."/>
                    <ErrorMessage name='password' className='text-danger' component="small"/>
                  </div>
                </div>
                <div className={`mt-4 w-100`}>
                  <button type='submit' className={`btn btn-info w-100 fw-bold`}>Login</button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </React.Fragment>
  )
}

export default index
