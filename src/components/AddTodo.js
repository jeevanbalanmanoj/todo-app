import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  /*Why not two way binding?*/

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "10", padding: "5px" }}
          name="title"
          type="text"
          value={this.state.title}
          placeholder="Add Todo ..."
          onChange={this.onChange}
        ></input>
        <input
          style={{ flex: "1" }}
          type="submit"
          value="submit"
          className="btn"
        ></input>
      </form>
    );
  }
}
// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
