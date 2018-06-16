import * as React from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import AppHeader from './components/AppHeader';
import Todos from './components/Todos';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppHeader />
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
