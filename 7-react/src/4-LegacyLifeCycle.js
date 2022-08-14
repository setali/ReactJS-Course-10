import React, { Component } from 'react'

export default class LegacyLifeCycle extends Component {
  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  UNSAFE_componentWillUpdate () {
    console.log('UNSAFE_componentWillUpdate')
  }

  UNSAFE_componentWillReceiveProps (props, state) {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  render () {
    console.log('render')
    return <div>LegacyLifeCycle</div>
  }
}
