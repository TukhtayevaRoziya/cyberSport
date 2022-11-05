import React from 'react'
import { NavLink } from 'react-router-dom'

import { TurnirRoute } from './TurnirRoute'

import style from './TurnirHeader.module.css'

const TurnirHeader = () => {
  return (
    <div className={style.TurnirHeader}>
      <div className={style.Routes}>
        <h1>Последние турниры</h1>
        <div className={style.Route_Link}>
          <NavLink  className={'Turnis_Link'} to="/">
            Все
          </NavLink>
          <NavLink className={'Turnis_Link'} to="/CS_GO">
            CS:GO
          </NavLink>
          <NavLink className={'Turnis_Link'} to="/DOTA_2">
            DOTA 2
          </NavLink>
          <NavLink className={'Turnis_Link'} to="/R6_SEGA">
            R6 SEGA
          </NavLink>
          <NavLink className={'Turnis_Link'} to="/PUBG">
            PUBG
          </NavLink>
        </div>
      </div>
      <TurnirRoute />
      <div className={style.ButtonDiv}>
        <a href="/#registration" className="about__Link">
          Записаться
        </a>
      </div>
    </div>
  )
}

export default TurnirHeader
