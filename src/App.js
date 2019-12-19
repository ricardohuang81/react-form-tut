import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    fighters: []
  }

  removeFighter = index => {
    const { fighters } = this.state
    this.setState({
      fighters: fighters.filter((fighter, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = fighter => {
    this.setState({ fighters: [...this.state.fighters, fighter] })
  }

  render() {
    const { fighters } = this.state
    return (
      <div className="container">
        <Table fighterData={fighters} removeFighter={this.removeFighter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App