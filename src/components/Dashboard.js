import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = (props) => (
  <div className="task-card row">
    <div className="col-6">{props.task.taskname}</div>
    <div className="col-2">{props.task.deadline.substring(0, 10)}</div>
    <div className="col-2">
      <Link to={"/edit/" + props.task._id}>edit</Link> |{" "}
    </div>
    <div className="col-2">
      <a
        href="#"
        onClick={() => {
          props.deleteTask(props.task._id);
        }}
      >
        done
      </a>
    </div>
  </div>
);

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);

    this.state = { tasks: [] };
  }

  /*componentDidMount() {
    axios
      .get("http://localhost:2000/exercises/")
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((error) => {
        console.log("error found " + error);
      });
  }*/

  deleteTask(id) {
    axios
      .delete("http://localhost:2000/exercises/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      tasks: this.state.tasks.filter((el) => el._id != id),
    });
  }

  taskList() {
    return this.state.exercises.map((currenttask) => {
      return (
        <Task
          task={currenttask}
          deleteTask={this.deleteTask}
          key={currenttask._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-content">
          <div className="row">
            <div className="col-5">
              <div className="user-card row">
                <img
                  src="https://avatars3.githubusercontent.com/u/54023346?s=400&u=36bac93400be27cd1108130797251f8545ce3a97&v=4"
                  alt="user"
                  className="col-auto"
                />
                <p className="col-12 col-md-auto user-details">
                  <strong>Tanish Agarwal</strong>
                  <br /> <em>tanishagarwal81201@gmail.com</em>
                </p>
              </div>
            </div>
            <div className="col-7">
              <div className="task-card row">
                <div className="col-6">taskname</div>
                <div className="col-2">deadline</div>
                <div className="col-2">edit</div>
                <div className="col-2">done</div>
              </div>
              <div className="task-card row">
                <div className="col-6">taskname</div>
                <div className="col-2">deadline</div>
                <div className="col-2">edit</div>
                <div className="col-2">done</div>
              </div>
              <div className="task-card row">
                <div className="col-6">taskname</div>
                <div className="col-2">deadline</div>
                <div className="col-2">edit</div>
                <div className="col-2">done</div>
              </div>
              <button type="button" class="btn btn-warning btn-circle btn-xl">
                <Link to="/add">
                  <strong>+</strong>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
