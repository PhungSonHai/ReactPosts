import React from 'react';
import images from './../../assets';
import classNames from 'classnames/bind';
import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const cx = classNames.bind(styles);

function index() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={`d-flex flex-column vh-100`}>
        <div className={`p-3`}>
          <img width={50} height={50} className={`${cx('icon-back')}`} onClick={() => navigate(-1)} src={images.arrowBack} alt="arrow-back" />
        </div>
        <div className={`d-flex justify-content-center align-items-center flex-fill`}>
          <Formik>
            <Form>
              <div className={`${cx('wrap-form-register')} d-flex flex-column align-items-center`}>
                <h2 className={`text-uppercase fw-bold`}>Register</h2>
                <div className={`w-100`}>
                  <div className={`mt-3`}>
                    <label htmlFor="input-username" className={`fw-bold`}>Username</label>
                    <Field id="input-username" name="username" className={`form-control mt-1`} autocomplete="off" placeholder="Username..."/>
                  </div>
                  <div className={`mt-3`}>
                    <label htmlFor="input-password" className={`fw-bold`}>Password</label>
                    <Field id="input-password" type="password" name="password" className={`form-control mt-1`} autocomplete="off" placeholder="Password..."/>
                  </div>
                  <div className={`mt-3`}>
                    <label htmlFor="input-confirm-password" className={`fw-bold`}>Confirm password</label>
                    <Field id="input-confirm-password" type="password" name="confirmPassword" className={`form-control mt-1`} autocomplete="off" placeholder="Confirm password..."/>
                  </div>
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
