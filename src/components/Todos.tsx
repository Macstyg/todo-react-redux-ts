import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import * as React from 'react';
import Todo from './Todo';

const Todos = () => (
  <Grid container={true} alignItems="center" justify="center">
    <Grid item={true} xs={6}>
      <List>
      {[{id: 1, title: 'Todo 1', isDone: false}, {id: 2, title: 'Todo 2', isDone: true}].map((item) => {
        return <Todo key={item.id} title={item.title} isDone={item.isDone}/>
      })}
      </List>
    </Grid>
  </Grid>
);

export default Todos;