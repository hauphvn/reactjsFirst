import "./App.css";
import {Component} from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <div className="container mt-5">
            <div className="text-center">
              <h1>Quản lí công việc</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <TaskForm
                />
              </div>
              <div className="col-sm-8">
                <button className="btn btn-info" style={{color: "#fff"}}>
                  Thêm công việc
                </button>
                <Control/>
                <div className="row mt-2">
                  <TaskList/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
