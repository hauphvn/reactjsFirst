import {Component} from "react";
import {connect} from "react-redux";

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <th scope={"row"}>{this.props.no}</th>
                <td>{this.props.name}</td>
                <td>
                    <div
                        data-method = "status"
                        className={this.props.status === "1"
                            ? "btn-status-item badge bg-danger text-wrap"
                            : " btn-status-item badge bg-info text-wrap"}>
                <span>
                    {this.props.status === "1" ? "Kích hoạt" : "Ẩn"}
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
