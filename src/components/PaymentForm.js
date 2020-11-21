import React from 'react'
import {connect} from 'react-redux';


class PaymentForm extends React.Component {

  state = {
    amount: '0.00',
    date: '',
    paid: 'Yes'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //actioncreator needed, and correct student to associate account
    //addPayment(this.state, this.props.student.id)

  }



  render() {
    return (
      <div>
      Add Payment
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
            <input type="number" step="0.01" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <br/>


          <label>Date: </label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
          <br/>

          <label>Payment Received? </label>


          <select name="paid" value={this.state.paid} onChange={this.handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>

          <br/>

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default connect(null)(PaymentForm);
//don't need a mapStateToProps since props are being passed down from Payments Container
//DOES need a mapDispatchToProps is needed, or an action is needed since we are changing the store


//pseudocode: need to connect to the store
//need to find the correct student
//send dispatch an action to the reducer to update the store
//will need to make a new action
