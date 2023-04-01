import { DonateType } from '@typess/index'

import api from './index'

export class Donate {
    static async donateToFund(donate: DonateType) {
        try {
            const { data } = await api.post<DonateType>(
                `donate_to_fund/${donate.id}`,
                donate,
            )
            return data
        } catch (error) {
            console.log(error)
            return
        }
    }
}
