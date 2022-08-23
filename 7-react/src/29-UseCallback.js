import React, { useEffect, useState, useCallback } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(s => s + 1), 4000)
  }, [])

  const myHeader = useCallback(node => {
    console.log(node.getBoundingClientRect())
    node && setHeight(node.getBoundingClientRect().height)
  }, [])

  const myInput = useCallback(node => {
    console.log(node)
    node?.focus()
  }, [])

  return (
    <div>
      <h2 ref={myHeader}>Hello</h2>
      <div>Height: {height}</div>
      Count: {count}
      <hr />
      <input ref={myInput} />
    </div>
  )
}
