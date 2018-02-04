import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Users from './Users'

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Router>
        <div>
          <h1>Web API</h1>
          <Route path='/users' component={Users} />
        </div>
      </Router>
    )
  }
}

export default App
