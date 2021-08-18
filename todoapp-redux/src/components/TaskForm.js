import {Component} from "react";
import {connect} from "react-redux";
import * as actions from '../actions/index'

class TaskForm extends Component {
  constructor() {
    super();
    // this.state = {
    //   task: {
    //     name: '',
    //     status: false
    //   }
    // }
  }

  onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
  };
  onChangeForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

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
                    onChange={this.onChangeForm}
                    type="text"
                    id={"idNameJob"}
                    placeholder={'Name...'}
                    name='txtJobName'/> <br/>
                  <label htmlFor="idSelectStatus" className={"mt-2"}>
                    Trạng thái
                  </label>
                  <select
                      className={"form-control"}
                      name="selectStatus"
                      id="idSelectStatus"
                      onChange={this.onChangeForm}
                      defaultValue={-1}
                  >
                    <option disabled={true} value={-1}>Chọn</option>
                    <option value={1}>Kích hoạt</option>
                    <option value={0}>Ẩn</option>
                  </select>
              </div>
              <div className={'mt-2 btn-between'}>
                <button
                    type={'submit'}
                    onClick={this.onHandleSubmit}
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
