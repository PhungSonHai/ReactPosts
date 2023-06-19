import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form as FormFormik, ErrorMessage } from 'formik';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames/bind';
import styles from './create-post.module.scss';
import * as Yup from 'yup';

const cx = classNames.bind(styles);

function index() {
    const initialValues = {
        title: "",
        post_text: "",
        username: ""
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        post_text: Yup.string().required(),
        username: Yup.string().min(3).max(30).required(),
    })

  return (
    <React.Fragment>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <FormFormik className={`d-flex justify-content-center align-items-center flex-fill`}>
            <div className={`${cx('form-create')}`}>
                <div className={`mb-3 w-100`}>
                    <label htmlFor="input-title" className={`fw-bold mb-1`}>
                        Title
                    </label>
                    <Form.Control type="text" id='input-title' name='title' className={`${cx('input-create')}`} placeholder="Enter title..." />
                </div>
                <div className={`mb-3 w-100`}>
                    <label htmlFor="input-title" className={`fw-bold mb-1`}>
                        Content post
                    </label>
                    <Form.Control type="text" id='input-title' name='postText' className={`${cx('input-create')}`} placeholder="Enter content..." />
                </div>
                <div className={`mb-4 w-100`}>
                    <label htmlFor="input-title" className={`fw-bold mb-1`}>
                        Username
                    </label>
                    <Form.Control type="text" id='input-title' name='username' className={`${cx('input-create')}`} placeholder="Enter username..." />
                </div>
                <div className={`w-100`}>
                    <button type='submit' className={`btn btn-info fw-bold w-100 text-uppercase`}>
                        Add post
                    </button>
                </div>
            </div>
        </FormFormik>
      </Formik>
    </React.Fragment>
  )
}

export default index
