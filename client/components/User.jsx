import React from 'react'
import {Link} from 'react-router-dom'

const User = props => {
  return (
    <div>
      <ul>
        {props.user.name} - {props.user.email}
      </ul>
      <Link to='/users'>Home</Link>
    </div>
  )
}

export default User
