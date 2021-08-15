import { Component } from "react";

class Search extends Component {
  render() {
    return (
        <div className="col-sm-6">
          <div className="input-group">
            <input
                type="text"
                className={"form-control"}
                placeholder={"Nhập tên cần tìm"}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-info">Tìm</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Search;
