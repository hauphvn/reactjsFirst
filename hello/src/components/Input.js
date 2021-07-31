import {Component} from "react";

class Input extends Component{
    render(){
        return(
            <div>
              <div className="card">
                  <h5 className="card-header">Input</h5>
                  <div className="card-body">
                      <div className="input-group mb-3">
                          <div className="input-group-prepend">
                              <button className="btn btn-outline-info" type={'button'}>Save</button>
                              <select name="productName" id="inputGroupSelectProduct">
                                  <option defaultValue="0" >Choose...</option>
                                  <option value="1">Viet Coffee</option>
                                  <option value="2">Italian Coffee</option>
                                  <option value="3">Milk tea</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
export default Input;
