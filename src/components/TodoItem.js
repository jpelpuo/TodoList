import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    const { todo } = this.props;
    return {
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todo, toggleComplete, deleteTodo } = this.props;
    return (
      <div style={this.getStyle()} className="list-group">
        <p className="list-group-item">
          <input
            type="checkbox"
            onChange={toggleComplete.bind(this, todo.id)}
            className="py-1"
          />{" "}
          <span className="font-weight-bold">{todo.title}</span>
          <button className="btn btn-danger float-right rounded" onClick={deleteTodo.bind(this, todo.id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};


export default TodoItem;
