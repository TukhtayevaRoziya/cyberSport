import React from 'react'
import Register from './register/Register'

import i1 from '../../assets/images/about_box1.png'

import styles from './About.module.css'

const About = () => {
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Digital City — профессиональная игровая организация, созданная в 2019
          году. Наша цель — объединить самых талантливых киберспортсменов со
          всего мира.
        </h1>
        <div className={styles.block}>
          <div className={styles.box_wrap}>
            <img src={i1} alt="" />

            <div className={styles.box}>
              <h1>Twitch потоки</h1>
              <p>
                Смотрите новые трансляции каждый день от наших лучших игроков и
                создателей контента.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Register />
    </>
  )
}

export default About
