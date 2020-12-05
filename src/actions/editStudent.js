export const editStudent = (formData) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/students/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(student => dispatch({ type: 'UPDATE_STUDENT', payload: student }))
  }
}
