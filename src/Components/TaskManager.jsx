import React from "react";
import Task from "./Task";

const TaskManager = (props) => {
  return props.works.map((work, index) => (
    <Task
      key={index}
      task={work}
      index={index}
      handleDelete={props.handleDelete}
    />
  ));
};
export default TaskManager;
