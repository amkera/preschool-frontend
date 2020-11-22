import React from 'react'
import {connect} from 'react-redux';
import {deletePayment} from '../actions/deletePayment'

const Payments = (props) => {

  const handleDelete = (payment) => {
    // debugger
    props.deletePayment(payment.id, payment.student_id)

  }
  //needs to have account and payment id

  return (
    <div>
      <p>All Payments</p>

      {props.payments && props.payments.map(payment =>

        <li key={payment.id}>
          Amount: ${payment.amount} <br/>
          Date: {payment.date} <br/>
          Paid: {payment.paid} <br/>
          <button onClick={() => handleDelete(payment)}>Delete</button>
        </li>
      )}
    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined and
  //error: TypeError: Cannot read property 'map' of undefined
  //therefore need to check that props.payments is not first undefined

}

export default connect(null, {deletePayment})(Payments)
