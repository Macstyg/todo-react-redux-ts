import Todo from "../components/Todo.model";

export interface IState {
  todos: Todo[],
  inputValue: string
}

export interface IAction {
  type: string,
  payload: any
}

const defaultState: IState = {
  inputValue: '',
  todos: [],
}

export default function (state: IState = defaultState, action: IAction): IState {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        ...state,
        todos: [
          ...state.todos,
          new Todo(action.payload)
        ]
      }
    case 'UPDATE_INPUT_VALUE': 
      return {
        ...state,
        inputValue: action.payload
      }
    // case 'CHANGE_IS_DONE': {
    //   const todoToChange = state.todos.find((item) => item.id === action.payload.id);
    //   todoToChange.isDone = action.payload
    //   return {
    //     ...state,
    //   }
    // }
  }
  return state
}