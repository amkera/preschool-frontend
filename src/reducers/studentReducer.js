//takes in state, and an action object as the second argument. Reducer updates the state according to the action.type.

export default function studentReducer(state = { students: []}, action) {
  // debugger
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return {students: action.payload}
      //this is my new redux state, and I want an object where key is students and value is array of student objs
    default:
      return state

  }

}

//action.payload will be the array of students

//on the first time the reducer is used, it's given the default state we pass in when we declare the function.
//All other times, it takes in the previous state.
