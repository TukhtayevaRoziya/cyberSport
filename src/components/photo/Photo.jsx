import React from 'react'

import i1 from '../../assets/images/photo_1.png'
import i2 from '../../assets/images/photo_2.png'
import i3 from '../../assets/images/photo_3.png'
import i4 from '../../assets/images/photo_4.png'
import i5 from '../../assets/images/photo_5.png'
import i6 from '../../assets/images/photo_6.png'
import i7 from '../../assets/images/photo_7.png'
import i8 from '../../assets/images/photo_8.png'
import i9 from '../../assets/images/photo_9.png'
import i10 from '../../assets/images/photo_10.png'
import { Image } from 'antd'

import styles from './Photo.module.css'

const Photo = () => {
  return (
    <div id="photo" className={styles.wrap}>
      <h1>Фото Галерея</h1>
      <div className={styles.main}>
        <Image className={styles.i1} src={i1} />
        <div className={styles.i1_block}>
          <Image className={styles.i2} src={i2} />
          <Image className={styles.i3} src={i3} />
        </div>
        <Image className={styles.i4} src={i4} />
        <Image className={styles.i5} src={i5} />

        <div className={styles.i3_block}>
          <Image className={styles.i7} src={i7} />
          <Image className={styles.i8} src={i8} />
        </div>
        <Image className={styles.i9} src={i9} />
        <Image className={styles.i10} src={i10} />
        <Image className={styles.i6} src={i6} />
      </div>
    </div>
  )
}

export default Photo
