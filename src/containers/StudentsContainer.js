import React from 'react';
import StudentForm from '../components/StudentForm'
import Students from '../components/Students'
import Student from '../components/Student'
import Header from '../components/Header'
import fetchStudents from '../actions/fetchStudents'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//need to connect to the store since StudentsContainer is the component responsible for rendering data


class StudentsContainer extends React.Component {

  //we need to actually get the students from backend, so we fetch. and we need to connect fetch to the store
  componentDidMount() {
    this.props.fetchStudents()

  }

  render() {
    return (

      <div>
        <Header/>
        <Switch>
          <Route path="/students/new" component={StudentForm} />
          <Route path="/students/:id" render={(routerProps) => <Student {...routerProps} students={this.props.students} /> } />
          <Route path="/students" render={(routerProps) => <Students {...routerProps} students={this.props.students} /> } />
        </Switch>
      </div>

    )
  }

}

//for the dynamic show route, I pass in routerProps as an argument to an anon function
//then we render the Student Component, pass in routerProps which gives me access to params where I can pull the id, and then pass down all students
//to the StudentComponent

//Student is being rendered because of the dynamic student route we have set up. When we click a student link, everything that Student gets will come from line 25 and the props we pass in.

//in order to give students component access to props, we need to set up routes here. because this component can send props down.


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
