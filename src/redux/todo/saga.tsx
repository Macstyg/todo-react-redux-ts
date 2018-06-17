import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import TodoModel from '../../components/Todo.model';
import * as fromActions from './actions';

function* fetchTodos(action: fromActions.Actions) {
  try {
    const todos = [new TodoModel('first'), new TodoModel('second'), new TodoModel('third')];
    yield delay(1000)
    yield put(fromActions.Actions.finichFetchTodos(todos))
  } catch(e) {
    console.error('Error fetching todos >>>', e)
  }
}

function* todoSaga() {
  yield takeLatest(fromActions.FETCH_TODOS, fetchTodos)
}

export default todoSaga;