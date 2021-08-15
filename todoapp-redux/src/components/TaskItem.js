import {Component} from "react";

class TaskItem extends Component {
    onChosen = (event) => {
        const objEvent = {
            id: this.props.id,
            method: event.target.dataset.method
        }
        this.props.outStatusTaskItem(objEvent);
    }

    render() {
        const {name, no, status} = this.props;
        return (
            <tr>
                <th scope={"row"}>{no}</th>
                <td>{name}</td>
                <td>
                    <div
                        data-method = "status"
                        onClick={this.onChosen}
                        className={status
                            ? "btn-status-item badge bg-danger text-wrap"
                            : " btn-status-item badge bg-info text-wrap"}>
                <span>
                    {status ? "Kích hoạt" : "Ẩn"}
                </span>
                    </div>
                </td>
                <td>
                    <div
                        onClick={this.onChosen}
                        data-method = "update"
                        className={"btn-item badge bg-warning text-wrap"}
                        style={{marginRight: "4px"}}
                    >
                        Sửa
                    </div>
                    <div
                        onClick={this.onChosen}
                        data-method = "delete"
                        className={"btn-item badge bg-danger text-wrap"}>
                        Xóa</div>
                </td>
        </tr>
    );
  }
}

export default TaskItem;
