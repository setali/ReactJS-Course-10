import React, { Component } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'

const columns = [
  { title: 'شناسه', key: 'id' },
  {
    title: 'نام',
    key: 'name',
    render: (field, record) => <Link to={`/person/${record.id}`}>{field}</Link>
  },
  {
    title: 'آدرس',
    key: 'address',
    render: (field, record) => `${field.city} ${field.street} | ${record.phone}`
  },
  {
    title: 'عملیات',
    key: 'actions',
    render: (f, record) => (
      <Link to={`/person/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

export default class List extends Component {
  state = {
    users: [],
    loading: true
  }

  componentDidMount () {
    request('/users')
      .then(response => this.setState({ users: response.data }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    const { users, loading } = this.state

    return (
      <div>
        <Table data={users} columns={columns} loading={loading} />
      </div>
    )
  }
}
