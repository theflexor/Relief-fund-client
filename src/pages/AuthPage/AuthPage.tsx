import { useState } from 'react'

import { Login, Register } from '@components/index'

import styles from './auth-page.module.scss'

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className={styles.auth}>
                {isLogin ? <Login  /> : <Register />}
        </div>
    )
}
