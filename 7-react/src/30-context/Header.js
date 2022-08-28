import React, { Component } from 'react'
import ThemeContext from './contexts/ThemeContext'
import UserContext from './contexts/UserContext'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, isLoading, login, logout }) => (
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
                        <span className='action' onClick={login}>
                          Login
                        </span>
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
