class Counter extends React.Component {
  //   constructor () {
  //     super()
  //     this.state = {
  //       counter: 0
  //     }
  //   }

  state = {
    counter: 0
  }

  valueElement () {
    return React.createElement('span', {}, this.state.counter)
  }

  increaseButton () {
    return React.createElement(
      'button',
      {
        style: { marginLeft: '5px' },
        className: 'my-button',
        onClick: () => {
          this.setState({ counter: this.state.counter + 1 })
        }
      },
      '+'
    )
  }

  decreaseButton () {
    return React.createElement(
      'button',
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 })
        }
      },
      '-'
    )
  }

  render () {
    console.log('render', this.state.counter)
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const element = React.createElement(Counter)

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(element)
