import React from 'react'

import { donatersType } from '@typess/index'

import facebook from '../../../assets/faceboo.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'

import './TopDonaterItem.scss'

interface TopDonatersItemProps {
    item: donatersType
}

const TopDonatersItem: React.FC<TopDonatersItemProps> = ({ item }) => {
    return (
        <div className="card_list">
            <div className="user-card">
                <div className="user-card__header">
                    <img src={item.user_photo} alt="Profile picture" />
                </div>
                <div className="user-card__content">
                    <h2 className="user-card__name">
                        {item.first_name + ' ' + item.last_name}
                    </h2>
                    <span className="email">{item.email}</span>
                    <span>{item.requisites}</span>

                    <ul className="user-card__links">
                        <li>
                            <a href={item.facebook_url}>
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href={item.telegram_url}>
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopDonatersItem
