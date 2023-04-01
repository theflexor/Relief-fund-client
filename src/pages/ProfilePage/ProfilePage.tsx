import { Field, Formik, FormikErrors } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { UserApi } from 'src/api/UserApi'

import { PrimeButton } from '@components/Button/Button'
import { MyInput } from '@components/index'
import { useTypedSelector } from '@hooks/index'
import { setDataUser } from '@store/slices/AuthSlice'
import { RegisterTypes, UserTypes } from '@typess/index'

import styles from './profilePage.module.scss'

export const ProfilePage = () => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState<boolean>(true)
    const { isAuth, access, id, user } = useTypedSelector((state) => state.auth)
    // const [editUser, setEditUser] = useState<UserTypes>(user ? user : {})
    useEffect(() => {
        const fetchData = async () => {
            const res = await UserApi.getProfileData(id)
            if (res?.status == 200) {
                dispatch(setDataUser(res?.data))
                // setEditUser(res.data)
            }
        }
        fetchData()
    }, [])

    const handleAuth = async (values: UserTypes) => {
        // const data = await AuthClient.registration(values)
        // console.log(data)
    }
    return (
        <div>
            <div className={styles.profile}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.edit}>
                            <button
                                className={styles.edit_button}
                                onClick={() => setEdit(!edit)}
                            >
                                {edit ? (
                                    <img src="/profile/edit.png" alt="" />
                                ) : (
                                    <img src="/profile/x.jpg" alt="" />
                                )}
                            </button>
                        </div>
                        <div className={styles.profile_image}>
                            <div
                                className={styles.profile_image_round}
                                style={{
                                    background: "url('profile/person.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                        </div>
                        <div className={styles.profile_form}>
                            <Formik
                                initialValues={user ? user : {}}
                                onSubmit={(values, { setSubmitting }) => {
                                    toast(values.first_name)
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
                                    <form
                                        onSubmit={handleSubmit}
                                        className={styles.profile_form_main}
                                    >
                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
                                            type="text"
                                            name="first_name"
                                            text="First Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first_name}
                                            error={
                                                errors.first_name &&
                                                touched.first_name &&
                                                errors.first_name
                                            }
                                        />
                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
                                            type="text"
                                            name="lastName"
                                            text="Last Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.last_name}
                                            error={
                                                errors.last_name &&
                                                touched.last_name &&
                                                errors.last_name
                                            }
                                        />
                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
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
                                        {user?.user_type ==
                                            'default_user' && (
                                            <MyInput
                                                disabled={edit}
                                                variant="small"
                                                noDesc
                                                type="adress"
                                                name="adress"
                                                text="Adress"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                                error={
                                                    errors.address &&
                                                    touched.address &&
                                                    errors.address
                                                }
                                            />
                                        )}

                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
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
                                            disabled={edit}
                                            variant="small"
                                            noDesc
                                            type="text"
                                            name="aboutMe"
                                            text="About me"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.about_user}
                                            error={
                                                errors.about_user &&
                                                touched.about_user &&
                                                errors.about_user
                                            }
                                        />
                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
                                            type="password"
                                            name="requisites"
                                            text="Requisites"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.requisites}
                                            error={
                                                errors.requisites &&
                                                touched.requisites &&
                                                errors.requisites
                                            }
                                        />
                                        <MyInput
                                            disabled={edit}
                                            variant="small"
                                            noDesc
                                            type="text"
                                            name="countriesHelps"
                                            text="Countries where helper helps "
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.countriesHelps}
                                            error={
                                                errors.countriesHelps &&
                                                touched.countriesHelps &&
                                                errors.countriesHelps
                                            }
                                        />
                                        <div className={styles.form_lastInput}>
                                            <MyInput
                                                disabled={edit}
                                                variant="small"
                                                noDesc
                                                type="text"
                                                name="education"
                                                text="Education"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.education}
                                                error={
                                                    errors.education &&
                                                    touched.education &&
                                                    errors.education
                                                }
                                            />
                                            <div
                                                style={{
                                                    display: edit
                                                        ? 'flex'
                                                        : 'none',
                                                }}
                                                className={styles.form_links}
                                            >
                                                <button>
                                                    <img
                                                        src="/profile/twitter.png"
                                                        alt=""
                                                    />
                                                </button>
                                                <button>
                                                    <img
                                                        src="/profile/facebook.png"
                                                        alt=""
                                                    />
                                                </button>
                                                <button>
                                                    <img
                                                        src="/profile/telegram.png"
                                                        alt=""
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: edit ? 'none' : 'flex',
                                            }}
                                            className={styles.form_linksInput}
                                        >
                                            <div
                                                className={
                                                    styles.form_linksInput_item
                                                }
                                            >
                                                <img
                                                    src="/profile/twitter.png"
                                                    alt=""
                                                />
                                                <MyInput
                                                    disabled={edit}
                                                    variant="small"
                                                    noDesc
                                                    type="text"
                                                    name="twiiter"
                                                    text="Url"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={
                                                        values.countriesHelps
                                                    }
                                                    error={
                                                        errors.countriesHelps &&
                                                        touched.countriesHelps &&
                                                        errors.countriesHelps
                                                    }
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.form_linksInput_item
                                                }
                                            >
                                                <img
                                                    src="/profile/telegram.png"
                                                    alt=""
                                                />
                                                <MyInput
                                                    disabled={edit}
                                                    variant="small"
                                                    noDesc
                                                    type="text"
                                                    name="telegram"
                                                    text="Url"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={
                                                        values.countriesHelps
                                                    }
                                                    error={
                                                        errors.countriesHelps &&
                                                        touched.countriesHelps &&
                                                        errors.countriesHelps
                                                    }
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.form_linksInput_item
                                                }
                                            >
                                                <img
                                                    src="/profile/facebook.png"
                                                    alt=""
                                                />
                                                <MyInput
                                                    disabled={edit}
                                                    variant="small"
                                                    noDesc
                                                    type="text"
                                                    name="facebook"
                                                    text="Url"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={
                                                        values.countriesHelps
                                                    }
                                                    error={
                                                        errors.countriesHelps &&
                                                        touched.countriesHelps &&
                                                        errors.countriesHelps
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className={styles.wrapper_2}>
                            <div className={styles.profile_form_main_desc}>
                                <div
                                    className={
                                        styles.profile_form_main_desc_round
                                    }
                                />
                                <div
                                    className={
                                        styles.profile_form_main_desc_content
                                    }
                                >
                                    <p
                                        className={
                                            styles.profile_form_main_desc_content_text
                                        }
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed occaecat cupidatat
                                        non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                    <img
                                        src={'/profile/char.png'}
                                        alt=""
                                        className={
                                            styles.profile_form_main_desc_content_image
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapper_3}>
                            <div className={styles.pays}>
                                <div className={styles.pays_item}>
                                    <img src="/profile/p1.png" alt="" />
                                    <div className={styles.pays_content}>
                                        <p
                                            className={
                                                styles.pays_content_count
                                            }
                                        >
                                            20 546 980
                                        </p>
                                        <p className={styles.pays_content_text}>
                                            Collected
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.pays_item}>
                                    <img src="/profile/p2.png" alt="" />
                                    <div className={styles.pays_content}>
                                        <p
                                            className={
                                                styles.pays_content_count
                                            }
                                        >
                                            5 430
                                        </p>
                                        <p className={styles.pays_content_text}>
                                            Support/month
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.logout}>
                                <PrimeButton>Logout</PrimeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
