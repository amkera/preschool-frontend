import React from 'react';

class StudentForm extends React.Component {

  state = {
    name: '',
    bio: '',
    allergies: ''
  }

  render() {
    return (
      <div>
        <form>
          <label>Add Student </label>
          <input type="text" placeholder="Name" value={this.state.name}/>
          <label>Student Bio </label>
          <input type="text" placeholder="Bio" value={this.state.bio}/>
          <label>Any Allergies? </label>
          <input type="text" placeholder="Any Allergies?" value={this.state.allergies}/>
          <label> Payment Received? </label>
          <input type="radio"/>
        </form>
      </div>
    )
  }
}

export default StudentForm;
