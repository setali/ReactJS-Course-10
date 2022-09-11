import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPersons } from '../../redux/actions/person'
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

class List extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table data={this.props.persons} columns={columns} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getPersons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
