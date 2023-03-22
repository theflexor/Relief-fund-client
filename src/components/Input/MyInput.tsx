import { ChangeEvent, FocusEvent } from 'react'

import styles from './input.module.scss'

type InputProps = {
    text?: string
    placeholder?: string
    type?: string
    name: string
    onChange: (e: ChangeEvent<unknown>) => void
    onBlur: (e: FocusEvent<unknown, Element>) => void
    value: string
    error: string | false | undefined
}

export const MyInput = ({
    text,
    placeholder,
    type,
    error,
    name,
    onBlur,
    onChange,
    value,
}: InputProps) => {
    return (
        <div className={styles.myInput}>
            <p className={styles.myInput_text}>
                <span>{text}</span>
                <span>{error}</span>
                <img src="/questionIcon.png" alt="" />
            </p>
            <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}
