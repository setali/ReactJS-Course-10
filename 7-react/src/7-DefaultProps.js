import React, { Component } from 'react'

export default class Title extends Component {
  //   static defaultProps = {
  //     color: 'red',
  //     name: 'Qoli'
  //   }

  render () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.name}</h1>
      </div>
    )
  }
}

Title.defaultProps = {
  color: 'red',
  name: 'Qoli'
}
