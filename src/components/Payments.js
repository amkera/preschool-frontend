import React from 'react'
import {connect} from 'react-redux';
import {deletePayment} from '../actions/deletePayment'

const Payments = (props) => {

  const handleDelete = (payment) => {
    props.deletePayment(payment.id, payment.student_id)
  }


  return (
    <div>
      <h2>All Payments</h2>

      {props.payments && props.payments.map(payment =>

        <h5 key={payment.id}>
          <p>Amount: ${payment.amount} </p>
          <p>Date: {payment.date ? payment.date.slice(0,10) : null} </p>
          <p>Paid: {payment.paid ? "Yes" : "No"} </p>
          <button onClick={() => handleDelete(payment)}>Delete</button>
        </h5>
      )}
    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined

}

export default connect(null, {deletePayment})(Payments)
