import { Component } from "react";
class TaskForm extends Component {
  constructor(){
    super();
    this.state = {
      txtJobName: '',
      selectStatus: true
    }
  }
  onHandleChangeForm = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
        {[name]: value}
    );
  }
  onSaveNewTask = (event) =>{
    event.preventDefault();
    this.props.outHandleSave(this.state);

    // const tasks = localStorage.getItem('tasks');
    // const newTask = {
    //   id: (tasks) ? tasks.length + 1 : 0,
    //   name: this.state.txtJobName,
    //   status: true,
    // }
    // localStorage.setItem()

  }
  render() {
    // console.log(this.state.txtJobName);
    return (
      <div>
        <div className="card">
          <div className="card-header">Thêm công việc</div>
          <div className="card-body">
            <form id={'idTaskForm'}>
              <div className="form-group">
                <label htmlFor="idNameJob">Tên công việc </label> <br />
                <input
                    type="text"
                    id={"idNameJob"}
                    onChange={this.onHandleChangeForm}
                    name='txtJobName' /> <br />
                <label htmlFor="idSelectStatus" className={"mt-2"}>
                  Trạng thái
                </label>
                <select
                    onChange={this.onHandleChangeForm}
                  className={"form-control"}
                  name="selectStatus"
                  id="idSelectStatus"
                >
                  <option value={'true'}>Kích hoạt</option>
                  <option value={'false'}>Ẩn</option>
                </select>
              </div>
              <div className={'mt-2 btn-between'}>
                <button
                    type={'submit'}
                    onClick={this.onSaveNewTask}
                    className={'btn btn-success'}
                >Lưu</button>
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
