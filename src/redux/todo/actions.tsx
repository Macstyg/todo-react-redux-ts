import TodoModel from '../../components/Todo.model';
import { action, ActionsUnion } from '../../types/redux';

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export type UPDATE_INPUT_VALUE = typeof UPDATE_INPUT_VALUE;
export const UPDATE_TODO = 'UPDATE_TODO';
export type UPDATE_TODO = typeof UPDATE_TODO;

export const Actions = {
  addTodo: action<typeof ADD_TODO, string>(ADD_TODO),
  updateInputValue: action<typeof UPDATE_INPUT_VALUE, string>(UPDATE_INPUT_VALUE),
  updateTodo: action<typeof UPDATE_TODO, TodoModel>(UPDATE_TODO),
}

export type Actions = ActionsUnion<typeof Actions>