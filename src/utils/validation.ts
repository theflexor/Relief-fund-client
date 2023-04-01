import { states } from 'src/data'
import * as Yup from 'yup'

import { CountryCode } from '@typess/index'

import 'yup-phone-lite'

export const Schema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .label('confirm password')
        .required()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    selectUserType: Yup.string().required(),
    phone: Yup.string()
        .phone(states as CountryCode[], 'write a valid number (+996)')
        .required(),
    region: Yup.string().required(),
})

export const Schema2 = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .label('confirm password')
        .required()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    selectUserType: Yup.string().required(),
})

export const LoginValid = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
})

export const ResetPasswordValidate = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .label('confirm password')
        .required()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    code: Yup.string().required(),
})
