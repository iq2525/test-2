import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem';
import RpsItem from './RpsItem';
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { rpsTypesArray } from '../constants/RpsTypes';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.toDos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.toDos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.toDos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount) {

  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state


    console.log('todos:', todos);

    console.log('rpsTypesArray:', rpsTypesArray);

    rpsTypesArray.map((rpsType, index) =>
        console.log('rpsType:', rpsType, index)
    );

    return (
      <div>
        <section>
          <ul className="rps-items">
              {rpsTypesArray.map((rpsType, index) =>
                  <RpsItem key={index} rpsType={rpsType} {...actions} />
              )}
          </ul>
        </section>
        <Footer/>
      </div>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
