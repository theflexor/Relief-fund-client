import React, { useEffect, useState } from 'react'
import { FundsInfo } from 'src/api/FundsListApi'

import { FundsType } from '@typess/index'

import FundsPageItem from './FundsPageItem/FundsPageItem'
import styles from './FundsPageList.module.scss'

const FundsPageList = () => {
    const [fund, setFund] = useState<FundsType[]>()
    useEffect(() => {
        getFundsList()
    }, [])

    const getFundsList = async () => {
        const data = await FundsInfo.getFundsInfo()
        console.log(data, 1123)
        if (data) {
            setFund(data)
        }
    }

    return (
        <div>
            <ul className={styles.list}>
                {fund?.map((item) => (
                    <FundsPageItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default FundsPageList
