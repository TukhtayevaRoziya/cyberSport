import React from 'react'
import Register from './register/Register'

import i1 from '../../assets/images/about_box1.webp'
import i2 from '../../assets/images/about_box2.webp'
import i3 from '../../assets/images/about_box3.webp'

import styles from './About.module.css'

const About = () => {
  const data = [
    {
      id: 0,
      img: i1,
      title: 'Twitch потоки',
      text:
        'Смотрите новые трансляции каждый день от наших лучших игроков и создателей контента.',
    },
    {
      id: 1,
      img: i2,
      title: 'Новости киберспорта',
      text:
        'Получайте последние новости, обновления и события из мира киберспорта.',
    },
    {
      id: 2,
      img: i3,
      title: 'Игровые турниры',
      text: 'Узнайте больше о международных и местных игровых турнирах.',
    },
  ]

  const dataMap = data.map((d) => (
    <div className={styles.box_wrap} key={d.id}>
      <div className={styles.box}>
        <img src={d.img} alt="" />
        <div className={styles.half_circle}></div>

        <h1>{d.title}</h1>
        <p>{d.text}</p>
      </div>
    </div>
  ))

  return (
    <>
      <div className={styles.wrap} id='about'>
        <h1 className={styles.title}>
          Digital City — профессиональная игровая организация, созданная в 2019
          году. Наша цель — объединить самых талантливых киберспортсменов со
          всего мира.
        </h1>
        <div className={styles.block}>{dataMap}</div>
      </div>
      <Register />
    </>
  )
}

export default About
