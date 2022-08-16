import React, { Component } from 'react'

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0
  }

  generateTodo () {
    const time = Date.now()

    return {
      id: time,
      title: `Todo ${time}`
    }
  }

  addTodo = () => {
    const todo = this.generateTodo()

    // this.setState({ todos: [...this.state.todos, todo] })
    // this.setState({ count: this.state.todos.length })

    this.setState(s => ({ todos: [...s.todos, todo] }))

    this.setState(
      state => ({
        count: state.todos.length
      }),
      () => {
        console.log('After set state')
      }
    )
  }

  render () {
    console.log('render', this.state)
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <div>Count: {this.state.count}</div>
        <ol>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    )
  }
}
