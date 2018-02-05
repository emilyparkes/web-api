import React from 'react'

const UserList = props => {
  return (
    <ul>
      {props.users.map( => {
     return <li key={users.id}>{users.name}</li>
      })}
     </ul>
  )
}

export default UserList
