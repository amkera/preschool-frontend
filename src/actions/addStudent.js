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
  }
}



//we need to return a function here, that takes the dispatch function as an argument.
//thunk allows us to dispatch from inside the action creator
//don't need to export if you wrap {addStudent} in curly braces inside StudentForm which I did.
