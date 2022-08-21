import { useState } from 'react'

export default function UseState () {
  const [state, setState] = useState(10)
  const [count, setCount] = useState(() => 999999n ** 999999n)

  return (
    <div>
      {/* Count: {count.toString().length} */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      Value: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}
// export default function UseState () {
//   const myState = useState(10)

//   console.log(myState)

//   return (
//     <div>
//       Value: {myState[0]}
//       <button onClick={() => myState[1](myState[0] + 1)}>+</button>
//     </div>
//   )
// }
