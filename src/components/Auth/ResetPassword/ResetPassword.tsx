import { Field, Formik, FormikErrors } from 'formik'
import { Link } from 'react-router-dom'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'

import styles from './resetPassword.module.scss'

interface LoginErrorTypes {
    password: string
}

export const ResetPassword = () => {
    const initialValues: LoginErrorTypes = {
        password: '',
    }
    return (
        <div className={styles.login}>
            <div className={styles.main}>
                <Link to="/auth" className={styles.main_link}>
                    <span>Don’t have an account yet?</span>
                    <img src="/userIcon.png" alt="user" />
                </Link>
                <h1 className={styles.main_title}>Forgot password?</h1>
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
