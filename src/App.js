import React from 'react';
import { connect } from 'react-redux'
//we want App to have access to the store
//import fetchStudents from './actions/fetchStudents'
import StudentsContainer from './containers/StudentsContainer'



class App extends React.Component {

  //test
  componentDidMount() {
  }
  //I have no access to jsonObject.payments if the serializers are not set up.
  //I want to add this data that I fetched to my redux store, so I want to dispatch an action from here.

  render() {
    return (
      <div className="App">
        <StudentsContainer />
      </div>
    )
  }

}

export default connect()(App);


//we also need to connect down here where we export
//connect accepts mapStateToProps, and an action creator. mapStateToProps is a way of accessing values in our store as props. We can now see what is in the store.
//Then inside App, we can do something like this.props.students

//Return value os mapStateToProps is coming from the store.

//We want to add the data from backend to the store, so we add a second value to connect. such as an action creator
//OR mapDispatchToProps

//This gives the ability to update the store from this component. we have access to this.props.fetchStudents
