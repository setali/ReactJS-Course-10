import { useEffect, useState } from 'react'

//  A12EdC   => 0
//  BD24ED   => 1

export default function AdvanceUseEffect () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    setInterval(() => {
      console.log('Count', count)
      setCount(state => state + 1)
      //   setCount(state => {
      //     console.log('State', state)
      //     return state + 1
      //   })
    }, 1000)
  }, [])

  return count
}
