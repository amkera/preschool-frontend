import React from 'react';
import StudentForm from '../components/StudentForm'
import Students from '../components/Students'
import Student from '../components/Student'
import Header from '../components/Header'
import fetchStudents from '../actions/fetchStudents'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'

class StudentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        <Header/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/students/new" component={StudentForm} />
          <Route path="/students/:id" render={(routerProps) => <Student {...routerProps} students={this.props.students} /> } />
          <Route path="/students" render={(routerProps) => <Students {...routerProps} students={this.props.students} /> } />
        </Switch>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps, {fetchStudents})(StudentsContainer);




//Student is being rendered because of the dynamic student route set up.
//When clickin a student link, everything that Student gets will come from line 29 and the props we pass in.
//in order to give students component access to props, need to set up routes here. because this component can send props down.
