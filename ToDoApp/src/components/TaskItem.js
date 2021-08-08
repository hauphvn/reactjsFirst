import { Component } from "react";
class TaskItem extends Component {
  render() {
      const {name, no, status} = this.props;
    return (
        <tr>
          <th scope={"row"}>{no}</th>
          <td>{name}</td>
          <td>

            <div className={status ? "badge bg-danger text-wrap" : "badge bg-info text-wrap"}>{status ? "Kích hoạt" : "Ẩn"}</div>
          </td>
          <td>
            <div
              className={"badge bg-warning text-wrap"}
              style={{ color: "black", marginRight: "4px" }}
            >
              Sửa
            </div>
            <div className={"badge bg-danger text-wrap"}>Xóa</div>
          </td>
        </tr>
    );
  }
}

export default TaskItem;
