import React from 'react'

import Navbar from './../navbar/Navbar'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrap}>
        <Navbar />
        <div className={styles.title_wrap}>
          <h1 className={styles.title}>
            ДОБРО ПОЖАЛОВАТЬ В ИГРУ <br /> <code> DC cyber </code> В <br />{' '}
            КИБЕРСПОРТИВНЫХ ИГРАХ
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
