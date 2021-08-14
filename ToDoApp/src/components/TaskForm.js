import {Component} from "react";

class TaskForm extends Component {
  constructor(){
    super();
    this.state = {
      isUpdating: false,
      updated: false,
      isAddNewTask: true,
      txtJobName: '',
      selectStatus: true,
      objUpdateTask: {
        id: -1,
        name: "",
        status: false
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(Math.random());
    if (this.state.isUpdating) {
      if (this.state.updated) {
        this.setState({isUpdating: false});
      }
    } else {
      if (this.props.objTaskUpdate[0] !== undefined && this.props.objTaskUpdate[0].id !== -1) {
        if (!this.state.isUpdating) {
          this.setState({isUpdating: true});
          this.setState({updated: false});
          this.state.objUpdateTask.id = this.props.objTaskUpdate[0].id;
          this.setState({
            txtJobName: this.props.objTaskUpdate[0].name,
            selectStatus: this.props.objTaskUpdate[0].status,
          });
        }
      }
    }
  }

  onHandleChangeForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
        {[name]: value}
    );
  }
  onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    if(this.state.isUpdating){
    }
    this.setState({
      txtJobName: '',
      selectStatus: true
    });
  }
  onSaveNewTask = (event) => {
    event.preventDefault();
    if (!this.state.isUpdating) {
      this.props.outHandleSave(this.state);
    } else {
      this.state.objUpdateTask.name = this.state.txtJobName;
      this.state.objUpdateTask.status = this.state.selectStatus;
      const obj = {
        isUpdating: true,
        data: this.state.objUpdateTask
      }
      this.props.outHandleSave(obj);
      this.setState({updated: true});
      this.onReset();
    }
  }
  render() {
    // console.log(this.state.txtJobName);
    return (
      <div>
        <div className="card">
          <div className="card-header">{this.props.nameCurrent}</div>
          <div className="card-body">
            <form id={'idTaskForm'}>
              <div className="form-group">
                <label htmlFor="idNameJob">Tên công việc </label> <br/>
                <input
                    type="text"
                    id={"idNameJob"}
                    value={this.state.txtJobName}
                    onChange={this.onHandleChangeForm}
                    name='txtJobName'/> <br/>
                <label htmlFor="idSelectStatus" className={"mt-2"}>
                  Trạng thái
                </label>
                <select
                    onChange={this.onHandleChangeForm}
                    className={"form-control"}
                    name="selectStatus"
                    id="idSelectStatus"
                    value={this.state.selectStatus}
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
