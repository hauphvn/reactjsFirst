import { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  render() {
    let { tasks } = this.props;
    let listItems = [];
    if(tasks){
      listItems = tasks.map((item, index) => {
          return <TaskItem
              key = {index}
              status = {item.status}
              no={index + 1}
              name={item.name} />;
      });
    }
    return (
      <div className="col-sm-12">
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
          {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
