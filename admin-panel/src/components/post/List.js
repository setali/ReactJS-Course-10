import React, { Component } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'
import { connect } from 'react-redux'

const columns = [
  { title: 'شناسه', key: 'id' },
  {
    title: 'عنوان',
    key: 'title'
  },
  {
    title: 'عملیات',
    key: 'actions',
    render: (f, record) => (
      <Link to={`/post/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

class List extends Component {
  componentDidMount () {
    request('/posts').then(response => this.props.setItems(response.data))
  }

  render () {
    return (
      <div>
        <Table data={this.props.posts} columns={columns} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Post => ', state)

  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch({ type: 'POSTS', payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
