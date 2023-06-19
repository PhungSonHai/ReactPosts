import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames/bind';
import styles from './create-post.module.scss';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function index() {
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        post_text: "",
        username: ""
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts/create", data)
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        post_text: Yup.string().required(),
        username: Yup.string().min(3).max(30).required(),
    })

  return (
    <React.Fragment>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className={`d-flex flex-column justify-content-center align-items-center flex-fill`}>
            <h2 className={`text-uppercase fw-bold`}>Create Post Form</h2>
            <div className={`${cx('form-create')} mt-2`}>
                <div className={`mb-3 w-100 d-flex flex-column`}>
                    <label htmlFor="input-title" className={`fw-bold`}>
                        Title
                    </label>
                    <Field id='input-title' className={`form-control my-1`} name='title' placeholder="Enter title..." />
                    <ErrorMessage name='title' className='text-danger' component="small"/>
                </div>
                <div className={`mb-3 w-100 d-flex flex-column`}>
                    <label htmlFor="input-post-text" className={`fw-bold mb-1`}>
                        Content post
                    </label>
                    <Field id='input-post-text' className={`form-control my-1`} name='post_text' placeholder="Enter content..." />
                    <ErrorMessage name='post_text' className='text-danger' component="small"/>
                </div>
                <div className={`mb-4 w-100 d-flex flex-column`}>
                    <label htmlFor="input-username" className={`fw-bold mb-1`}>
                        Username
                    </label>
                    <Field id='input-username' className={`form-control my-1`} name='username' placeholder="Enter username..." />
                    <ErrorMessage name='username' className='text-danger' component="small"/>
                </div>
                <div className={`w-100`}>
                    <button type='submit' className={`btn btn-info fw-bold w-100 text-uppercase`}>
                        Add post
                    </button>
                </div>
            </div>
        </Form>
      </Formik>
    </React.Fragment>
  )
}

export default index
