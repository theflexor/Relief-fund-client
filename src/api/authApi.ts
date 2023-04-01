import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { ErrorHandler } from '@utils/ErrorHandler'

import {
    changePasswordType,
    LoginResponseTypes,
    LoginTypes,
    RegisterTypes,
} from './../types/index'
import api from './index'

export class AuthClient {
    static async login({ email, password, saveMe }: LoginTypes) {
        try {
            const result = await api.post<LoginResponseTypes>(
                '/login/',
                {
                    email: email,
                    password: password,
                },
            )
            return result
        } catch (e: any | AxiosError) {
            ErrorHandler(e)
            return
        }
    }
    static async registration({
        confirmPassword,
        email,
        firstName,
        lastName,
        password,
        selectUserType,
        phone,
        region,
    }: RegisterTypes) {
        const config = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: confirmPassword,
            user_type: selectUserType,
        }
        const config2 = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: confirmPassword,
            user_type: selectUserType,
            phone_number: phone,
            region: region?.trim(),
        }
        try {
            const result = await api.post(
                'register/',
                selectUserType == 'default_user' ? config : config2,
            )
            return result
        } catch (e: any | AxiosError) {
            console.log(e)
            ErrorHandler(e)
            return e
        }
    }
    static async changePassword({
        code,
        confirmPassword,
        password,
        email,
    }: changePasswordType) {
        try {
            const result = await api.post('/forgot_password_complete/', {
                code: code,
                email: email,
                password: password,
                password_confirm: confirmPassword,
            })
            return result
        } catch (e: any | AxiosError) {
            console.log(e)
            ErrorHandler(e)
        }
    }
    static async resetPassword({ email }: { email: string }) {
        try {
            const result = await api.post('/forgot-password/', {
                email: email,
            })
            return result
        } catch (e: any | AxiosError) {
            console.log(e)
            ErrorHandler(e)
        }
    }
}
