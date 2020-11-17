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

//we want to dispatch ann action to the reducer which is responsible for updating
//the state based on the action that comes in

//thunk allows us to call dispatch INSIDE the fetch function so it's asynchronous


//fetchStudents is an action creater that CREATES an action. It returns/dispatches an action.

//action creators return a regular JSobj {type: 'blah', payload:}
//once it returns that, connect function automatically dispatches action to the reducer
//since fetch takes time, we can't return the action right away and we don't want dispatch
//to automatically be called.
//thunk allows us to use dispatch function inside an action creator, we can dispatch
//the resposne from the fetch request.. We have to return dispatch.
