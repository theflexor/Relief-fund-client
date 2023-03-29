import { Field, Formik, FormikErrors } from 'formik'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthClient } from 'src/api/authApi'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'
import { SelectField } from '@components/Input/MyInputSelect/MyInputSelect'
import { RegisterTypes } from '@typess/index'

import styles from './register.module.scss'

export const Register = () => {
    const initialValues: RegisterTypes = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        selectUserType: { label: '', value: '' },
        condition: false,
    }

    const handleAuth = async (values: RegisterTypes) => {
        const data = await AuthClient.registration(values)
        console.log(data)
    }
    return (
        <div className={styles.register}>
            <div className={styles.main}>
                <Link to="/auth/login" className={styles.main_link}>
                    Allready a member? <img src="/userIcon.png" alt="user" />
                </Link>
                <h1 className={styles.main_title}>Input your information</h1>
                <div className={styles.main_hr} />
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors: FormikErrors<RegisterTypes> = {}
                        if (values.firstName.length == 0) {
                            errors.firstName = 'Required'
                        }
                        if (values.lastName.length == 0) {
                            errors.lastName = 'Required'
                        }
                        if (!values.selectUserType) {
                            errors.lastName = 'Required'
                        }
                        if (values.password.length < 3) {
                            errors.password = 'Required'
                        }
                        if (values.confirmPassword !== values.password) {
                            errors.confirmPassword = 'Error'
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
                        toast(values.firstName)
                        handleAuth(values)
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
                                    type="text"
                                    name="firstName"
                                    text="First Name"
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
                                    text="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    error={
                                        errors.lastName &&
                                        touched.lastName &&
                                        errors.lastName
                                    }
                                />
                            </div>
                            <div className={styles.main_form_item}>
                                {' '}
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
                                <Field
                                    name="selectUserType"
                                    id="selectUserType"
                                    isMulti={false}
                                    component={SelectField}
                                    error={
                                        errors.selectUserType &&
                                        touched.selectUserType &&
                                        errors.selectUserType
                                    }
                                    options={[
                                        {
                                            value: 'Only donation ',
                                            label: 'One donation',
                                        },
                                        {
                                            value: 'User helper',
                                            label: 'User helper',
                                        },
                                        {
                                            value: 'Fond helper',
                                            label: 'Fond helper',
                                        },
                                    ]}
                                />
                            </div>

                            <div className={styles.main_hr} />
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

                            <div className={styles.main_form_item}>
                                <div className={styles.main_form_item_wrapper}>
                                    <Field type="checkbox" name="condition" />
                                    <p>
                                        I agree with
                                        <Link to="/auth">
                                            {' '}
                                            terms and conditins.
                                        </Link>
                                    </p>
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
