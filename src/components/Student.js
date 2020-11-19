import React from 'react';
import {Redirect} from 'react-router-dom'
import PaymentsContainer from '../containers/PaymentsContainer'

const Student = (props) => {

  let student = props.students[props.match.params.id - 1]
                //^regular props     //^router props
  console.log(student);
  //there is a bug here. clicking on the 4th and 5th student show no data but
  //manual manipulation of URL works

  return (
    <ul>
      Name: {student ? student.name : null} <br/>
      Bio: {student ? student.bio : null}  <br/>
      Allergies: {student ? student.allergies : null}
      <PaymentsContainer student={student}/>
    </ul>
  )

}

export default Student;
//goal: have a component here for payments
