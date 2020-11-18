import React from 'react';
import Student from './Student'

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => (
        <ul key={student.id}><Student student={student} /></ul>
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
