import React, { Component, PropTypes } from 'react'
import RpsItem from './RpsItem';
import Footer from './Footer'
import { rpsTypesArray } from '../constants/RpsTypes';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { game, actions } = this.props

    console.log('game:', game)
    console.log('rpsTypesArray:', rpsTypesArray);

    let playerChoice = game.rpsType;
    console.log('Main Section - playerChoice:', playerChoice);

    // rpsTypesArray.map((rpsType, index) =>
    //     console.log('rpsType:', rpsType, index)
    // );

    return (
      <div>
        <section>
          <ul className="rps-items">
              {rpsTypesArray.map((rpsType, index) =>
                  <RpsItem key={index} rpsType={rpsType} playerChoice={playerChoice} {...actions} />
              )}
          </ul>
        </section>
        <Footer/>
      </div>
    )
  }
}

MainSection.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
