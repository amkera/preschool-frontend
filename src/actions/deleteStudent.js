export const deleteStudent = (studentId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/students/${studentId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(student => dispatch({ type: 'DELETE_STUDENT', payload: student}))
  }
}
