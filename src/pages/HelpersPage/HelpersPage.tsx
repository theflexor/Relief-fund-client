import React from 'react'

import { Footer, Header } from '@components/index'
import TopDonatersList from '@components/TopDonatersList/TopDonatersList'

import styles from './HelpersPage.module.scss'

function HelpersPage() {
    return (
        <div className={styles.helpersPage}>
            <div className={styles.container}></div>
            <h2 className={styles.title}>Foundation donaters</h2>
            <TopDonatersList />
        </div>
    )
}

export default HelpersPage
