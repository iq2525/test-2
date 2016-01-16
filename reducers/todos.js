import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = {
    toDos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ],
    rpsType: null
}


export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.toDos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.toDos.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.toDos.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )

    case COMPLETE_TODO:
      let toDos = state.toDos.map(todo =>
          todo.id === action.id ?
            Object.assign({}, todo, { completed: !todo.completed }) :
            todo
        );

      let stateObject = Object.assign({}, state, { toDos: toDos});

      console.log('stateObject:', stateObject);
      return stateObject;

    case COMPLETE_ALL:
      const areAllMarked = state.toDos.every(todo => todo.completed)
      return state.toDos.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.toDos.filter(todo => todo.completed === false)

    default:
      return state
  }
}
