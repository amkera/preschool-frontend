import React from 'react';
import Student from './Student'
import {Route, Link} from 'react-router-dom'

class Students extends React.Component {

  state = {
    studentName: ''
  };


  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    //this.searchByName();
  }

  searchByName = () => {
    return this.props.students.filter(student => student.name.toUpperCase().includes(this.state.studentName.toUpperCase()))
  }


  render() {
    return (
      <div>
        <input
          type="text"
          name="studentName"
          placeholder="Search By Name"
          value={this.state.studentName}
          onChange={this.handleOnChange}
        />

        <h2> All Students </h2>



          {this.searchByName().map(student => (

            <h5 key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name}</Link>

            </h5>
          ))}
      </div>
    )

  }

}

export default Students;
