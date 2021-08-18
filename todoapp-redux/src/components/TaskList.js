import {Component} from "react";
import TaskItem from "./TaskItem";
import {connect} from "react-redux";

class TaskList extends Component {
  render() {
    let {tasks} = this.props;
    let listItems = [];
    if (tasks) {
      listItems = tasks.map(item => {
        return <TaskItem
            key={item.id}
            no={item.id}
            name={item.name}
            status={item.status}
        />
      })
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

const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks
  };
};
export default connect(mapStateToProps, null)(TaskList);
