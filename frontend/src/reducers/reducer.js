import { NEW_TODO, UPDATE_INPUT, TOGGLE_TODO } from '../constants/ActionTypes';

const initialState = {
  input: '',
  todos: [
    {
      text: 'My first todo',
      done: true,
    },
  ],
};


/*
3rd level reducer for a single todo
*/
const todo = (state, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        text: action.text,
        done: false,
      };
    case TOGGLE_TODO:
      return Object.assign({}, state.todos[action.id], {
        done: !state.todos[action.id].done,
      });
    default:
      return state;
  }
};

/*
2nd Level reducer for all todos
*/
const todos = (state, action) => {
  switch (action.type) {
    case NEW_TODO:
      return [
        ...state.todos,
        todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return [
        ...state.todos.slice(0, action.id),
        todo(state, action),
        ...state.todos.slice(action.id + 1),
      ];
    default:
      return state.todos;
  }
};

/*
  2nd Level Reducer for the input
*/
const input = (state, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.text;
    default:
      return state.input;
  }
};

/*
  Main Reducer....
*/
export default function (state = initialState, action) {
  return {
    input: input(state, action),
    todos: todos(state, action),
  };
}
