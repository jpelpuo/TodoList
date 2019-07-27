import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const { todos, toggleComplete, deleteTodo } = this.props;

    return todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      );
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
