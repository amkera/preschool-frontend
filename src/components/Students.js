import React from 'react';
import Student from './Student'
import {Route, Link} from 'react-router-dom'

const Students = (props) => {

  return (
    <div>
      <h2> All Students </h2>
        {props.students.map(student => (

          <ul key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </ul>
        ))}
    </div>
  )

}

export default Students;

//in functions, we have to pass props into the function. you don't use this in functions.
//it's a keyword for classes

//in classes, we can just say this.props

// //          <h3> Name: {student.name} </h3>
//           <p> Bio: {student.bio} </p>
//           <p> Allergies: {student.allergies} </p>
