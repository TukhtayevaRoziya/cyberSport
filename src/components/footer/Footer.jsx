import React from 'react'
import styles from './Footer.module.css'
import img from "../../assets/images/footer1.png"
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_block1}>
        <img src={img} alt="" />
        <div className={styles.socialMedia}>
          <Facebook className={styles.icon1} />
          <Telegram className={styles.icon2} />
          <Instagram className={styles.icon3} />
          <YouTube className={styles.icon4} />

        </div>
      </div>
      <div className={styles.Footer_block2}>
        <NavLink className={"footerLink"} to="/#about">О нас</NavLink>
        <NavLink className={"footerLink"} to="/#tournament">Турниры</NavLink>
        <NavLink className={"footerLink"} to="/#abacus">Счёты</NavLink>
        <NavLink className={"footerLink"} to="/#photo">Фото</NavLink>
      </div>
      <div className={styles.Footer_block3}>
        <NavLink className={"footerLink"} to="DOTA_2">DOTA 2</NavLink>
        <NavLink className={"footerLink"} to="CS_GO">CS GO</NavLink>
        <NavLink className={"footerLink"} to="R6_SEGA">R6 SEGA</NavLink>
        <NavLink className={"footerLink"} to="pubg">pubg</NavLink>
      </div>
      <div className={styles.Footer_block4}>
        <h1>Sign up to our newsletter!</h1>
        <p>Do you wont to receive the latest updates  and spesial offers ? Enter you email below to receive our weekly newsletter</p>
        <input type="text" className={styles.Input} />
        <div className={styles.Block_Check}>

          <input type="checkbox" /> <label htmlFor="">I accept newsletter terms</label>
        </div>
      </div>
      <h2 className={styles.End}>Copyright by Digital City 2022</h2>
    </div>
  )
}

export default Footer
