import {Component} from "react";

class TaskForm extends Component {


  onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  onSaveNewTask = (event) => {
    event.preventDefault();
  }
  render() {
    // console.log(this.state.txtJobName);
    return (
      <div>
        <div className="card">
          <div className="card-header">Task header name</div>
          <div className="card-body">
            <form id={'idTaskForm'}>
              <div className="form-group">
                <label htmlFor="idNameJob">Tên công việc </label> <br/>
                <input
                    type="text"
                    id={"idNameJob"}
                    value={'value name input'}
                    name='txtJobName'/> <br/>
                <label htmlFor="idSelectStatus" className={"mt-2"}>
                  Trạng thái
                </label>
                <select
                    className={"form-control"}
                    name="selectStatus"
                    id="idSelectStatus"
                    value={'value select'}
                >
                  <option value={1}>Kích hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </div>
              <div className={'mt-2 btn-between'}>
                <button
                    type={'submit'}
                    onClick={this.onSaveNewTask}
                    className={'btn btn-success'}
                >Lưu</button>
                <button
                    onClick={this.onReset}
                    className={'btn btn-danger'}
                >Hủy</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
