import React, { Component } from 'react'

import PhotoIcon from '@material-ui/icons/Photo'
import EventNoteIcon from '@material-ui/icons/EventNote'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import LocationCityIcon from '@material-ui/icons/LocationCity'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@material-ui/core/BottomNavigation'

import icon from '../../assets/images/icon.webp'

import styles from './Navbar.module.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  state = {
    value: 0,
    pathMap: ['#about', '#tournament', '#abacus', '#photo'],
    width: 0,
    height: 0,
    scrollY: 0
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  handleScroll(event) {
    this.setState({
      scrollY: parseInt(window.scrollY),
    })
  }

  render() {
    const { value, pathMap } = this.state

    const data = [
      { id: 0, value: 'О нас', icon: <LocationCityIcon /> },
      { id: 1, value: 'Турниры', icon: <GroupWorkIcon /> },
      { id: 2, value: 'Счёты', icon: <EventNoteIcon /> },
      { id: 3, value: 'Фото', icon: <PhotoIcon /> },
    ]

    const a = `a`

    const dataMap = data.map((d) => (
      <BottomNavigationAction
        key={d.id}
        icon={window.innerWidth >= 600 ? d.value : d.icon}
        value={d.value}
        component={a}
        href={pathMap[d.id]}
        className={styles.ButtonLink}
      />
    ))

    return (
      <div
        className={styles.wrap}
        style={
          this.state.scrollY >= 100
            ? {
                background: 'rgba(0, 0, 0, 0.7)',
              }
            : null
        }
      >
        <div className={styles.img_wrap}>
          <img src={icon} alt="rasm bor edi!!" draggable={false} />
        </div>

        <div className={styles.main_wrap}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            className={'nav primary ' + styles.bottomNavigation}
          >
            {dataMap}
            {/* <a href='#about'>about</a>
            <a href='#about'>about</a>
            <a href='#about'>about</a>
            <a href='#about'>about</a> */}
          </BottomNavigation>
          <a href='#registration' className={styles.btn}>Регистрация</a>
        </div>
      </div>
    )
  }
}
