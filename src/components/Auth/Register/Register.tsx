import { Field, Formik } from 'formik'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/Input/MyInput'
import { SelectField } from '@components/Input/MyInputSelect/MyInputSelect'
import { AuthUserTypes } from '@typess/index'

import styles from './register.module.scss'

export const Register = () => {
    const initialValues: AuthUserTypes = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        confirmCondition: false,
    }
    const options = [
        { value: 'Only donation', label: 'Only donation' },
        { value: 'User helper', label: 'User helper' },
        { value: 'Fond helper', label: 'Fond helper' },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.register}>
                <div className={styles.main}>
                    <p className={styles.main_link}>
                        Allready a member?
                        <img src="/userIcon.png" alt="user" />
                    </p>
                    <h1 className={styles.main_title}>
                        Input your information
                    </h1>
                    <Formik
                        initialValues={initialValues}
                        validate={(values) => {
                            const errors: AuthUserTypes = {}

                            if (!values.email) {
                                errors.email = 'Required'
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email,
                                )
                            ) {
                                errors.email = 'Invalid email address'
                            }
                            if (!values.firstName) {
                                errors.firstName = 'Required'
                            }
                            if (!values.lastName) {
                                errors.lastName = 'Required'
                            }
                            return errors
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
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
                                className={styles.main_form}
                            >
                                <div className={styles.main_form_inputs}>
                                    <MyInput
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                        value={values.firstName!}
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
                                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                        value={values.lastName!}
                                        error={
                                            errors.lastName &&
                                            touched.lastName &&
                                            errors.lastName
                                        }
                                    />
                                </div>
                                <div>
                                    <MyInput
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                        value={values.email!}
                                        error={
                                            errors.email &&
                                            touched.email &&
                                            errors.email
                                        }
                                    />
                                </div>
                                <div>
                                    <Field
                                        name={'userType'}
                                        component={SelectField}
                                        options={options}
                                    />
                                </div>
                                <hr />
                                <div className={styles.main_form_inputs}>
                                    <MyInput
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                        value={values.password!}
                                        error={
                                            errors.password &&
                                            touched.password &&
                                            errors.password
                                        }
                                    />
                                    <MyInput
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                        value={values.confirmPassword!}
                                        error={
                                            errors.confirmPassword &&
                                            touched.confirmPassword &&
                                            errors.confirmPassword
                                        }
                                    />
                                </div>
                                <hr />
                                <div className={styles.main_form_buttons}>
                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="confirmCondition"
                                        />
                                        <p>
                                            I agree with
                                            <span>terms and conditins.</span>
                                        </p>
                                    </label>
                                    <PrimeButton
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Register
                                    </PrimeButton>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className={styles.side}>asdkjaslkdjalkdj</div>
        </div>
    )
}
