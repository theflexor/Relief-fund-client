import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './button.module.scss'

export const PrimeButton = (
    props: ButtonHTMLAttributes<HTMLButtonElement> & {
        children: ReactNode | string 
    },
) => {
    return (
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    )
}
