import {Component} from "react";
import{Button} from "react-bootstrap";

class Header extends Component{
    render(){
        return (
            <div>
                <h1>this is a header</h1>
                <button className='btn btn-success'> click here</button>
            </div>

        );
    }
}
export default Header;