import React, { useReducer, useState } from 'react'

function generateId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: generateId(state), title: action.payload }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state
  }
}

function createTodo (todo) {
  return { type: 'ADD_TODO', payload: todo }
}

function deleteTodo (id) {
  return { type: 'REMOVE_TODO', payload: id }
}

export default function TodosUseState () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState('')

  function addTodo (e) {
    e.preventDefault()
    dispatch(createTodo(todo))
    setTodo('')
  }

  function removeTodo (id) {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={todo} onChange={e => setTodo(e.target.value)} />
        <button>Add</button>
      </form>
      Todos count: {todos.length}
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
            <span
              onClick={() => removeTodo(todo.id)}
              style={{ color: 'red', padding: '5px', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
