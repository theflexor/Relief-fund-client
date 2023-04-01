import { Field, Formik, FormikErrors } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthClient } from 'src/api/authApi'
import * as Yup from 'yup'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'

import styles from './resetPassword.module.scss'

interface LoginErrorTypes {
    email: string
}
export const Schema = Yup.object().shape({
    email: Yup.string().email().required(),
})
export const ResetPassword = () => {
    const navigate = useNavigate()
    const initialValues: LoginErrorTypes = {
        email: '',
    }

    const handleForm = async (values: LoginErrorTypes) => {
        const data = await AuthClient.resetPassword(values)
        if (data?.status == 200) {
            toast.success('please check your email')
            navigate('/auth/change')
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.main}>
                <h1 className={styles.main_title}>Forgot password?</h1>
                <p className={styles.main_paragraph}>
                    Please input your information in the fields below to enter
                    your Journey platform.{' '}
                </p>
                <div className={styles.main_hr} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true)
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
