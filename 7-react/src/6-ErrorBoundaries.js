import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h3>Error Boundaries</h3>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    )
  }
}

class ErrorBoundaries extends Component {
  state = { hasError: false }

  // static getDerivedStateFromError () {
  //   return { hasError: true }
  // }

  componentDidCatch () {
    this.setState({ hasError: true })
  }

  render () {
    console.log('render')
    return this.state.hasError
      ? 'Sorry, there is a problem'
      : this.props.children
  }
}

class Child extends Component {
  state = { counter: 0 }

  render () {
    if (this.state.counter === 5) {
      throw new Error('App crashed')
    }

    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
