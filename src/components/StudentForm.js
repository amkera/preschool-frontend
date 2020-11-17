import React from 'react';
import {connect} from 'react-redux'
import {addStudent} from '../actions/addStudent'
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addStudent(this.state);
  }

  //need an action creator, addStudent.js
  //this.handleChange actually automatically passes event into the function so I don't have to pass it in below

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
            />
          <label>Any Allergies? </label>
            <input
              type="text"
              placeholder="Any Allergies?"
              name="allergies"
              value={this.state.allergies}
              onChange={this.handleChange}
            />
            <br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addStudent})(StudentForm);

//this component calls addStudent function that will dispatch an action to the reducer
//mapStateToProps gives the component access to what's ALREADY in the redux store. We don't need that here.
//mapDispatchToProps, or directly putting an action creator like I did, allows component to CHANGE
//what's in the store

//we can call this.props.addStudent, thanks to connect
