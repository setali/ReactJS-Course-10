import React, { Component } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'

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
      <Link to={`/posts/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

export default class List extends Component {
  state = {
    posts: [],
    loading: true
  }

  componentDidMount () {
    request('/posts')
      .then(response => this.setState({ posts: response.data }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    const { posts, loading } = this.state

    return (
      <div>
        <Table data={posts} columns={columns} loading={loading} />
      </div>
    )
  }
}
