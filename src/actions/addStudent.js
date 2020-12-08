export const addStudent = (formData) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(student => dispatch({ type: 'ADD_STUDENT', payload: student }))
    .then(alert("Student Submitted!"))
  }
}
