import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {
      users: [],
      counter: 0
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', state.counter)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (props, state) {
    console.log('shouldComponentUpdate', state.counter, this.state.counter)

    if (state.counter % 4 === 0) {
      return false
    }

    return true
  }

  changeCounter = value =>
    this.setState({ counter: this.state.counter + value })

  render () {
    console.log('render')
    return (
      <div>
        LifeCycle
        <div>
          Counter: {this.state.counter}
          <button onClick={() => this.changeCounter(1)}>+</button>
          <button onClick={() => this.changeCounter(-1)}>-</button>
        </div>
        <ol>
          {this.state.users.map(user => (
            <li>{user.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}
