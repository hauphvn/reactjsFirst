import { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  onUpdateStatusItem = (event) =>{
    this.props.outIdTaskItem(event);
  }
  render() {
    let { tasks } = this.props;
    let listItems = [];
    if(tasks){
      listItems = tasks.map((item, index) => {
          return <TaskItem
              id = {item.id}
              key = {index}
              outStatusTaskItem = {this.onUpdateStatusItem}
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
          <tr>
            <td></td>
            <td>
              <input
                  placeholder={'Tìm công việc...'}
                  className={'form-control'}
                  type="text"/>
            </td>
            <td>
              <select
                  name="filterStatus"
                  className={'form-control'}>
                <option value="{-1}">Tấc cả</option>
                <option value="{0}">Ẩn</option>
                <option value="{1}">Kích hoạt</option>
              </select>
            </td>
            <td>  </td>
          </tr>
          {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
