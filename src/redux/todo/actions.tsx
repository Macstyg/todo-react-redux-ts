import TodoModel from '../../components/Todo.model';
import { action, ActionsUnion } from '../../types/redux';

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export type UPDATE_INPUT_VALUE = typeof UPDATE_INPUT_VALUE;
export const UPDATE_TODO = 'UPDATE_TODO';
export type UPDATE_TODO = typeof UPDATE_TODO;
export const DELETE_TODO = 'DELETE_TODO';
export type DELETE_TODO = typeof DELETE_TODO;
export const FETCH_TODOS = 'FETCH_TODOS';
export type FETCH_TODOS = typeof FETCH_TODOS;
export const FINISH_FETCH_TODOS = 'FINISH_FETCH_TODOS';
export type FINISH_FETCH_TODOS = typeof FINISH_FETCH_TODOS;

export const Actions = {
  addTodo: action<typeof ADD_TODO, string>(ADD_TODO),
  deleteTodo: action<typeof DELETE_TODO, string>(DELETE_TODO),
  fetchTodos: action<typeof FETCH_TODOS>(FETCH_TODOS),
  finichFetchTodos: action<typeof FINISH_FETCH_TODOS, TodoModel[]>(FINISH_FETCH_TODOS),
  updateInputValue: action<typeof UPDATE_INPUT_VALUE, string>(UPDATE_INPUT_VALUE),
  updateTodo: action<typeof UPDATE_TODO, TodoModel>(UPDATE_TODO),
}

export type Actions = ActionsUnion<typeof Actions>