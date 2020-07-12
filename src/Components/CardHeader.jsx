import React from "react";

const CardHeader = (props) => {
  return (
    <div className="card-header">
      <form onSubmit={props.addWork}>
        <div className="form-group">
          <label>What do you want to do</label>
          <input
            type="text"
            value={props.value}
            className="form-control"
            placeholder="Add a task"
            style={{ maxWidth: "28rem", display: "inline-block" }}
            onChange={props.handleChange}
          />
          <button
            type="submit"
            value="Submit"
            className="btn btn-light"
            style={{ margin: "0 0 1% 5%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardHeader;
