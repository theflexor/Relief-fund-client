import { ButtonHTMLAttributes } from 'react'

import styles from './button.module.scss'

export const PrimeButton = (
    props: ButtonHTMLAttributes<HTMLButtonElement> & { children: string },
) => {
    return (
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    )
}

