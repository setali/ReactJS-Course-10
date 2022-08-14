import React, { Component } from 'react'
import axios from 'axios'

export default class ListKeys extends Component {
  state = { users: [] }

  componentDidMount () {
    axios('https://jsonplaceholder.typicode.com/users').then(
      ({ data: users }) => this.setState({ users })
    )
  }

  render () {
    return (
      <div>
        <h2>Users list</h2>
        <ol>
          {this.state.users.map((user, index) => (
            <li key={user.id}>
              {index} - {user.id} - {user.name}
            </li>
          ))}
        </ol>
      </div>
    )
  }
}
