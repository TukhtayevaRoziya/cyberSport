import React from 'react'

import i1 from '../../assets/images/photo_1.webp'
import i2 from '../../assets/images/photo_2.webp'
import i3 from '../../assets/images/photo_3.webp'
import i4 from '../../assets/images/photo_4.webp'
import i5 from '../../assets/images/photo_5.webp'
import i6 from '../../assets/images/photo_6.webp'
import i7 from '../../assets/images/photo_7.webp'
import i8 from '../../assets/images/photo_8.webp'
import i9 from '../../assets/images/photo_9.webp'
import i10 from '../../assets/images/photo_10.webp'
import { Image } from 'antd'

import styles from './Photo.module.css'

const Photo = () => {
  return (
    <div id="photo" className={styles.wrap}>
      <h1>Фото Галерея</h1>
      <div className={styles.main}>
        <Image className={styles.i1} src={i1} alt="" />
        <div className={styles.i1_block}>
          <Image className={styles.i2} src={i2} alt="" />
          <Image className={styles.i3} src={i3} alt="" />
        </div>
        <Image className={styles.i4} src={i4} alt="" />
        <Image className={styles.i5} src={i5} alt="" />

        <div className={styles.i3_block}>
          <Image className={styles.i7} src={i7} alt="" />
          <Image className={styles.i8} src={i8} alt="" />
        </div>
        <Image className={styles.i9} src={i9} alt="" />
        <Image className={styles.i10} src={i10} alt="" />
        <Image className={styles.i6} src={i6} alt="" />
      </div>
    </div>
  )
}

export default Photo
