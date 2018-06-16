import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../redux/todoReducer';
import Todo from './Todo.component';
import TodoModel from './Todo.model';

const Todos = ({ todos }: { todos: TodoModel[]}) => (
  <Grid container={true} alignItems="center" justify="center">
    <Grid item={true} xs={6}>
      <List>
      {todos.map(item => {
        return <Todo key={item.id} title={item.title} isDone={item.isDone}/>
      })}
      </List>
    </Grid>
  </Grid>
);

const mapStateToProps = (state: IState) => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(Todos);