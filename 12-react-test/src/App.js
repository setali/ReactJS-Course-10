import Counter from './Counter'
import Todos from './Todos'
import Post from './Post'

function App () {
  return (
    <div className='App'>
      <Post />
      <hr />
      <Todos />
      <hr />
      <Counter />
      <hr />
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  )
}

export default App
