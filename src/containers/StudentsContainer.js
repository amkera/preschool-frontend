import React from 'react';
import StudentForm from '../components/StudentForm'
import Students from '../components/Students'
import fetchStudents from '../actions/fetchStudents'
import { connect } from 'react-redux'
//need to connect to the store since StudentsContainer is the component responsible for rendering data


class StudentsContainer extends React.Component {

  //we need to actually get the students from backend, so we fetch. and we need to connect fetch to the store
  componentDidMount() {
    this.props.fetchStudents()

  }

  render() {
    return (

      <div>
      <StudentForm />
      <br/>
      <Students students={this.props.students}/>
      </div>

    )
  }

}
//getting students from redux store, accessing them in this component through props,
//and passing them down to the Students component

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps, {fetchStudents})(StudentsContainer);
//{fetchStudents} here is equivalent to mapDispatchToProps
//connecting allows this component to access the data in the store
//we want to get list of students in the store, so we need to mapStateToProps (if we wanna SEE the data)
//any function that's passed to connect as the first argument to connect,
//which is mapStateToProps, means you want to get the redux store and map whatever it is to props.
//state refers to the state in the store.
