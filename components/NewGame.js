import React, { Component, PropTypes } from 'react'
import RpsItem from './RpsItem';
import { rpsTypesArray } from '../constants/RpsTypes';
import { GAME_OUTCOMES } from '../constants/GameOutcomes';

class NewGame extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { game, actions } = this.props
    let {rpsType, computerChoice, gameOutcome } = game;

    console.log('*********************');
    console.log('data:', rpsType, computerChoice, gameOutcome);
    console.log('*********************');

    let element
    let gameResultText

    switch (gameOutcome) {
      case GAME_OUTCOMES.DRAW:
        gameResultText = 'The game is drawn. Play again by clicking the button below!'
        break
      case GAME_OUTCOMES.COMPUTER_WINS:
        gameResultText = 'Oh no - the computer wins. Play again by clicking the button below!'
        break
      case GAME_OUTCOMES.PLAYER_WINS:
        gameResultText = 'Yay - you won!  Try again by clicking the button below!'
        break
      default:
    }

    if (gameOutcome){
      if (gameOutcome === GAME_OUTCOMES.DRAW){

      }

      element = (
        <div>
          <section>
            <h2>Game Result</h2>

            <p>Your choice: {rpsType}</p>
            <p>Computer Choice: {computerChoice}</p>
            <p>Game Outcome: {gameOutcome}</p>

            <p>{gameResultText}</p>
          </section>

          <section>
            <h2>Start a new game?</h2>
            <div>
              <button className="start-new-game"
                    onClick={() => actions.startNewGame()}>
                    New Game
              </button>
            </div>
          </section>
        </div>
      )
    }else{
      element = null;
    }

    return (
      element
    )
  }
}

NewGame.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default NewGame
