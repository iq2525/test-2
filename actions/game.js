import * as types from '../constants/ActionTypes'

export function setPlayerChoice(rpsType) {
  console.log('Inside SET_PLAYER_CHOICE');
  return { type: types.SET_PLAYER_CHOICE,
      rpsType
    }
}

export function startNewGame() {
  return { type: types.START_NEW_GAME }
}
