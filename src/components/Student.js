import React from 'react';

const Student = (props) => {

  console.log(props)

  return (
    <li>
      <strong>Name:</strong>: {props.student.name} <br/>
      <strong>About Me:</strong> {props.student.bio} <br/>
      <strong>Allergies:</strong> {props.student.allergies} <br/>
    </li>
  )

}

export default Student;
