import Button from '@material-ui/core/Button';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as fromActions from '../redux/todo/actions';

interface IProps {
  fetchTodos: () => void
}

const FetchTodos = ({ fetchTodos }: IProps) => {
  const onFetchClick = () => fetchTodos();

  return (
    <Button onClick={onFetchClick} color="secondary" variant="contained">
      Fetch Todos!
    </Button>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<fromActions.Actions>) => ({
  fetchTodos: () => dispatch(fromActions.Actions.fetchTodos())
});

export default connect(null, mapDispatchToProps)(FetchTodos);