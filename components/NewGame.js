import React, { Component, PropTypes } from 'react'
import RpsItem from './RpsItem';
import { rpsTypesArray } from '../constants/RpsTypes';

class NewGame extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { game, actions } = this.props
    let playerChoice = game.rpsType;

    let element

    if (playerChoice){
      element = (
        <section>
          <h2>Start a new game?</h2>
          <div>
            <button className="start-new-game"
                  onClick={() => actions.startNewGame()}>
                  New Game
            </button>
          </div>
        </section>
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
