import expect, { createSpy, spyOn, isSpy } from 'expect'
import game from '../../reducers/game'
import * as types from '../../constants/ActionTypes'
import { rpsTypesArray } from '../../constants/RpsTypes'
import { GAME_OUTCOMES } from '../../constants/GameOutcomes'

describe('game reducer', () => {
  beforeEach(function () {

  })

  it('should handle initial state', () => {
    expect(
      game(undefined, {})
    ).toEqual({
        rpsType: null,
        computerChoice: null,
        gameOutcome: null
      })
  })

  it('Should return intial state when START_NEW_GAME action triggered', () => {
    expect(
      game(
        {
          rpsType: rpsTypesArray[1],
          computerChoice: rpsTypesArray[1],
          gameOutcome: GAME_OUTCOMES.DRAW
        },
        {
          type: types.START_NEW_GAME
        }
      )).toEqual(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        })
  })

  it('should make a game COMPUTER_WINS when the computer wins', () => {
    spyOn(Math, 'floor').andReturn(0)

    expect(
      game(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        },
        {
          type: types.SET_PLAYER_CHOICE,
          rpsType: rpsTypesArray[2]
        }
      )).toEqual(
        {
          rpsType: rpsTypesArray[2],
          computerChoice: rpsTypesArray[0],
          gameOutcome: GAME_OUTCOMES.COMPUTER_WINS
        })
  })

  it('should make a game PLAYER_WINS when the computer wins', () => {
    spyOn(Math, 'floor').andReturn(0)

    expect(
      game(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        },
        {
          type: types.SET_PLAYER_CHOICE,
          rpsType: rpsTypesArray[1]
        }
      )).toEqual(
        {
          rpsType: rpsTypesArray[1],
          computerChoice: rpsTypesArray[0],
          gameOutcome: GAME_OUTCOMES.PLAYER_WINS
        })
  })

  it('should make a game DRAWN when the computer and player pick the same object', () => {
    spyOn(Math, 'floor').andReturn(1)

    expect(
      game(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        },
        {
          type: types.SET_PLAYER_CHOICE,
          rpsType: rpsTypesArray[1]
        }
      )).toEqual(
        {
          rpsType: rpsTypesArray[1],
          computerChoice: rpsTypesArray[1],
          gameOutcome: GAME_OUTCOMES.DRAW
        })
  })

  it('should make a game PLAYER_WINS when the computer = SCISSORS and player = ROCK', () => {
    spyOn(Math, 'floor').andReturn(2)

    expect(
      game(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        },
        {
          type: types.SET_PLAYER_CHOICE,
          rpsType: rpsTypesArray[0]
        }
      )).toEqual(
        {
          rpsType: rpsTypesArray[0],
          computerChoice: rpsTypesArray[2],
          gameOutcome: GAME_OUTCOMES.PLAYER_WINS
        })
  })

  it('should make a game COMPUTER_WINS when the computer = PAPER and player = ROCK', () => {
    spyOn(Math, 'floor').andReturn(1)

    expect(
      game(
        {
          rpsType: null,
          computerChoice: null,
          gameOutcome: null
        },
        {
          type: types.SET_PLAYER_CHOICE,
          rpsType: rpsTypesArray[0]
        }
      )).toEqual(
        {
          rpsType: rpsTypesArray[0],
          computerChoice: rpsTypesArray[1],
          gameOutcome: GAME_OUTCOMES.COMPUTER_WINS
        })
  })
})
