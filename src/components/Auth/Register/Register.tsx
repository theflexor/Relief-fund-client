import { Field, Formik, FormikErrors } from 'formik'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthClient } from 'src/api/authApi'
import { Regions, states } from 'src/data'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'
import { SelectField } from '@components/Input/MyInputSelect/MyInputSelect'
// import { setAuth } from '@store/slices/AuthSlice'
import { RegisterTypes } from '@typess/index'
import { Schema, Schema2 } from '@utils/validation'

import styles from './register.module.scss'

export const Register = () => {
    const navigate = useNavigate()
    const [typeUser, setTypeUser] = useState<string | null>('default_user')
    const [loader, setLoader] = useState<boolean>(false)

    const initialValues: RegisterTypes = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        selectUserType: '',
        condition: false,
        phone: '',
        region: '',
    }

    const handleType = (text: string) => setTypeUser(text)
    const handleAuth = async (values: RegisterTypes) => {
        setLoader(true)
        const data = await AuthClient.registration(values)
        if (data?.status == 200 || data?.status == 201) {
            toast.success('successfule')
            toast.warn('Please confirm your email to log in', {
                autoClose: false,
            })
            navigate('/auth/login')
        }
        setLoader(false)
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
                    validationSchema={
                        typeUser == 'default_user' ? Schema2 : Schema
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        handleAuth(values)
                        setSubmitting(false)
                    }}
                    validate={(values) => {
                        if (values.selectUserType !== typeUser) {
                            handleType(values.selectUserType)
                        }
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
                                    variant="large"
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
                                {typeUser !== 'default_user' && (
                                    <>
                                        <MyInput
                                            variant="large"
                                            type="phone"
                                            name="phone"
                                            text="Phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={String(values.phone)}
                                            error={
                                                errors.phone &&
                                                touched.phone &&
                                                errors.phone
                                            }
                                        />
                                    </>
                                )}
                            </div>
                            <div className={styles.main_form_item}>
                                <Field
                                    name="selectUserType"
                                    id="selectUserType"
                                    text="User type"
                                    isMulti={false}
                                    onChange={handleType}
                                    component={SelectField}
                                    error={
                                        errors.selectUserType &&
                                        touched.selectUserType &&
                                        errors.selectUserType
                                    }
                                    options={[
                                        {
                                            value: 'default_user',
                                            label: 'One donation',
                                        },
                                        {
                                            value: 'user_helper',
                                            label: 'User helper',
                                        },
                                        {
                                            value: 'fund',
                                            label: 'Fund helper',
                                        },
                                    ]}
                                />
                                {/* <MyInput
                                    variant="large"
                                    type="text"
                                    name="username"
                                    text="Username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    error={
                                        errors.username &&
                                        touched.username &&
                                        errors.username
                                    }
                                /> */}
                            </div>

                            <div className={styles.main_hr} />
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
                            </div>
                            <div
                                style={{
                                    display:
                                        typeUser == 'default_user'
                                            ? 'none'
                                            : 'flex',
                                }}
                                className={styles.main_form_item}
                            >
                                <Field
                                    name="region"
                                    id="region"
                                    text="Region"
                                    isMulti={false}
                                    error={
                                        errors.region &&
                                        touched.region &&
                                        errors.region
                                    }
                                    component={SelectField}
                                    options={Regions.map((text) => ({
                                        value: text,
                                        label: text,
                                    }))}
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
                                        {loader ? (
                                            <div className="lds-dual-ring"></div>
                                        ) : (
                                            <span>Submit</span>
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
