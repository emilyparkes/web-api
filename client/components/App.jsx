import React from 'react'
import request from 'superagent'
import UserList from './UserList'
import {Route} from 'react-router-dom'
import User from './User'

// import User from './User'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    request // using superagent
      .get('/users') // the database
      .then((res) => {
        this.setState({
          users: res.body.users // then request the state to be set as users: (the users in database)
        })
      })
  }

  render () {
    return (
      <div>
        <h1>Site Users</h1>
        <Route exact path='/users' render={() => {
          return (
            <UserList users={this.state.users}/>
          )
        }} />
        <Route path='/users/:id' render={(routerProps) => {
          const profile = this.state.users.find(user => {
            return user.id === Number(routerProps.match.params.id)
          })
          return profile ? (
            <User user={profile}/>
          ) : null
        }}/>
      </div>
    )
  }
}

export default App
