import { SET_PLAYER_CHOICE, START_NEW_GAME } from '../constants/ActionTypes'

const initialState = {
    rpsType: null,
    computerChoice: null
}


export default function game(state = initialState, action) {
  console.log('REDUCER - state:', state);

  switch (action.type) {
    case SET_PLAYER_CHOICE:
      let stateObject = Object.assign({}, state)
      stateObject.rpsType = action.rpsType

      console.log('stateObject:', stateObject)
      return stateObject

    case START_NEW_GAME:
      console.log('START_NEW_GAME - stateObject:', Object.assign({}, initialState))
      return Object.assign({}, initialState)

    default:
      return state
  }
}
