import { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  render() {
    return (
      <div className="col sm-12">
        <table className={"table table-striped"}>
          <thead>
            <tr>
              <th scope={"col"}>STT</th>
              <th scope={"col"}>Tên</th>
              <th scope={"col"}>Trạng thái</th>
              <th scope={"col"}>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
