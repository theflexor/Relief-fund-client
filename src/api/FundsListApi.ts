import {
    CurrentFundType,
    donationsTypes,
    donationTime,
    FundsType,
} from '@typess/index'

import api from './index'

export class FundsInfo {
    static async getFundsInfo() {
        try {
            const {
                data: { results },
            } = await api.get<CurrentFundType>(
                '/helpers_funds_list/?verified_account=&user_type=fund&region=&category=&username=',
            )
            return results
        } catch (error) {
            console.log(error)
        }
    }
}
