import { useState } from 'react'
import { Donate } from 'src/api/DonateApi'

import { DonateType } from '@typess/index'

import facebook from '../../assets/faceboo.svg'
import heart from '../../assets/heart.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import svg from '../../assets/verification.svg'
import wallet from '../../assets/wallet (1) .svg'
import styles from './FundsPage.module.scss'

export const FundsPage = () => {
    const [amount, setAmount] = useState<number>(-1)
    const handleClick = async () => {
        const obj: DonateType = {
            amount: amount,
            id: '28',
        }
        const res = await Donate.donateToFund(obj)
        console.log(res)
    }

    return (
        <div>
            <div className={styles.container}>
                <section className={styles.help_wrapper}>
                    <div className={styles.wrapper_left}>
                        <div>Проверенный фонд</div>
                        <img src={svg} />
                    </div>
                    <div className={styles.wrapper_right}>
                        <span>название фонда</span>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Officia provident nisi ipsa facere, ad fuga
                            esse labore incidunt ea, ipsum tenetur! Et sed minus
                            officia vel soluta delectus consectetur architecto?
                        </p>
                        <button>помочь фонду</button>
                    </div>
                </section>
                <section className={styles.aboutFund__title}>
                    <h2>О фонде</h2>
                    <hr />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s,when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently withdesktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum
                    </p>
                    <div className={styles.aboutFund_Wrapper}>
                        <div className={styles.aboutFund_info}>
                            <img src={wallet} alt="wallet" />
                            <div className={styles.collected}>
                                <div>20 546 980 </div>
                                <span>Собрано</span>
                            </div>
                        </div>
                        <div className={styles.aboutFund_info}>
                            <img src={heart} alt="heart" />
                            <div className={styles.collected}>
                                <div>5430 </div>
                                <span>Поддерживают ежемесячно</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.container}>
                <section className={styles.programms}>
                    <h2>Программы</h2>
                </section>
                <hr />
                <div className={styles.programms_collums}>
                    <div className={styles.collum}>
                        <div>
                            <img
                                src="https://i.pinimg.com/236x/ab/93/c5/ab93c522b4941f503caa2df0251e0cc2.jpg"
                                alt=""
                            />
                        </div>
                        <span>Название</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quod dolores labore, voluptas, officia
                            voluptates mollitia sint adipisci dignissimos,
                            aliquid animi debitis laborum! Sapiente nesciunt
                            veniam harum nulla, rem voluptates nihil?
                        </p>
                        <button>Пожертвовать</button>
                    </div>
                    <div className={styles.collum}>
                        <div className={styles.collum_image}>
                            <img
                                src="https://i.pinimg.com/236x/ab/93/c5/ab93c522b4941f503caa2df0251e0cc2.jpg"
                                alt=""
                            />
                        </div>
                        <span>Название</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quod dolores labore, voluptas, officia
                            voluptates mollitia sint adipisci dignissimos,
                            aliquid animi debitis laborum! Sapiente nesciunt
                            veniam harum nulla, rem voluptates nihil?
                        </p>
                        <button>Пожертвовать</button>
                    </div>
                    <div className={styles.collum}>
                        <div className={styles.collum_image}>
                            <img
                                src="https://i.pinimg.com/236x/ab/93/c5/ab93c522b4941f503caa2df0251e0cc2.jpg"
                                alt=""
                            />
                        </div>
                        <span>Название</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quod dolores labore, voluptas, officia
                            voluptates mollitia sint adipisci dignissimos,
                            aliquid animi debitis laborum! Sapiente nesciunt
                            veniam harum nulla, rem voluptates nihil?
                        </p>
                        <button>Пожертвовать</button>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <section className={styles.donate}>
                    <h2>
                        Оформите пожертвование в пользу организации «Название»
                    </h2>
                    <div className={styles.donate_button}>
                        <button>Пожертвовать </button>
                    </div>
                </section>
                <section className={styles.make}>
                    <h2>Make a donation to the organization</h2>
                    <div className={styles.donate_input}>
                        <p>Enter the donation amount</p>
                        <input
                            onChange={(e) => setAmount(Number(e.target.value))}
                            type="text"
                        />
                        <button onClick={handleClick}>Donate</button>
                    </div>
                </section>
            </div>
            <div className={styles.container}>
                <section className={styles.requisites}>
                    <div>
                        <h2>Реквизиты</h2>
                        <hr />
                    </div>
                    <div className={styles.bank}>
                        <h2>Банк</h2>
                        <hr />
                    </div>
                    <div className={styles.bank_info}>
                        <div>
                            ОБФ `Help the Children - SKD` 720025, Кыргызская
                            Республикаг. Бишкек, 4 мкр., ул. Каралаева, 26/1
                            ИНН: 03011200710068 ОКПО: 24559947
                        </div>
                    </div>
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.contacts}>
                    <h2>Контакты фонда</h2>
                    <hr />
                    <div className={styles.contact_info}>
                        <div className={styles.contact_adress}>
                            <ul>
                                <li>Кыргызыстан</li>
                                <li>Проспект Масалиева д.43а </li>
                                <li>+7(921)907-65-7</li>
                                <li>E-mail: info(название)@.ru</li>
                            </ul>
                        </div>
                        <div className={styles.contact_icons}>
                            <ul>
                                <li>
                                    <img src={facebook} alt="" />
                                </li>
                                <li>
                                    <img src={twitter} alt="" />
                                </li>
                                <li>
                                    <img src={instagram} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
