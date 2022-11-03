import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import PhotoIcon from '@material-ui/icons/Photo'
import EventNoteIcon from '@material-ui/icons/EventNote'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import LocationCityIcon from '@material-ui/icons/LocationCity'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@material-ui/core/BottomNavigation'

import icon from '../../assets/images/icon.webp'

import styles from './Navbar.module.css'

export default class Navbar extends Component {
  state = {
    value: 0,
    pathMap: ['/#about', '/#tournament', '/#abacus', '/#photo'],
    width: 0,
    height: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { value, pathMap } = this.state
    const data = [
      { id: 0, value: 'О нас', icon: <LocationCityIcon /> },
      { id: 1, value: 'Турниры', icon: <GroupWorkIcon /> },
      { id: 2, value: 'Счёты', icon: <EventNoteIcon /> },
      { id: 3, value: 'Фото', icon: <PhotoIcon /> },
    ]

    const dataMap = data.map((d) => (
      <BottomNavigationAction
        key={d.id}
        icon={window.innerWidth >= 600 ? d.value : d.icon}
        value={d.value}
        component={NavLink}
        to={pathMap[d.id]}
      />
    ))

    return (
      <div className={styles.wrap}>
        <div className={styles.img_wrap}>
          <img src={icon} alt="" draggable={false} />
        </div>

        <div>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            className={'nav primary ' + styles.bottomNavigation}
          >
            {dataMap}
          </BottomNavigation>
          <button className={styles.btn}>Регистрация</button>
        </div>
      </div>
    )
  }
}
