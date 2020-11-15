export default function fetchStudents() {
  fetch('http://localhost:3000/api/v1/students')
  .then(response => response.json())
  .then(jsonObject => console.log(jsonObject))

}
//thunk allows us to call dispatch INSIDE the fetch function so it's asynchronous


//fetchStudents is an action creater that CREATES an action. It returns/dispatches an action.
