//takes in state, and an action object as the second argument. Reducer updates the state according to the action.type.

function studentReducer(state = {students: []}, action) {

  return state

}

export default studentReducer;

//on the first time the reducer is used, it's given the default state we pass in when we declare the function.
//All other times, it takes in the previous state.
