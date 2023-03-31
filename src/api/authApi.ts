import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { RegisterTypes } from './../types/index'
import api from './index'

export class AuthClient {
    static async login(email: string, password: string) {
        try {
            const result = await api.post('/login', { email, password })
            if (result.status == 200) {
                localStorage.setItem('auth', JSON.stringify(result.data))
                return result
            }
        } catch (e) {
            console.log(e)
        }
    }
    static async registration({
        condition,
        confirmPassword,
        email,
        firstName,
        lastName,
        password,
        selectUserType,
    }: RegisterTypes) {
        try {
            const result = await api.post('register/', {
                first_name: firstName,
                last_name: lastName,
                username: `${firstName} username`,
                email: email,
                password: password,
                password_confirm: confirmPassword,
                user_type: selectUserType.type,
            })
            if (result.status == 200) {
                localStorage.setItem('auth', JSON.stringify(result.data))
                return result
            }
        } catch (e: any | AxiosError) {
            toast.error(e?.response?.data?.username[0])
            if (e?.response?.data?.username.length > 1) {
                toast.error(e?.response?.data?.username[1])
            }
            console.log(e)
            return
        }
    }
    static async changePassword(
        password: string,
        newPassword: string,
        confirmPassword: string,
    ) {
        try {
            const result = await api.post('/change-password', {
                old_password: password,
                new_password: newPassword,
                new_password_confirm: confirmPassword,
            })
            if (result.status == 200) {
                localStorage.setItem('auth', JSON.stringify(result.data))
                return result
            }
        } catch (e) {
            console.log(e)
        }
    }
}
