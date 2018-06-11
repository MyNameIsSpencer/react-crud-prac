import React, { Component } from 'react';
import './App.css';

class App extends Component {

  removeTodo(index) {
    let todos = this.state.todos;

    let todo = todos.findIndex(function(todo) {
      return todo.counter === index
    });

    todos.splice(todo, 1);

    this.setState({
      todos: todos
    });
  }

  addTodo(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;
    let todo = {
      name,
      completed,
      counter
    };
    counter += 1;
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos:todos,
      counter: counter
    });

    this.refs.todoForm.reset();

  }

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: "Welcome to your not so bad nightmare",
      counter: 0
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
        <h1> {title} </h1>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="what do you need to do?"/>
          <input type="text" ref="completed" placeholder="is it done yet?"/>
          <button onClick={this.addTodo}> Add ToDo </button>
        </form>
        <ul>
          {todos.map((todo => <li key={todo.counter}>{todo.name}
              <button onClick={this.removeTodo.bind(null, todo.counter)}>Remove Todo</button>
            </li>))}
        </ul>

      </div>
    );
  }
}

export default App;
