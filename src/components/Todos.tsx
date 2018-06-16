import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../redux/rootReducer';
import Todo from './Todo.component';
import TodoModel from './Todo.model';

interface IProps {
  todos: TodoModel[]
}

interface IStateProps {
  todos: TodoModel[]
}

const Todos = ({ todos }: IProps) => (
  <Grid container={true} alignItems="center" justify="center">
    <Grid item={true} xs={6}>
      <List>
      {todos.map(item => {
        return <Todo key={item.id} todo={item}/>
      })}
      </List>
    </Grid>
  </Grid>
);

const mapStateToProps = (state: IState) => ({
  todos: state.todos.todos
});

export default connect<IStateProps, null, {}>(mapStateToProps, null)(Todos);