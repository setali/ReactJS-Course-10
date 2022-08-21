import React, { Component } from 'react'

export default class Stateless extends Component {
  state = {
    users: [
      { id: 1, name: 'Mehri Marvi' },
      { id: 2, name: 'Mohammad Moosaei' },
      { id: 3, name: 'Pejman Taghipoor' }
    ]
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return (
    <div>
      <span>{user.id}</span> - <span>{user.name}</span>
    </div>
  )
}
