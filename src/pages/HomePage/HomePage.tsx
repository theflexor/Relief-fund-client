import React from 'react'
import { Link } from 'react-router-dom'

import DonationsInfo from '@components/InfoGraphik/InfoGraphik'
import { ResponsivePie } from '@nivo/pie'

import arch from '../../assets/arch.png'
import backgroundVideo from '../../assets/backgroundVideo.mp4'
import eco from '../../assets/eco.png'
import edu from '../../assets/edu.png'
import med from '../../assets/health.png'
import TopDonaterList from '../../components/TopDonatersList/TopDonatersList.jsx'
import styles from './HomePage.module.scss'

export const HomePage: React.FC = () => {
    return (
        <section className={styles.homePage}>
            <div>
                <video className={styles.background_video} autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className={styles.container}>
                <div className={styles.homePage_info}>
                    <h2 className={styles.homePage_title}>“Save the Day”</h2>
                    <p className={styles.homePage_descr}>
                        Save the day is a fundraising platform that allows
                        individuals andorganizations to raise money for any kind
                        of event, project, or charitable cause.This platform can
                        be great tool for raising funds for various causes and,
                        in some cases, are equipped with payment or transaction
                        security
                    </p>
                </div>
                <DonationsInfo />
                <div className={styles.button_div}>
                    <Link to="helpers">
                        <button className={styles.button}>Top donators</button>
                    </Link>
                </div>
                <TopDonaterList />
                <div className={styles.button_div}>
                    <button className={styles.button}>Funds</button>
                </div>
                <div className={styles.funds_list}>
                    <div className={styles.funds_item}>
                        <img src={edu} alt="" />
                        <p>Education</p>
                    </div>
                    <div className={styles.funds_item}>
                        <img src={med} alt="" />
                        <p>Medicine</p>
                    </div>
                    <div className={styles.funds_item}>
                        <img src={eco} alt="" />
                        <span>Ecology</span>
                    </div>
                    <div className={styles.funds_item}>
                        <img src={arch} alt="" />
                        <span>Architecture</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
