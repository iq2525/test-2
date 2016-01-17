import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import { rpsTypesArray } from '../../constants/RpsTypes'
import * as actions from '../../actions/game'

describe('todo actions', () => {
  it('setPlayerChoice - should create SET_PLAYER_CHOICE action', () => {
    expect(actions.setPlayerChoice(rpsTypesArray[0])).toEqual({
      type: types.SET_PLAYER_CHOICE,
      rpsType: rpsTypesArray[0]
    })
  })

  it('startNewGame should create START_NEW_GAME action', () => {
    expect(actions.startNewGame()).toEqual({
      type: types.START_NEW_GAME,
    })
  })
})
