import { combineReducers } from 'redux';
import todos, { ITodosState } from './todo/reducer';

export interface IState {
  todos: ITodosState
}

export default combineReducers({
  todos
});


