import {Component} from "react";

class ResultList extends Component{
    products = this.props.products;
    render(){
        return(
            <div>
                <h5>List product</h5>
                <ul className="list-group">
                    <li className="list-group-item">Coffee 1</li>
                    <li className="list-group-item">Coffee 1</li>
                    <li className="list-group-item">Coffee 1</li>
                    <li className="list-group-item">Coffee 1</li>
                </ul>
            </div>
        );
    }
}
export default ResultList;

