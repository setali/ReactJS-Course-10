import React, { Component } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'
import { connect } from 'react-redux'
import { setPersons } from '../../redux/actions/person'

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

class List extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    request('/users')
      .then(response => this.props.setItems(response.data))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    const { loading } = this.state

    return (
      <div>
        <Table data={this.props.persons} columns={columns} loading={loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Person => ', state)
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPersons(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
