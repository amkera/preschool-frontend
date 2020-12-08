export default function fetchStudents() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/students')
    .then(response => response.json())
    .then(jsonStudents => dispatch({
      type: 'FETCH_STUDENTS',
      payload: jsonStudents
    }))
  }
}
