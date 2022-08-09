import React, { Component } from 'react'

export default class Counter extends Component {
  constructor () {
    super()
    this.increase = this.increase.bind(this)
    this.state = { counter: 1 }
  }

  increase () {
    console.log(this)
    return this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    console.log(this)
    return (
      <div>
        Counter: {this.state.counter}
        {/* <button onClick={() => this.increase()}>+</button> */}
        {/* <button onClick={this.increase.bind(this)}>+</button> */}
        <button onClick={this.increase}>+</button>
        <button>-</button>
      </div>
    )
  }
}
