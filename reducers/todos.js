import { SET_PLAYER_CHOICE } from '../constants/ActionTypes'

const initialState = {
    rpsType: null,
    computerChoice: null
}


export default function todos(state = initialState, action) {
  console.log('REDUCER - state:', state);

  switch (action.type) {
    case SET_PLAYER_CHOICE:
      let stateObject = Object.assign({}, state);
      stateObject.rpsType = action.rpsType;

      console.log('stateObject:', stateObject);
      return stateObject;

    default:
      return state
  }
}
