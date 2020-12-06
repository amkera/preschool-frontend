import React from 'react';
import PaymentForm from '../components/PaymentForm'
import Payments from '../components/Payments'


class PaymentsContainer extends React.Component {

  render() {
    return (
      <div>
        <br/>
        <PaymentForm student={this.props.student} />
        <br/>
        <br/>
        <br/>
        <Payments payments={this.props.student && this.props.student.payments}/>
      </div>
    )
  }
}
//need the && because the first time this.props.student.payments is rendered, Redux store will be undefined



export default PaymentsContainer;
