import { SELECTED_RPS_TYPE } from '../constants/ActionTypes'

const initialState = {
    toDos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ],
    rpsType: null
}


export default function todos(state = initialState, action) {
  switch (action.type) {
    case SELECTED_RPS_TYPE:
      console.log('todos - state:', state);
      let toDos = state.toDos;

      let stateObject = Object.assign({}, state, { toDos: toDos});
      stateObject.rpsType = action.rpsType;

      console.log('stateObject:', stateObject);
      return stateObject;

    default:
      return state
  }
}
