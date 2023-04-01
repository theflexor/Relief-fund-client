import React, { useEffect, useState } from 'react'
import { DataInfo } from 'src/api/GraphApi'

import { donationTime } from '@typess/index'

import './InfoGraphik.scss'

const DonationsInfo = () => {
    const [donations, setDonations] = useState<donationTime>()

    useEffect(() => {
        getDataInfo()
    }, [])

    const getDataInfo = async () => {
        const data = await DataInfo.getDonations()
        setDonations(data)
    }
    return (
        <div className="donations-info">
            <div className="donations-info__item">
                <h3 className="donations-info__title">Донаты за день</h3>
                <p className="donations-info__value">
                    {donations?.today_donations}
                </p>
            </div>
            <div className="donations-info__item">
                <h3 className="donations-info__title">Донаты за месяц</h3>
                <p className="donations-info__value">
                    {donations?.last_30_days_donations}
                </p>
            </div>
            <div className="donations-info__item">
                <h3 className="donations-info__title">Донаты за все время</h3>
                <p className="donations-info__value">
                    {donations?.all_donations}
                </p>
            </div>
        </div>
    )
}

export default DonationsInfo
