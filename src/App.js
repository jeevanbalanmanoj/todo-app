import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos.js";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
class App extends Component {
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;

        return todo;
      }),
    });
  };
  state = {
    todos: [
      {
        id: 1,
        title: "Finish react video",
        completed: false,
      },
      {
        id: 2,
        title: "Guitar for an hour",
        completed: true,
      },
      {
        id: 3,
        title: "Work on cortana flow",
        completed: true,
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos
              delTodo={this.delTodo}
              markComplete={this.markComplete}
              todos={this.state.todos}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
