import React, { Component } from 'react'
import Tasks from './Tasks'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>My task App</h2>

        <Button permission='add-task' style={{ color: 'green' }}>
          Add task
        </Button>

        <Tasks permission='view-task-list' />
      </div>
    )
  }
}
