import React, { Component } from 'react'

export default class AdvanceForm extends Component {
  state = {
    username: '',
    email: ''
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ username: 'Ali' })
    }, 2000)
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type='text'
              value={this.state.username}
              name='username'
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type='text'
              value={this.state.email}
              name='email'
              onChange={this.handleChangeInput}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

// export default class Form extends Component {
//   state = {
//     username: '',
//     email: ''
//   }

//   componentDidMount () {
//     setTimeout(() => {
//       this.setState({ username: 'Ali' })
//     }, 2000)
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     console.log(this.state)
//   }

//   handleChangeUsername = e => this.setState({ username: e.target.value })

//   handleChangeEmail = e => this.setState({ email: e.target.value })

//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Username:</label>
//             <input
//               type='text'
//               value={this.state.username}
//               onChange={this.handleChangeUsername}
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type='text'
//               value={this.state.email}
//               onChange={this.handleChangeEmail}
//             />
//           </div>
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//     )
//   }
// }
