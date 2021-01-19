//takes in state, and an action object as the second argument. Reducer updates the state according to the action.type.

export default function studentReducer(state = { students: []}, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return {students: action.payload}
      //this is my new redux state, and I want an object where key is students and value is array of student objs
    case 'ADD_STUDENT':
      return {...state, students: [...state.students, action.payload]}
    case 'ADD_PAYMENT':
      return {...state, students: state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        } else {
          return student
        }
      })}
      case 'DELETE_PAYMENT':
        return {...state, students: state.students.map(student => {
          if (student.id === action.payload.id) {
            return action.payload
          } else {
            return student
          }
        })}
      case 'DELETE_STUDENT':
        return {...state, students: state.students.map(student => {
          if (student.id === action.payload.id) {
            return action.payload
          } else {
            return student
          }
        })}
      case 'UPDATE_STUDENT':
        return {...state, students: state.students.map(student => {
          if (student.id === action.payload.id) {
            return action.payload
          } else {
            return student
          }
        })}
    default:
      return state
  }
}






//when we are adding a payment:
//return the state with the students array such that when we map over the array of students
//if the student.id from the student coming from the backend matches the student id in the payload,
//replace the account, return the action.payload (the student)
//else
//return the student

//^same for delete
