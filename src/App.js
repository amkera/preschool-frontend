import React from 'react';

class App extends React.Component {

  //test
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/students/2/payments')
  //   .then(response => response.json())
  //   .then(jsonObject => console.log(jsonObject))
  // }
  //I have no access to jsonObject.payments if the serializers are not set up.

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }

}
export default App;
