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

    let element
    let gameResultText
    let classNameGameResultText;

    switch (gameOutcome) {
      case GAME_OUTCOMES.DRAW:
        gameResultText = 'The game is drawn. Play again by clicking the button below!'
        classNameGameResultText = 'game-results__data__results-text--draw';
        break
      case GAME_OUTCOMES.COMPUTER_WINS:
        gameResultText = 'Oh no - the computer wins. Play again by clicking the button below!'
        classNameGameResultText = 'game-results__data__results-text--computer-wins';
        break
      case GAME_OUTCOMES.PLAYER_WINS:
        gameResultText = 'Yay - you won!  Try again by clicking the button below!'
        classNameGameResultText = 'game-results__data__results-text--player-wins';
        break
      default:
    }

    classNameGameResultText += ' game-results__data__results-text'

    if (gameOutcome){
      element = (
        <div className="game-results">
          <section className="game-results__data">
            <h2>Game Result</h2>

            <p>Your choice: {rpsType}</p>
            <p>Computer Choice: {computerChoice}</p>

            <p className={classNameGameResultText}>{gameResultText}</p>
          </section>

          <section className="game-results__start-new-game">
            <div>
              <button className="start-new-game"
                    onClick={() => actions.startNewGame()}>
                    Start New Game
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
