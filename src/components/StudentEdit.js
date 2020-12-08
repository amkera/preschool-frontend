import React from 'react';
import {connect} from 'react-redux'
import {editStudent} from '../actions/editStudent'

class StudentEdit extends React.Component {

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

  handleSubmit = (event) => {
    event.preventDefault()
    let student = {...this.state, id: this.props.student.id}
    this.props.editStudent(student);
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
          <h3> Edit Student Information </h3>
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

export default connect(null, {editStudent})(StudentEdit);
