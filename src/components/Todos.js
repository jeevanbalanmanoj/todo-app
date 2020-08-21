import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
/*function Todos({ todo, index }) {
  return (
    <div className="todo">
      <h1>{todo.text}</h1>
    </div>
  );
}*/

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
