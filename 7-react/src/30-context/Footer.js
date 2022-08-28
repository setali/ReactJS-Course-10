import React, { Component } from 'react'
import ThemeContext from './contexts/ThemeContext'

export default class Footer extends Component {
  render () {
    return (
      <div className='box' style={{ ...this.context }}>
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    )
  }
}

Footer.contextType = ThemeContext
