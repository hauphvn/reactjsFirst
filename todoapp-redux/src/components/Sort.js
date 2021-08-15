import { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-toggle={"dropdown"}
            type="button"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sắp xếp
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Tên A-Z
            </a>
            <a className="dropdown-item" href="#">
              Tên Z-A
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
