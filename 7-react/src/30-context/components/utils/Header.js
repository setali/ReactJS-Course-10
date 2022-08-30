import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, isLoading, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div className='box' style={{ ...theme }}>
                <header>
                  <h2>Header</h2>
                  <div>
                    {isLoggedIn && <span>{user.name}</span>}
                    {!isLoading &&
                      (isLoggedIn ? (
                        <span className='logout action' onClick={logout}>
                          Logout
                        </span>
                      ) : (
                        <Link to='/login'>
                          <span className='action'>Login</span>
                        </Link>
                      ))}
                  </div>
                </header>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
