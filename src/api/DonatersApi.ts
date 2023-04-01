import { donatersType, donationTime, testType } from '@typess/index'

import api from './index'

export class TopDonatersInfo {
    static async getDonatorsInfo() {
        try {
            const { data } = await api.get<testType>('/donaters_top/')
            return data.results
        } catch (error) {
            console.log(error)
        }
    }
}
