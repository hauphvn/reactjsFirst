import { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">Thêm công việc</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="idNameJob">Tên công việc </label> <br />
                <input type="text" id={"idNameJob"} /> <br />
                <label htmlFor="idSelectStatus" className={"mt-2"}>
                  Trạng thái
                </label>
                <select
                  className={"form-control"}
                  name="selectStatus"
                  id="idSelectStatus"
                >
                  <option value={0}>Kích hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </div>
              <div className={'mt-2 btn-between'}>
                <button className={'btn btn-success'}>Lưu</button>
                <button className={'btn btn-danger'}>Hủy</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
