import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="text-center">
            <h1>Quản lí công việc</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-header">Thêm công việc</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="idNameJob">Tên công việc </label> <br/>
                      <input type="text" id={"idNameJob"}/> <br/>
                      <label htmlFor="idSelectStatus" className={'mt-2'}>Trạng thái</label>
                      <select className={'form-control'} name="selectStatus" id="idSelectStatus">
                        <option value={0}>Kích hoạt</option>
                        <option value={0}>Ẩn</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <button className="btn btn-info" style={{color: '#fff'}}>Thêm công việc</button>
              <div className="row mt-2">
                <div className="col-sm-6">
                  <div className="input-group">
                    <input type="text" className={'form-control'} placeholder={'Nhập tên cần tìm'}/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-info">Tìm</button>
                  </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sắp xếp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Tên A-Z</a>
                      <a className="dropdown-item" href="#">Tên Z-A</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col sm-12">
                  <table className={'table table-striped'}>
                    <thead>
                    <tr>
                      <th scope={'col'}>STT</th>
                      <th scope={'col'}>Tên</th>
                      <th scope={'col'}>Trạng thái</th>
                      <th scope={'col'}>Hành Động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope={'row'}>1</th>
                      <td>Học React JS</td>
                      <td><div className={'badge bg-danger text-wrap'}>Kích hoạt</div></td>
                      <td>
                        <div className={'badge bg-warning text-wrap'} style={{color: "black", marginRight: "4px"}}>Sửa</div>
                        <div className={'badge bg-danger text-wrap'}>Xóa</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
