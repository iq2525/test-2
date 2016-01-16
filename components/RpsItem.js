import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class RpsItem extends Component {
  constructor(props, context) {
    console.log('props', props);

    super(props, context)
  }

  render() {
    const { rpsType, setPlayerChoice} = this.props

    //console.log('selectedRpsType:', selectedRpsType)

    let element;

      element = (
        <div className="view">
          <button className="select-rps-type"
                  onClick={() => setPlayerChoice(rpsType)}>
                  {rpsType}
          </button>
        </div>
      )

    return (
      <li className="test">
        {element}
      </li>
    )
  }
}

RpsItem.propTypes = {
  rpsType: PropTypes.string.isRequired,
  setPlayerChoice: PropTypes.func.isRequired
}

export default RpsItem
