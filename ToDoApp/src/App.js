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
      objTaskUpdate:{
        id: -1,
        name: "",
        status: false
      },
      nameCurrentTaskForm:"Thêm công việc"
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

  updateLocal(data) {
    const index = this.state.tasks.findIndex(item => item.id === data.id);
    if(index > -1){
      const { name, status} = data;
      console.log(name);
      console.log(status);
      this.state.tasks[index].name = name;
      this.state.tasks[index].status = (status) ? true : false;
      console.log(JSON.stringify(this.state.tasks));
      this.setState({tasks: this.state.tasks});
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
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
      });
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } else {
      const tasks =  [{
        id: 1,
        name: data.txtJobName,
        status: (data.selectStatus === 'true') ? true : false,
      }]
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onHandleSave = (event) => {
    if(event.isUpdating){
      if(event.data){
        this.updateLocal(event.data);
      }
    }else{
      if (event.selectStatus === true) {
        event.selectStatus = 'true';
      }
      this.saveLocal(event);
    }
  }

  onUpdateStatusItem = (event) => {
    const {method} = event;
    const index = this.state.tasks.findIndex(item => +item.id === event.id);
    switch (method){
      case 'status':
        if (index > -1) {
          this.state.tasks[index].status = !this.state.tasks[index].status;
        }
        break;
      case 'delete':
       this.state.tasks.splice(index,1);
        break;
      case 'update':
        this.setState({nameCurrentTaskForm: 'Cập nhật công việc'});
        const objUpdate = this.state.tasks.filter(item => +item.id === +event.id);
        this.setState({
          objTaskUpdate: objUpdate
        }, () =>{
          // console.log(JSON.stringify(this.state.objTaskUpdate));
        });
        break;
    }
    this.setState({
      tasks: this.state.tasks
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  render() {
    // this.saveLocal();
    let {tasks, objTaskUpdate} = this.state;
    return (
        <div>
          <div className="container mt-5">
            <div className="text-center">
              <h1>Quản lí công việc</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <TaskForm
                    nameCurrent = {this.state.nameCurrentTaskForm}
                    objTaskUpdate = {objTaskUpdate}
                    outHandleSave={this.onHandleSave}
                />
              </div>
              <div className="col-sm-8">
                <button className="btn btn-info" style={{color: "#fff"}}>
                  Thêm công việc
                </button>
                <Control/>
                <div className="row mt-2">
                  <TaskList
                      outIdTaskItem={this.onUpdateStatusItem}
                      tasks={tasks}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
