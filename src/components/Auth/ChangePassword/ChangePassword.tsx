import { Field, Formik, FormikErrors } from 'formik'
import { Link } from 'react-router-dom'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'

import styles from './changePassword.module.scss'

interface LoginErrorTypes {
    password: string
    confirmPassword: string
}

export const ChangePassword = () => {
    const initialValues: LoginErrorTypes = {
        password: '',
        confirmPassword: '',
    }
    return (
        <div className={styles.login}>
            <div className={styles.main}>
                <Link to="/auth" className={styles.main_link}>
                    <span>Don’t have an account yet?</span>
                    <img src="/userIcon.png" alt="user" />
                </Link>
                <h1 className={styles.main_title}>Change password</h1>
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
                        if (values.confirmPassword !== values.password) {
                            errors.confirmPassword = 'Error'
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
                            <div className={styles.main_form_item}>
                                <MyInput
                                    type="password"
                                    name="confirmPassword"
                                    text="Confirm password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    error={
                                        errors.confirmPassword &&
                                        touched.confirmPassword &&
                                        errors.confirmPassword
                                    }
                                />
                            </div>
                            <div className={styles.main_hr} />
                            <div className={styles.main_form_item}>
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