import React from "react";

const Task = (props) => {
  return (
    <React.Fragment>
      <p
        className="card-text"
        style={{
          minWidth: "80%",
          maxWidth: "80%",
          display: "inline-block",
        }}
      >
        {props.task}
      </p>
      <button
        className="btn btn-danger"
        style={{ margin: "0 0 0 5%" }}
        onClick={() => props.handleDelete(props.index)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Task;
