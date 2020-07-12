import React, { Component } from "react";

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
        kry: Date.now(),
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
    return (
      <React.Fragment>
        <h1
          className="text-white text-center"
          style={{
            maxWidth: "38rem",
            margin: "10rem auto 2rem",
            fontWeight: "bold",
          }}
        >
          ToDo List
        </h1>
        <div
          className="card text-white bg-info mb-3"
          style={{ maxWidth: "38rem", margin: "auto" }}
        >
          <div className="card-header">
            <form onSubmit={this.addWork.bind(this)}>
              <div className="form-group">
                <label>What do you want to do</label>
                <input
                  type="text"
                  value={this.state.currentWork.work}
                  className="form-control"
                  placeholder="Add a task"
                  style={{ maxWidth: "28rem", display: "inline-block" }}
                  onChange={this.handleChange.bind(this)}
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
          <div className="card-body">
            <h5 className="card-title">Your pending tasks:</h5>
            {this.state.works.map((work, index) => (
              <React.Fragment key={index}>
                <p
                  className="card-text"
                  style={{
                    minWidth: "80%",
                    maxWidth: "80%",
                    display: "inline-block",
                  }}
                >
                  {work}
                </p>
                <button
                  className="btn btn-danger"
                  style={{ margin: "0 0 0 5%" }}
                  onClick={() => this.handleDelete(index)}
                >
                  Delete
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
