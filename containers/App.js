import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as RpsActions from '../actions/rps'

class App extends Component {
  render() {
    const { game, actions } = this.props
    return (
      <div>
        <Header/>
        <MainSection game={game} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log('mapStateToProps:', mapStateToProps);
  console.log('state:', state);
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps:', mapDispatchToProps);
  return {
    actions: bindActionCreators(RpsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
