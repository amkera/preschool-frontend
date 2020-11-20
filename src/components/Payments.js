import React from 'react'

const Payments = (props) => {

  return (
    <div>
      <p>All Payments</p>

      {props.payments && props.payments.map(payment =>
        <li key={payment.id}>
          Amount: {payment.amount} <br/>
          Date: {payment.date} <br/>
          Paid: {payment.paid}
        </li>
      )}
    </div>
  )

  //need props.payments &&... because first time we render, props.payments is undefined and
  //error: TypeError: Cannot read property 'map' of undefined
  //therefore need to check that props.payments is not first undefined

}

export default Payments
