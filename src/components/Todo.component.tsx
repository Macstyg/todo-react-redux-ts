import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as fromActions from '../redux/todo/actions';
import TodoModel from './Todo.model';

interface IProps {
  todo: TodoModel,
  updateTodo: (todo: TodoModel) => void,
  deleteTodo: (id: string) => void,
}

interface IMyOwnProps {
  todo: TodoModel,
}

interface IDispatchProps {
  updateTodo: (todo: TodoModel) => void,
  deleteTodo: (id: string) => void,
}

const Todo = ({ todo, updateTodo, deleteTodo }: IProps) => {
  const onChangeCheckbox = (event: any) => updateTodo({...todo, isDone: event.target.checked})
  const onDeleteClick = () => deleteTodo(todo.id);

  return (
    <ListItem>
        <Checkbox
            checked={todo.isDone}
            onChange={onChangeCheckbox}
        />
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments" onClick={onDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<fromActions.Actions>) => ({
  deleteTodo: (id: string) => dispatch(fromActions.Actions.deleteTodo(id)),
  updateTodo: (todo: TodoModel) => dispatch(fromActions.Actions.updateTodo(todo))
})

export default connect<{}, IDispatchProps, IMyOwnProps>(null, mapDispatchToProps)(Todo);