// import footerBackground from '../../assets/footerBackground.png'
// import footerBack from '../../assets/otherComp.png'

// import './Footer.module.scss'

// export const Footer = () => {
//     return (
//         <section>
//             {/* <div>
//                 <img className="footer_bgimg" src={footerBack} alt="" />
//             </div> */}
//             <footer className="footer">
//                 <div className="footer__logo">
//                     <img
//                         src="img/logo.png"
//                         alt="Логотип благотворительной платформы"
//                     />
//                 </div>
//                 <nav className="footer__nav">
//                     <ul className="footer__list">
//                         <li className="footer__item">
//                             <a href="#" className="footer__link">
//                                 О нас
//                             </a>
//                         </li>
//                         <li className="footer__item">
//                             <a href="#" className="footer__link">
//                                 Как это работает
//                             </a>
//                         </li>
//                         <li className="footer__item">
//                             <a href="#" className="footer__link">
//                                 Контакты
//                             </a>
//                         </li>
//                         <li className="footer__item">
//                             <a href="#" className="footer__link">
//                                 Помощь
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <div className="footer__social">
//                     <a href="#" className="footer__social-link"></a>
//                     <a href="#" className="footer__social-link"></a>
//                     <a href="#" className="footer__social-link"></a>
//                 </div>
//                 <div className="footer__copy">
//                     <p className="footer__copy-text">
//                         &copy; 2023 Благотворительная платформа. Все права
//                         защищены.
//                     </p>
//                 </div>
//             </footer>
//         </section>
//     )
// }

import './Footer.scss'

import { colors } from 'react-select/dist/declarations/src/theme'

import facebook from '../../assets/faceboo.svg'
import instagram from '../../assets/instagram.svg'
import logo from '../../assets/logo.scg.svg'
import twitter from '../../assets/twitter.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={logo} alt="Логотип благотворительной платформы" />
                </div>
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                О нас
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Как это работает
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Контакты
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                Помощь
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__social">
                    <a href="#" className="footer__social-link">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <img src={instagram} alt="" />
                    </a>
                </div>
                <div className="footer__copy">
                    <p className="footer__copy-text">
                        &copy; 2023 Благотворительная платформа. Все права
                        защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}
