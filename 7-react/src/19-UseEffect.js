import { useEffect, useState } from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <UseEffect />}
    </div>
  )
}

function UseEffect () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])

  // cDM
  useEffect(() => {
    console.log('Component Did Mount 1')
  }, [])

  // cDM, cDU, cWU
  useEffect(() => {
    const timeoutId = setTimeout(() => setCounter(counter + 1), 10000)
    console.log('Use Effect', counter, timeoutId)

    return () => {
      console.log('Clean Up', counter, timeoutId)
      clearTimeout(timeoutId)
    }
  }, [counter])

  useEffect(() => {
    const controller = new AbortController()

    const { signal } = controller

    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(response => response.json())
      .then(data => setUsers(data))

    return () => {
      controller.abort()
    }
  }, [])

  //cWU
  useEffect(() => {
    return () => {
      console.log('Component Will UnMount')
    }
  }, [])

  return (
    <div>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      Counter: {counter}
    </div>
  )
}
