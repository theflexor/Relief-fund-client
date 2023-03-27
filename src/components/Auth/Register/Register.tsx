import { Formik } from 'formik'

import { MyInput } from '@components/Input/MyInput'

import styles from './register.module.scss'

type Props = {
    type: string
}

export const Register = (props: Props) => {
    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    return (
        <div className={styles.register}>
            <div className={styles.main}>
                <p className={styles.main_link}>
                    Allready a member? <img src="/userIcon.png" alt="user" />
                </p> 
                <h1 className={styles.main_title}>
                    Input your <br /> information
                </h1>
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {
                            ...initialValues,
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
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                        }, 400)
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
                            <MyInput
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                error={
                                    errors.firstName &&
                                    touched.firstName &&
                                    errors.firstName
                                }
                            />
                            <MyInput
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                error={
                                    errors.lastName &&
                                    touched.lastName &&
                                    errors.lastName
                                }
                            />
                            <MyInput
                                type="email"
                                name="email"
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
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={
                                    errors.password &&
                                    touched.password &&
                                    errors.password
                                }
                            />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
            <div className={styles.side}></div>
        </div>
    )
}
