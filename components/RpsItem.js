import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { rpsType, completeTodo} = this.props

    let element;

      element = (
        <div className="view">
          <button className="select-rps-type"
                  onClick={() => completeTodo(rpsType)}>
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

TodoItem.propTypes = {
  rpsType: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
