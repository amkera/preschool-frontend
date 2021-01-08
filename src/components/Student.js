import React from 'react';
import {Redirect} from 'react-router-dom'

import PaymentsContainer from '../containers/PaymentsContainer'
import StudentEdit from './StudentEdit'
import {Route, Link} from 'react-router-dom'


const Student = (props) => {

  let student = props.students.filter(student => student.id == props.match.params.id)[0]

  const handleDelete = (student) => {
    console.log('hey')
    //write an action here 
  }

  return (
    <ul>
      <p> <strong>Name: </strong> {student ? student.name : null} </p>
      <p> <strong>Bio: </strong> {student ? student.bio : null} </p>
      <p> <strong>Allergies: </strong> {student ? student.allergies : null}</p>
      <br/>
      <button onClick={() => handleDelete(student)}>Delete Student</button>

      <StudentEdit student={student}/>
      <PaymentsContainer student={student}/>
    </ul>
  )

}

export default Student;
