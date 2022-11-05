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
            ДОБРО ПОЖАЛОВАТЬ В ИГРУ
            <br />
            <svg viewBox="0 0 1320 70">
              <text x="50%" y="80%" dy="0" text-anchor="middle">
                DC cyber В
              </text>
            </svg>
            КИБЕРСПОРТИВНЫХ ИГРАХ
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
