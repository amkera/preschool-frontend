import React from 'react';
import PaymentForm from '../components/PaymentForm'
import Payments from '../components/Payments'


class PaymentsContainer extends React.Component {

  render() {
    return (
      <div>
        I am the payments container
        <br/>
        My Children are:
        <PaymentForm />
        <Payments payments={this.props.student && this.props.student.payments}/>
      </div>
    )
  }
}
//need the && because the first time this.props.student.payments is rendered, Redux store will be undefined



export default PaymentsContainer;