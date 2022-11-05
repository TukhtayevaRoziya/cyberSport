import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import avatar from '../../assets/images/register_player.png'

import styles from './Registration.module.css'

const Registration = () => {
  return (
    <div className={styles.wrap} id='registration'>
      <div className={styles.block}>
        <div className={styles.main}>
          <h1>Регистрация</h1>
          <div className={styles.choose}>
            <NavLink to={'/'}>Один игрок</NavLink>
            <NavLink to={'/team'}>Команда</NavLink>
          </div>
          <div className={styles.upload_img}>
            <img draggable={false} src={avatar} alt="" />
            <div className={styles.upload_img__main}>
              <input
                name="inp"
                type={'file'}
                accept="image/*"
                defaultValue={''}
                size="60"
              />
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Player
                  label1={'Имя'}
                  label2={'Фамилия'}
                  label3={'Почта'}
                  label4={'Телефон'}
                />
              }
            />
            <Route
              path="/team"
              element={
                <Player
                  label1={'Названия'}
                  label2={'Число игроков'}
                  label3={'Почта Лидера'}
                  label4={'Телефон Лидера'}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Registration

const Player = ({ label1, label2, label3, label4 }) => {
  const [value, setValue] = useState('+998')

  return (
    <div className={styles.inp_wrap}>
      <div className={styles.inp_block}>
        <div className={styles.inp_box} id={styles.label1}>
          <label name={'label1'}>{label1}</label>
          <input type={'text'} name={'label1'} />
        </div>
        <div className={styles.inp_box} id={styles.label2}>
          <label>Опыт</label>
          <input placeholder="От" type={'number'} min={0} />
          <input placeholder="До" type={'number'} min={0} />
        </div>
      </div>
      <div className={styles.inp_block}>
        <div className={styles.inp_box} id={styles.label1}>
          <label name={'label1'}>{label2}</label>
          <input type={'text'} name={'label1'} />
        </div>
        <div className={styles.inp_box} id={styles.label1}>
          <label name={'label1'}>Направления</label>
          <input type={'text'} name={'label1'} />
        </div>
      </div>
      <div className={styles.inp_block}>
        <div className={styles.inp_box} id={styles.label1}>
          <label name={'label1'}>{label3}</label>
          <input type={'text'} name={'label1'} />
        </div>
        <div className={styles.inp_box} id={styles.label1}>
          <label name={'label1'}>{label4}</label>
          <input
            type={'tel'}
            name={'label1'}
            pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={value}
            id="phone"
            maxLength={13}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <input type={'submit'} value="Отправить" className={styles.btn} />
    </div>
  )
}
