import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view-task-list', 'add-task', 'edit-task', 'delete-task']
}

export default function ACL (Component) {
  return class MyACL extends React.Component {
    render () {
      return (
        (!this.props.permission ||
          user.permissions.includes(this.props.permission)) && (
          <Component {...this.props} />
        )
      )
    }
  }
}

// export default class ACL extends Component {
//   render () {
//     if (user.permissions.includes(this.props.permission)) {
//       return this.props.children
//     } else {
//       return null
//     }
//   }
// }
