/** @format */
import { useDispatch, useSelector } from 'react-redux'
import { Notify } from '../../components'
import { toast } from 'react-toastify'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { startCreatingUserWithEmailPassword } from '../../redux/actions/actions'

export const Register = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        const session = sessionStorage.getItem('authenticated')
        if (session) {
            navigate('/')
        }
    }, [])

    const notify = () =>
        toast.success('🦄 Registrado Correctamente', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatpassword: '',
            displayName: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Email must be a valid email')
                .required('Email is a required field'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is a required field')
                .oneOf(
                    [Yup.ref('repeatpassword')],
                    'Passwords must be the same'
                ),
            repeatpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is a required field')
                .oneOf([Yup.ref('password')], 'Passwords must be the same'),
        }),
        onSubmit: (formData) => {
            dispatch(startCreatingUserWithEmailPassword(formData))
            navigate('/')
            // handleReset()
            // notify()
        },
    })

    const {
        values,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        errors,
        touched,
    } = formik

    useEffect(() => {
        values.displayName = values.email
    }, [values.email])

    return (
        <>
            <Notify />

            <section className='hero is-success is-fullheight'>
                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <div className='column is-4 is-offset-4'>
                            <h3 className='title has-text-black'>Register</h3>
                            <hr className='login-hr' />
                            <div className='box'>
                                <figure className='avatar'>
                                    <img src='https://via.placeholder.com/150' />
                                </figure>
                                <form onSubmit={handleSubmit}>
                                    <div className='field'>
                                        <div className='control'>
                                            <input
                                                className='input is-large'
                                                type='email'
                                                name='email'
                                                placeholder='Email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && (
                                                <div className='has-text-danger pt-2'>
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='field'>
                                        <div className='control'>
                                            <input
                                                className='input is-large'
                                                type='password'
                                                name='password'
                                                placeholder='Password'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            {errors.password &&
                                                touched.password && (
                                                    <div className='has-text-danger pt-2'>
                                                        {errors.password}
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <div className='field'>
                                        <div className='control'>
                                            <input
                                                className='input is-large'
                                                type='password'
                                                name='repeatpassword'
                                                placeholder='Repeat password'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.repeatpassword}
                                            />
                                            {errors.repeatpassword &&
                                                touched.repeatpassword && (
                                                    <div className='has-text-danger pt-2'>
                                                        {errors.repeatpassword}
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <button
                                        type='submit'
                                        className='button is-block is-primary is-large is-fullwidth'>
                                        Register
                                        <i
                                            className='fa fa-sign-in'
                                            aria-hidden='true'></i>
                                    </button>
                                </form>
                            </div>
                            <p className='has-text-grey s'>
                                <Link to='/login'>Log in</Link> &nbsp;·&nbsp;
                                {/* <a href='#forgot'>Forgot Password</a> &nbsp;·&nbsp; */}
                                <a href='#need'>Need Help?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
