import React, { PropTypes, Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
          <h1>Rock, Paper, Scissors</h1>

          <p className="header__description">
            This app allows you play the classic 'Rock, Paper, Scissors' against
            the computer.

            Rules available on <a href="https://en.wikipedia.org/wiki/Rock-paper-scissors">Wikipedia</a>.
          </p>

          <p className="header__description">
            Codes is available on GitHub: <a href="https://en.wikipedia.org/wiki/Rock-paper-scissors">Wikipedia</a>.
          </p>
      </header>
    )
  }
}

export default Header
