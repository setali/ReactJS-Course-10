import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  render () {
    console.log('render', this.state.counter)
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          className='my-button'
          style={{ marginLeft: '5px' }}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}

export default Counter
