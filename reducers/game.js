import { SET_PLAYER_CHOICE, START_NEW_GAME } from '../constants/ActionTypes'
import { rpsTypesArray } from '../constants/RpsTypes'
import { GAME_OUTCOMES } from '../constants/GameOutcomes'

const initialState = {
    rpsType: null,
    computerChoice: null,
    gameOutcome: null
}

export default function game(state = initialState, action) {

  switch (action.type) {
    case SET_PLAYER_CHOICE:
      //Gives a 1-based index
      let randomNumber = Math.floor(Math.random() * (3)) + 1;

      let playerChoice = action.rpsType;

      //Need to convert to a 0 based index when referencing the Array
      let computerChoice = rpsTypesArray[randomNumber - 1]
      let gameOutcome;

      if (playerChoice === computerChoice){
        gameOutcome = GAME_OUTCOMES.DRAW
      }else if (playerChoice === rpsTypesArray[0] &&
        computerChoice === rpsTypesArray[1]){

        gameOutcome = GAME_OUTCOMES.COMPUTER_WINS;
      }else if (playerChoice === rpsTypesArray[0] &&
        computerChoice === rpsTypesArray[2]){

        gameOutcome = GAME_OUTCOMES.PLAYER_WINS;
      }else if (playerChoice === rpsTypesArray[1] &&
        computerChoice === rpsTypesArray[0]){

        gameOutcome = GAME_OUTCOMES.PLAYER_WINS;
      }else if (playerChoice === rpsTypesArray[1] &&
        computerChoice === rpsTypesArray[2]){

        gameOutcome = GAME_OUTCOMES.COMPUTER_WINS;

      }else if (playerChoice === rpsTypesArray[2] &&
        computerChoice === rpsTypesArray[0]){

        gameOutcome = GAME_OUTCOMES.COMPUTER_WINS;
      }else if (playerChoice === rpsTypesArray[2] &&
        computerChoice === rpsTypesArray[1]){

        gameOutcome = GAME_OUTCOMES.PLAYER_WINS;
      }

      let stateObject = Object.assign({}, state, {
        rpsType: action.rpsType,
        computerChoice,
        gameOutcome
       })

      return stateObject

    case START_NEW_GAME:
      return Object.assign({}, initialState)

    default:
      return state
  }
}
