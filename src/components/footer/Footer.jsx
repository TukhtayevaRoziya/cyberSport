import React from 'react'
import styles from './Footer.module.css'
import img from "../../assets/images/footer1.webp"
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_block1}>
        <img src={img} alt="" />
        <div className={styles.socialMedia}>
          <a target="_blank" href="https://ru-ru.facebook.com/digitalcityuz/" rel="noreferrer"> <Facebook className={styles.icon1} />
          </a>

          <a href="https://t.me/digitalcityuz" target="_blank" rel="noreferrer"><Telegram className={styles.icon2} /></a>
          <a target="_blank" href="https://www.instagram.com/digitalcityuz/" rel="noreferrer"> <Instagram className={styles.icon3} /></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCDouP-Wfsl-ZMAiKIApIXWQ" rel="noreferrer">    <YouTube className={styles.icon4} /></a>


        </div>
      </div>
      <div className={styles.Footer_block2}>
        <a className={"footerLink"} href="#about">
        О нас
        </a>
        <a className={"footerLink"} href="#tournament">
        Турниры
        </a>
        <a className={"footerLink"} href="#abacus">
        Счёты
        </a>
        <a className={"footerLink"} href="#photo">
        Фото
        </a>
      </div>
      <div className={styles.Footer_block3}>
        <a className={"footerLink"} href="#tournament">DOTA 2</a>
        <a className={"footerLink"} href="#tournament">CS GO</a>
        <a className={"footerLink"} href="#tournament">R6 SEGA</a>
        <a className={"footerLink"} href="#tournament">PUBG</a>
      </div>
      <div className={styles.Footer_block4}>
        <h1>Sign up to our newsletter!</h1>
        <p>Do you wont to receive the latest updates  and spesial offers ? Enter you email below to receive our weekly newsletter</p>
        <input type="text" placeholder='Enter your Email' className={styles.Input} id='footer'/>
        <div className={styles.Block_Check}>
          <input type="checkbox" id='footer_checkbox'/> <label htmlFor="">I accept newsletter terms</label>
        </div>
      </div>
      <h2 className={styles.End}>Copyright by Digital City 2022</h2>
    </div>
  )
}

export default Footer
