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
      <h2>All Payments</h2>

      {props.payments && props.payments.map(payment =>

        <h5 key={payment.id}>
          <p>Amount: ${payment.amount} </p>
          <p>Date: {payment.date} </p>
          <p>Paid: {payment.paid} </p>
          <button onClick={() => handleDelete(payment)}>Delete</button>
        </h5>
      )}
    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined and
  //error: TypeError: Cannot read property 'map' of undefined
  //therefore need to check that props.payments is not first undefined

}

export default connect(null, {deletePayment})(Payments)
