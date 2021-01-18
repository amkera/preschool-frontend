import React from 'react';
import {connect} from 'react-redux'
import {addStudent} from '../actions/addStudent'


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
  }
  //event automatically passed in

  handleSubmit = (event) => {
    //debugger

    event.preventDefault()
    console.log('a')
    this.props.addStudent(this.state);
    console.log('g')

    this.setState({
      name: '',
      bio: '',
      allergies: ''
    })
  }

  render() {
    return (
      <div className="form">
        <form className="student-form" onSubmit={this.handleSubmit}>
          <label className="student-form"></label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

          <label></label>
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
            />

          <label></label>
            <input
              type="text"
              placeholder="Any Allergies?"
              name="allergies"
              value={this.state.allergies}
              onChange={this.handleChange}
            />
            <br/>
            <br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addStudent})(StudentForm);
