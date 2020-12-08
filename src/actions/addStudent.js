export const addStudent = (formData) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch('http://localhost:3000/api/v1/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(student => {
      console.log('d')
      return dispatch({ type: 'ADD_STUDENT', payload: student })
    })
    .then(alert("Student Submitted!"))
    console.log('e')
  }
  console.log('f')
}
