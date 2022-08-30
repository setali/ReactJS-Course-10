import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { NavLink as Link } from 'react-router-dom'
import '../../styles/sidebar.css'

export default class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div className='box sidebar' style={{ ...this.context }}>
        <h4>Sidebar</h4>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/post'>Posts</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/report'>Report</Link>
          </li>
        </ul>
      </div>
    )
  }
}
