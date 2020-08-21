import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About.js";
import Todos from "./components/Todos.js";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo";
//import { v4 as uuid } from "uuid";
import Axios from "axios";
class App extends Component {
  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
  }
  delTodo = (id) => {
    Axios.delete("https://jsonplaceholder.typicode.com/todos/${id}").then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };
  addTodo = (title) => {
    if (!title.trim()) return;
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then((res) =>
      this.setState({
        todos: [...this.state.todos, res.data],
      })
    );
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
    todos: [],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  {" "}
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    delTodo={this.delTodo}
                    markComplete={this.markComplete}
                    todos={this.state.todos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
