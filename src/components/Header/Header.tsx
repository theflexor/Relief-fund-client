import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataInfo } from 'src/api/GraphApi'

import { useTypedSelector } from '@hooks/index'

import logo from '../../assets/logo.scg.svg'
import styles from './Header.module.scss'

export const Header = () => {
    const { isAuth } = useTypedSelector((store) => store.auth.isAuth)
    return (
        <section className={styles.navbar_section}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link to="/">
                        {' '}
                        <img src={logo} alt="" />
                    </Link>
                    <ul className={styles.navbar_list}>
                        <li>
                            <Link className={styles.navbar_items} to="/">
                                Donation
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.navbar_items}
                                to="/about-us"
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navbar_items} to="/funds">
                                Fonds
                            </Link>
                        </li>
                    </ul>

                    {!isAuth ? (
                        <Link to="/login">
                            <button className={styles.login_button}>
                                sign out
                            </button>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button className={styles.login_button}>
                                sign in
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}
