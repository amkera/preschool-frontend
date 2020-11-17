import React from 'react';
//controlled form because input is tied to the state

class StudentForm extends React.Component {

  state = {
    name: '',
    bio: '',
    allergies: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    //name: event.target.value
    //bio: event.target.value
    //allergies: event.target.value
  }

  //this.handleChange actually automatically passes event into the function so I don't have to pass it in below

  render() {
    return (
      <div>
        <form>
          <label>Add Student </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          <label>Student Bio </label>
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={this.state.bio}
            />
          <label>Any Allergies? </label>
            <input
              type="text"
              placeholder="Any Allergies?"
              name="allergies"
              value={this.state.allergies}
            />
          <label> Payment Received? </label>
          <input type="radio"/>
        </form>
      </div>
    )
  }
}

export default StudentForm;
