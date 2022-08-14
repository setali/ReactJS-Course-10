import React, { Component } from 'react'

const data = [
  { name: 'Mahdi', family: 'Hoseinian' },
  { name: 'Maryam', family: 'Rahimi' },
  { name: 'Mehri', family: 'Marvi' },
  { name: 'Mohammad', family: 'Davoodi' },
  { name: 'Mohammad', family: 'Mossaei' }
]

export default class Table extends Component {
  render () {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Family</th>
            </tr>
          </thead>
          <tbody>
            {data.map(el => (
              <tr key={`${el.name}${el.family}`}>
                <Columns record={el} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { record } = this.props
    // const record = this.props.record

    return (
      <>
        <td>{record.name}</td>
        <td>{record.family}</td>
      </>
    )
  }
}
