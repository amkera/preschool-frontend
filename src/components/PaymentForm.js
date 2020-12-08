import React from 'react'
import {connect} from 'react-redux';
import {addPayment} from '../actions/addPayment'


class PaymentForm extends React.Component {

  state = {
    amount: '',
    date: '',
    paid: true
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handlePaymentToggle = (event) => {
    if (event.target.value === "Yes") {
      this.setState({paid: true})
    } else {
      this.setState({paid: false})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addPayment(this.state, this.props.student.id)
    this.setState({
      amount: '',
      date: '',
      paid: true
    })
  }

  render() {
    return (
      <div>
      <h3> Add Payment </h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Amount: </label>
            <br/>
            <input type="number" step="0.01" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <br/>


          <label>Date: </label>
            <br/>
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
          <br/>

          <label>Payment Received? </label>

          <div className="dropdown">
            <select name="paid" onChange={this.handlePaymentToggle}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <br/>

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default connect(null, {addPayment})(PaymentForm);







//don't need a mapStateToProps since props are being passed down from Payments Container
//DOES need a mapDispatchToProps is needed, or an action is needed since we are changing the store
