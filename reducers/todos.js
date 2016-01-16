import { SELECTED_RPS_TYPE } from '../constants/ActionTypes'

const initialState = {
    rpsType: null
}


export default function todos(state = initialState, action) {
  console.log('REDUCER - state:', state);

  switch (action.type) {
    case SELECTED_RPS_TYPE:
      let stateObject = Object.assign({}, state);
      stateObject.rpsType = action.rpsType;

      console.log('stateObject:', stateObject);
      return stateObject;

    default:
      return state
  }
}
