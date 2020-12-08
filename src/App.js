import React from 'react';
import { connect } from 'react-redux'

import StudentsContainer from './containers/StudentsContainer'



class App extends React.Component {

  componentDidMount() {
  }
  //no access to jsonObject.payments if the serializers are not set up.

  render() {
    return (
      <div className="App">
        <StudentsContainer />
      </div>
    )
  }
}

export default App;
