import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    const { addTodo } = this.props;
    e.preventDefault();
    addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            name="title"
            placeholder="Add Todo...."
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.handleChange}
            className="form-control"
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-info input-group-append"
          />
        </div>
      </form>
    );
  }
}

export default AddToDo;
