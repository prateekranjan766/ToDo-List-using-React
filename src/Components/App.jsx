import React, { Component } from "react";
import TaskManager from "./TaskManager";
import CardHeader from "./CardHeader";
import Heading from "./Heading";

class App extends Component {
  state = {
    works: [],
    currentWork: {
      work: "",
      key: "",
    },
  };

  handleChange(e) {
    this.setState({
      currentWork: {
        work: e.target.value,
        key: Date.now(),
      },
    });
  }

  addWork(e) {
    e.preventDefault();
    const work = this.state.currentWork.work;
    if (work !== "") {
      const previousWorks = this.state.works.filter((item) => item !== work);
      this.setState({
        works: [work, ...previousWorks],
        currentWork: {
          work: "",
          key: "",
        },
      });
    }
  }

  handleDelete = (index) => {
    const works = this.state.works.filter(
      (work) => work !== this.state.works[index]
    );
    this.setState({
      works,
    });
  };

  render() {
    const count = this.state.works.length;
    return (
      <React.Fragment>
        <Heading />
        <div
          className="card text-white bg-info mb-3"
          style={{ maxWidth: "38rem", margin: "auto" }}
        >
          <CardHeader
            addWork={this.addWork.bind(this)}
            value={this.state.currentWork.work}
            handleChange={this.handleChange.bind(this)}
          />
          <div className="card-body">
            <h5 className="card-title">
              You have {count === 0 ? "no" : count} tasks to do
              {count === 0 ? "." : ":"}
            </h5>
            <TaskManager
              works={this.state.works}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
