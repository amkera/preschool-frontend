export const addPayment = (paymentFormData, studentId) => {
  //debugger
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/students/${studentId}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(paymentFormData)
    })
    .then(response => response.json())
    .then(student => dispatch({type: 'ADD_PAYMENT', payload: student}))
  }
}
