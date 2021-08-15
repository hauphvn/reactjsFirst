import {Component} from "react";

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <th scope={"row"}>1</th>
                <td>Name</td>
                <td>
                    <div
                        data-method = "status"
                        className={true
                            ? "btn-status-item badge bg-danger text-wrap"
                            : " btn-status-item badge bg-info text-wrap"}>
                <span>
                    {true ? "Kích hoạt" : "Ẩn"}
                </span>
                    </div>
                </td>
                <td>
                    <div
                        data-method = "update"
                        className={"btn-item badge bg-warning text-wrap"}
                        style={{marginRight: "4px"}}
                    >
                        Sửa
                    </div>
                    <div
                        data-method = "delete"
                        className={"btn-item badge bg-danger text-wrap"}>
                        Xóa</div>
                </td>
        </tr>
    );
  }
}

export default TaskItem;
