import React, { Component, PropTypes } from 'react'
import RpsItem from './RpsItem';
import { rpsTypesArray } from '../constants/RpsTypes';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { game, actions } = this.props
    let playerChoice = game.rpsType;

    let element

    if (playerChoice){
      element = null;
    }else{
      element = (
        <section>
          <h2>Choose an option:</h2>
          <ul className="rps-items">
              {rpsTypesArray.map((rpsType, index) =>
                  <RpsItem key={index} rpsType={rpsType} playerChoice={playerChoice} {...actions} />
              )}
          </ul>
        </section>
      )
    }

    return (
      element
    )
  }
}

MainSection.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
