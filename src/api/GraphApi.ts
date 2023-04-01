import { donationsTypes, donationTime } from '@typess/index'

import api from './index'

export class DataInfo {
    static async getDonations() {
        try {
            const { data } = await api.get<donationTime>('/main_page/')
            return data
        } catch (error) {
            console.log(error)
        }
    }
}
