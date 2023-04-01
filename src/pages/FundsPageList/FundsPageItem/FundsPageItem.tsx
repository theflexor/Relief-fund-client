import React from 'react'

import { FundsType } from '@typess/index'

import './FundsPageItem.scss'

interface FundsPageItemProps {
    item: FundsType
}
const FundsPageItem: React.FC<FundsPageItemProps> = ({ item }) => {
    return (
        <div className="container">
            <div className="fund-card">
                <img src={item.user_photo} className="fund-card__image" />
                <h3 className="fund-card__name">{item.first_name}</h3>
                <p className="fund-card__description"> region: {item.region}</p>
                <p className="email"> email: {item.email}</p>
                <div className="fund-card__raised-amount">
                    <span className="fund-card__raised-amount__label">
                        Raised:{' '}
                    </span>
                    <span className="fund-card__raised-amount__value">
                        {item.fund_donations_sum}
                    </span>
                </div>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fund-card__button"
                >
                    Donate Now
                </a>
            </div>
        </div>
    )
}

export default FundsPageItem
