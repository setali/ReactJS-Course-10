import React, { useEffect, useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => setCount(s => s + 1), 5000)
  }, [])

  function generateId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function addTodo (e) {
    e.preventDefault()
    setTodos(todos => [...todos, { id: generateId(), title: todo }])
    setTodo('')
  }

  //   function removeTodo (id) {
  //     setTodos(todos => todos.filter(todo => todo.id !== id))
  //   }

  function removeTodoByEvent (event) { // wrong, you must not manipulate dom directly
    console.log(event.target.parentElement.remove())
    console.log(todos)
  }

  return (
    <div>
      Count: {count}
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
              onClick={removeTodoByEvent}
              //   onClick={() => removeTodo(todo.id)}
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
