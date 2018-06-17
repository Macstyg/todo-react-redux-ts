import Todo from "../../components/Todo.model";
import TodoModel from "../../components/Todo.model";
import * as fromActions from './actions';

export interface ITodosState {
  readonly todos: TodoModel[],
  readonly inputValue: string,
  readonly loading: boolean,
}

const defaultState: ITodosState = {
  inputValue: '',
  loading: false,
  todos: [],
}

export default function (state: ITodosState = defaultState, action: fromActions.Actions): ITodosState {
  console.log('action ', action)
  switch (action.type) {
    case fromActions.ADD_TODO: 
      return {
        ...state,
        inputValue: '',
        todos: [
          ...state.todos,
          new Todo(action.payload)
        ]
      }
    case fromActions.UPDATE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      }
    case fromActions.UPDATE_TODO: {
      const idx = state.todos.findIndex((item) => item.id === action.payload.id);
      const todos = [
        ...state.todos.slice(0, idx),
        action.payload,
        ...state.todos.slice(idx + 1)
      ]
      return {
        ...state,
        todos
      }
    }
    case fromActions.DELETE_TODO: {
      const idx = state.todos.findIndex((item) => item.id === action.payload);
      const todos = [
        ...state.todos.slice(0, idx),
        ...state.todos.slice(idx + 1)
      ];
      return {
        ...state,
        todos
      }
    }
    case fromActions.FETCH_TODOS:
      return {
        ...state,
        loading: true
      }
    case fromActions.FINISH_FETCH_TODOS: 
      return {
        ...state,
        loading: false,
        todos: [
          ...action.payload
        ],
      }
  }
  return state
}