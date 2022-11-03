import React from 'react'
import {  NavLink } from 'react-router-dom'
import style from "./Register.module.css"
        const Register = () => {
  return (
    <div className={style.Register}>
        <h1 className={style.title}>ПРИШЛО ВРЕМЯ ПОГРУЖАТЬСЯ В МИР КИБЕРСПОРТА С DIGITAL CITY-SPORT! СТАНЬТЕ ЧАСТЬЮ НАШЕЙ КОМАНДЫ СЕГОДНЯ</h1>
        <div className={style.Link}>
        <NavLink to="/registratsiya" className='about__Link'>Записаться</NavLink>

        </div>
    </div>
  )
}

export default Register