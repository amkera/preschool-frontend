export const deletePayment = (paymentId, studentId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/students/${studentId}/payments/${paymentId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(student => dispatch({ type: 'DELETE_PAYMENT', payload: student}))
  }

}
