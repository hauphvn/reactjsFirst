import {Component} from "react";

class FontSize extends Component{
    render() {
        return(
            <div>
                <div className="card">
                    <h5 className="card-header">Font size</h5>
                    <div className="card-body">
                        <button className="btn btn-success space-item">[ + ]</button>
                        <button className="btn btn-warning space-item">[ - ]</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default FontSize;
