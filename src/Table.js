import React, { Component } from 'react'

const TableHeader = () => {
  return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
  )
}

const TableBody = (props) => {
  const rows = props.fighterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>
          <button onClick={() => props.removeFighter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {

    const { fighterData, removeFighter } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody fighterData={fighterData} removeFighter={removeFighter} />
      </table>
    )
  }
}

export default Table