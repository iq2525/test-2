import React, { Component, PropTypes } from 'react'
import RpsItem from './RpsItem';
import { rpsTypesArray } from '../constants/RpsTypes';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { game, actions } = this.props
    let gameOutcome = game.gameOutcome;

    let element

    if (gameOutcome){
      element = null;
    }else{
      element = (
        <section className="main">
          <h2>Choose an option:</h2>
          <ul className="rps-items">
              {rpsTypesArray.map((rpsType, index) =>
                  <RpsItem key={index} rpsType={rpsType} {...actions} />
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
