import React from 'react'
import request from 'superagent'

// import {HashRouter as Router, Route} from 'react-router-dom'

// import UserList from './Users'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    request
      .get('/users') // the database
      .then((res) => {
        this.setState({
          users: res.body.users
        })
      })
  }

  render () {
    return (
      <div>
        <h1>Site Users</h1>
        {this.state.users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </div>
    )
  }
}

export default App
