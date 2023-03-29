import React from 'react'

import styles from './Review.module.scss'

export const Review = () => {
    return (
        <div className={styles.container}>
            <section className={styles.reviews}>
                <h2>Отзывы</h2>
                <div className={styles.reviews_wrapper}>
                    <div>
                        <img
                            className={styles.reviews_image}
                            src="https://i.pinimg.com/236x/94/6f/99/946f994661d4eac91baef7f24767200a.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <span>user name</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam, aperiam? Provident, fuga tempore eaque
                            explicabo dolorum veritatis fugiat voluptate
                            repellat iure, non hic aut? Architecto adipisci a
                            beatae quis iusto.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
