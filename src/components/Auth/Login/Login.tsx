import { Field, Formik, FormikErrors } from 'formik'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { AuthClient } from 'src/api/authApi'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'
import { useTypedDispatch } from '@hooks/index'
import { setAuth } from '@store/slices/AuthSlice'
import { LoginTypes } from '@typess/index'
import { LoginValid } from '@utils/validation'

import styles from './login.module.scss'

export const Login = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const [loader, setLoader] = useState<boolean>(false)

    const initialValues: LoginTypes = {
        email: '',
        password: '',
        saveMe: false,
    }

    const handleForm = async (values: LoginTypes) => {
        setLoader(true)
        const res = await AuthClient.login(values)
        if (res?.status == 200) {
            console.log('asd');
            dispatch(setAuth(res.data))
            navigate('/')
        }
        setLoader(false)
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
                    validationSchema={LoginValid}
                    onSubmit={(values, { setSubmitting }) => {
                        handleForm(values)
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
                                    variant="large"
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
                                    variant="large"
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
                                        {loader ? (
                                            <div className="lds-dual-ring"></div>
                                        ) : (
                                            <span>Log in</span>
                                        )}
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
