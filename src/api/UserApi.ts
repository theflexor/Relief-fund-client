import { UserTypes } from '@typess/index'

import api from './index'

export class UserApi {
    static async getProfileData(id: number) {
        try {
            const result = await api.get<UserTypes>(`/profile/${id}`)
            return result
        } catch (error) {
            console.log(error)
            return
        }
    }
}
