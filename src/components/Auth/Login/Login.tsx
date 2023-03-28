import { Field, Formik, FormikErrors } from 'formik'
import { Link } from 'react-router-dom'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'

import styles from './login.module.scss'

interface LoginErrorTypes {
    email: string
    password: string
    saveMe: boolean
}

export const Login = () => {
    const initialValues: LoginErrorTypes = {
        email: '',
        password: '',
        saveMe: false,
    }
    return (
        <div className={styles.login}>
            <div className={styles.main}>
                <Link to="/auth" className={styles.main_link}>
                    <span>Don’t have an account yet?</span>
                    <img src="/userIcon.png" alt="user" />
                </Link>
                <h1 className={styles.main_title}>Log in</h1>
                <p className={styles.main_paragraph}>
                    Please input your information in the fields below to enter
                    your Journey platform.{' '}
                </p>
                <div className={styles.main_hr} />
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors: FormikErrors<LoginErrorTypes> = {}

                        if (values.password.length < 3) {
                            errors.password = 'Required'
                        }
                        if (!values.email) {
                            errors.email = 'Required'
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email,
                            )
                        ) {
                            errors.email = 'Invalid email address'
                        }
                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.main_form_item}>
                                <MyInput
                                    type="email"
                                    name="email"
                                    text="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={
                                        errors.email &&
                                        touched.email &&
                                        errors.email
                                    }
                                />
                            </div>
                            <div className={styles.main_form_item}>
                                <MyInput
                                    type="password"
                                    name="password"
                                    text="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={
                                        errors.password &&
                                        touched.password &&
                                        errors.password
                                    }
                                />
                            </div>
                            <div className={styles.main_hr} />
                            <div className={styles.main_form_item}>
                                <div className={styles.main_form_item_wrapper}>
                                    <Field type="checkbox" name="saveMe" />
                                    <p>Remember me</p>
                                </div>
                                <div className={styles.main_form_item_wrapper}>
                                    <PrimeButton
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </PrimeButton>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            <div className={styles.side}>
                <div className={styles.side_shadow} />
            </div>
        </div>
    )
}
