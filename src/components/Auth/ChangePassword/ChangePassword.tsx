import { Field, Formik, FormikErrors } from 'formik'
import { Link } from 'react-router-dom'
import { AuthClient } from 'src/api/authApi'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'
import { changePasswordType } from '@typess/index'
import { ResetPasswordValidate } from '@utils/validation'

import styles from './changePassword.module.scss'

export const ChangePassword = () => {
    const initialValues: changePasswordType = {
        code: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleForm = async (values: changePasswordType) => {
        const data = await AuthClient.changePassword(values)
        console.log(data)
    }

    return (
        <div className={styles.login}>
            <div className={styles.main}>
                <h1 className={styles.main_title}>Change password</h1>
                <p className={styles.main_paragraph}>
                    Please input your information in the fields below to enter
                    your Journey platform.{' '}
                </p>
                <div className={styles.main_hr} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={ResetPasswordValidate}
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
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
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
                            <MyInput
                                variant="large"
                                type="text"
                                name="code"
                                text="Code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.code}
                                error={
                                    errors.code && touched.code && errors.code
                                }
                            />

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
                            <MyInput
                                variant="large"
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
