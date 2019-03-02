import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        borderBottom: "1px #ccc dotted",
        textDecoration: "line-through"
      };
    } else {
      return {
        borderBottom: "1px #ccc dotted",
        textDecoration: "none"
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}{" "}
          <button
            className="btn btn-outline-danger"
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  // background: "#ff0000",
  // color: "#fff",
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
