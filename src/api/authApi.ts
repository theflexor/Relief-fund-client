import { RegisterTypes } from './../types/index'
import api from './index'

export class AuthClient {
    // static async login(username: string, password: string) {
    //     try {
    //         const result = await api.post('/auth/login', { username, password })
    //         if (result.status == 200) {
    //             localStorage.setItem('auth', JSON.stringify(result.data))
    //             return result
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
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
            const result = await api.post('/register/', {
                first_name: firstName,
                last_name: lastName,
                username: `${firstName} username`,
                email: email,
                password: password,
                password_confirm: confirmPassword,
                user_type: selectUserType.value,
            })
            if (result.status == 201) {
                localStorage.setItem('auth', JSON.stringify(result.data))
                return result
            }
        } catch (e) {
            console.log(e)
        }
    }
}
