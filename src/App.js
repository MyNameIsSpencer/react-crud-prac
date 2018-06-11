import React, { Component } from 'react';
import './App.css';

class App extends Component {

  addTodo(event) {
    event.preventDefault();
    console.log(this.refs);
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
      todos:todos
    })

  }

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [],
      title: "Welcome to your not so bad nightmare"
    }
  }


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
        <h1> {title} </h1>
        <form>
          <input type="text" ref="name" />
          <input type="text" ref="completed" />
          <button onClick={this.addTodo}> Add ToDo </button>
        </form>
        <ul>
          {todos.map((todo => <li>{todo.name}</li>))}
        </ul>
        <pre>
          {JSON.stringify(todos)}
        </pre>
      </div>
    );
  }
}

export default App;
