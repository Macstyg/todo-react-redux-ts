import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';

interface IProps {
  title: string,
  isDone: boolean
}

const Todo = ({ title, isDone }: IProps) => (
    <ListItem>
        <Checkbox
            checked={isDone}
        />
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

export default Todo;