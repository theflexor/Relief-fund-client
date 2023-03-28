import { FieldProps } from 'formik'
import React from 'react'
import Select from 'react-select'

import styles from './myInputSelect.module.scss'

type SelectFieldProps = {
    options: { value: string; label: string }[]
    error: string
}
export const SelectField: React.FC<FieldProps & SelectFieldProps> = ({
    field,
    form,
    options,
    error,
}) => (
    <div className={styles.myInput}>
        <p className={styles.myInput_text}>
            <span>User type</span>
            <span>{error}</span>
            <img src="/questionIcon.png" alt="" />
        </p>
        <Select
            className={styles.input}
            options={options}
            name={field.name}
            styles={{
                control: (base) => ({
                    ...base,
                    border: '1px solid #D1D1D1',
                    borderRadius: '10px',
                    height: '48px',
                    fontSize: '14px',
                    boxShadow: 'none',
                }),
                menu: (base) => ({
                    ...base,
                    border: '1px solid #D1D1D1',
                    borderRadius: '10px',
                    fontSize: '14px',
                }),
            }}
            value={
                options
                    ? options.find(
                          (option: { value: string; label: string }) =>
                              option.value === field.value,
                      )
                    : ''
            }
            onChange={(option) => form.setFieldValue(field.name, option)}
            onBlur={field.onBlur}
        />
    </div>
)
