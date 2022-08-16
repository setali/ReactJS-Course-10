import React, { Component } from 'react'
import ACL from './ACL'
import Button from './Button'

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
      { id: 4, title: 'Task 4' },
      { id: 5, title: 'Task 5' }
    ]
  }

  render () {
    return (
      <div>
        <ol>
          {this.state.tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <Button permission='edit-task'>Edit</Button>
              <Button permission='delete-task'>Delete</Button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ACL(Tasks)
