import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class RpsItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { rpsType, setPlayerChoice, playerChoice} = this.props

    return (
      <li className="game-choice">
        <button className="game-choice__button"
                onClick={() => setPlayerChoice(rpsType)}>
                {rpsType}
        </button>
      </li>)
  }
}

RpsItem.propTypes = {
  rpsType: PropTypes.string.isRequired,
  setPlayerChoice: PropTypes.func.isRequired
}

export default RpsItem
