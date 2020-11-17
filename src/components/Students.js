import React from 'react';

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => <p key={student.id}>Name: {student.name} Bio: {student.bio} Allergies: {student.allergies} </p>)}
    </div>
  )

}

export default Students;

//in functions, we have to pass props into the function

//in classes, we can just say this.props
