import React from 'react';
import StudentForm from '../components/StudentForm'
import Students from '../components/Students'


class StudentsContainer extends React.Component {

  render() {
    return (

      <div>
      <StudentForm />
      <Students />
      </div>

    )
  }

}

export default StudentsContainer
