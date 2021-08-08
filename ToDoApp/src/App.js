import "./App.css";
import {Component} from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Angular",
          status: true,
        },
      ],
    };
  }

  componentWillMount() {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      });
    }else{
      this.setState({
        tasks: []
      });
    }

  }

  saveLocal(data) {
    const sizeList = this.state.tasks.length;
    if (sizeList > 0) {
      const objNewTask = {
        id: sizeList + 1,
        name: data.txtJobName,
        status: (data.selectStatus === 'true') ? true : false,
      }
      this.state.tasks.push(objNewTask);
      this.setState({
        tasks: this.state.tasks
      })
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } else {
      this.state.tasks.push({
        id: 1,
        name: data.txtJobName,
        status: (data.selectStatus === 1) ? true : false,
      });
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  onHandleSave = (event) => {
    if(event.selectStatus === true){
      event.selectStatus = 'true';
    }
    this.saveLocal(event);

  }

  render() {
    // this.saveLocal();
    let {tasks} = this.state;
    return (
        <div>
          <div className="container mt-5">
            <div className="text-center">
              <h1>Quản lí công việc</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <TaskForm
                    outHandleSave={this.onHandleSave}
                />
              </div>
              <div className="col-sm-8">
                <button className="btn btn-info" style={{color: "#fff"}}>
                  Thêm công việc
                </button>
                <Control/>
                <div className="row mt-2">
                  <TaskList tasks={tasks}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
