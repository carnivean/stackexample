import { NEW_TODO, UPDATE_INPUT, TOGGLE_TODO } from '../constants/ActionTypes';

export const createTodo = text => ({
  type: NEW_TODO,
  text,
});

export const updateInput = text => ({
  type: UPDATE_INPUT,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
