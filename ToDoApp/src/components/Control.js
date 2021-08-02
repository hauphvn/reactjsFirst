import { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div className="row mt-2">
        <Sort />
        <Search />
      </div>
    );
  }
}

export default Control;
