import {Component} from "react";

class Product extends Component{
    render(){
        return(
            <div>
                <h1>List product</h1>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        );
    }

}
export default Product;
