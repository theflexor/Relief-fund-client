import React, { useEffect, useState } from 'react'

import './List.scss'

import { donatersType } from '@typess/index'

import { TopDonatersInfo } from '../../api/DonatersApi'
import TopDonatersItem from './TopDonatersItem/TopDonatersItem'

const TopDonatersList = () => {
    const [donaters, setDonaters] = useState<donatersType[]>()
    useEffect(() => {
        getTopDonators()
    }, [])

    const getTopDonators = async () => {
        const data = await TopDonatersInfo.getDonatorsInfo()
        console.log(data)
        setDonaters(data)
    }

    return (
        <div>
            <ul className="list">
                {donaters?.map((item) => (
                    <TopDonatersItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default TopDonatersList
