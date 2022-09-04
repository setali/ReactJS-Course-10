import axios from 'axios'
import React, { useEffect, useState } from 'react'

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'name', key: 'name' },
  {
    title: 'Address',
    key: 'address',
    render: (field, record) => `${field.city} ${field.street} | ${record.phone}`
  }
]

export default function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(({ data }) =>
      setUsers(data)
    )
  })

  return <Table data={users} columns={columns} rowKey='id' />
}

export function Table ({ data, columns, rowKey }) {
  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(record => (
            <tr key={record[rowKey]}>
              {columns.map(({ key, render }) => (
                <td key={key}>
                  {render ? render(record[key], record) : record[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
