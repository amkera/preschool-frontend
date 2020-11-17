import React from 'react';

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => (
        <li key={student.id}>
          <h3> Name: {student.name} </h3>
          <p> Bio: {student.bio} </p>
          <p> Allergies: {student.allergies} </p>
        </li>
      ))}
    </div>
  )

}

export default Students;

//in functions, we have to pass props into the function. you don't use this in functions.
//it's a keyword for classes 

//in classes, we can just say this.props
