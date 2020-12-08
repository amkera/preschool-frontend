import React from 'react';
import Student from './Student'
import {Route, Link} from 'react-router-dom'

const Students = (props) => {
  // console.log(props)
  // console.log(props.history)
  // console.log(props.location)
  // console.log(props.match)
  // console.log(props.match.params)

  return (
    <div>
      <h2> All Students </h2>
        {props.students.map(student => (

          <h5 key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>

          </h5>
        ))}
    </div>
  )

}

export default Students;
