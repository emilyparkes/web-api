import React from 'react'
import {Link} from 'react-router-dom'

const UserList = props => {
  return (
    <ul>
      {props.users.map(user => { // go through all data and return by id their name.
        return <Link to={`/users/${user.id}`} key={user.id}><li>{user.name}</li></Link>
      })}
    </ul>
  )
}

export default UserList
