import {Component} from "react";

class TaskItem extends Component {
    onChosen = (event) => {
        this.props.outStatusTaskItem(this.props.id);
    }

    render() {
        const {name, no, status} = this.props;
        return (
            <tr>
                <th scope={"row"}>{no}</th>
                <td>{name}</td>
                <td>
                    <div
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
                        className={"badge bg-warning text-wrap"}
                        style={{color: "black", marginRight: "4px"}}
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
