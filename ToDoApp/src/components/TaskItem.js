import { Component } from "react";
class TaskItem extends Component {
  render() {
    return (
        <tr>
          <th scope={"row"}>1</th>
          <td>Học React JS</td>
          <td>
            <div className={"badge bg-danger text-wrap"}>Kích hoạt</div>
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
