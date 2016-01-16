import { SET_PLAYER_CHOICE, START_NEW_GAME } from '../constants/ActionTypes'
import { rpsTypesArray } from '../constants/RpsTypes'
import { GAME_OUTCOMES } from '../constants/GameOutcomes'

const initialState = {
    rpsType: null,
    computerChoice: null,
    gameOutcome: null
}


export default function game(state = initialState, action) {
  console.log('REDUCER - before state:', state);

  switch (action.type) {
    case SET_PLAYER_CHOICE:
      console.log('REDUCER - inside SET_PLAYER_CHOICE:');
      let randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
      console.log('randomNumber:', randomNumber);

      let playerChoice = action.rpsType;
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
      }

      let stateObject = Object.assign({}, state, {
        rpsType: action.rpsType,
        computerChoice,
        gameOutcome
       })

      console.log('REDUCER - after state:', stateObject);
      return stateObject

    case START_NEW_GAME:
      console.log('START_NEW_GAME - stateObject:', Object.assign({}, initialState))
      return Object.assign({}, initialState)

    default:
      return state
  }
}
