import React from 'react'

class AddUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: newUser
    }
  }

  handleChange () {

  }

  handleClick () {

  }

  render () {
    return (
      <form>
        <div>
          Name: <input name='userName' email='userEmail' onChange={this.handleChange} />
        </div>
        <button type='button' onClick={this.handleClick}>Submit User</button>
      </form>
    )
  }
}

export default AddUser

// form/ button/ onclick+handlesubmit/ fn for post req
