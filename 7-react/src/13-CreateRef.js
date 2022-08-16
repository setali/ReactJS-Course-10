import React, { Component } from 'react'

export default class CreateRef extends Component {
  state = {
    show: false
  }

  //   componentDidUpdate () {
  //     this.inputRef.current?.focus()
  //   }

  inputRef = React.createRef()

  toggle = () => {
    this.setState(
      state => ({ show: !state.show }),
      () => {
        this.inputRef.current?.focus()
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show && <input ref={this.inputRef} />}
      </div>
    )
  }
}
