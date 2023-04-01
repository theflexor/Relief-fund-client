import { Field } from 'formik'
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
    variant?: 'large' | 'small'
    noDesc?: boolean
    disabled?: boolean
}

export const MyInput = ({
    noDesc,
    variant = 'small',
    text,
    placeholder,
    type,
    error,
    name,
    onBlur,
    onChange,
    disabled = false,
    value,
}: InputProps) => {
    return (
        <div
            className={styles.myInput}
            style={{ maxWidth: variant == 'small' ? '605px' : '300px' }}
        >
            <p
                style={{ display: noDesc ? 'none' : 'flex' }}
                className={styles.myInput_text}
            >
                <span>{text}</span>
                <span>{error}</span>
                <img src="/questionIcon.png" alt="" />
            </p>
            <Field
                style={{
                    border: error ? '1px solid red' : '1px solid #D1D1D1',
                    padding: '7px',
                    height: variant == 'small' ? '32px' : '48px',
                }}
                onChange={onChange}
                disabled={disabled}
                onBlur={onBlur}
                value={value}
                name={name}
                placeholder={variant == 'small' ? text : ''}
                type={type}
            />
        </div>
    )
}
