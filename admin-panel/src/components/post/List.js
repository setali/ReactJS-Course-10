import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../../redux/actions/post'
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
      <Link to={`/post/${record.id}`}>
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
        <Table data={this.props.posts} columns={columns} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  // setItems: data => dispatch(setPosts(data))
  getItems: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
