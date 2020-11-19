import React from 'react';

const Student = (props) => {

  let student = props.students[props.match.params.id - 1]

  console.log(student)

  return (
    <ul>
      Name: {student ? student.name : null} <br/>
      Bio: {student ? student.bio : null}  <br/>
      Allergies: {student ? student.allergies : null}  <br/>
    </ul>
  )

}

export default Student;
