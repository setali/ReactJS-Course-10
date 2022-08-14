import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.increase = this.increase.bind(this)
    this.state = { counter: props.defaultCounter ?? props.children ?? 1 }
  }

  increase () {
    return this.setState({ counter: this.state.counter + 1 })
  }

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    console.log(this.props)
    return (
      <div>
        Counter: {this.state.counter}
        {/* <button onClick={() => this.increase()}>+</button> */}
        {/* <button onClick={this.increase.bind(this)}>+</button> */}
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}
