import './App.css';
import {Component} from "react";
import ColorPicker from "./components/ColorPicker";
import FontSize from "./components/FontSize";
import Reset from "./components/Reset";
import Input from "./components/Input";
import ResultList from "./components/ResultList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            chooseDefault: {
                color: 'red',
                size: 15
            },
            products: [
                {
                    name: 'product name',
                    price: 0,
                    status: false
                },
                {
                    name: 'product name 1',
                    price: 1,
                    status: true
                }
            ]
        };
        this.onChosenColor = this.onChosenColor.bind(this);
    }

    onChosenColor(color) {
        this.setState({
            chooseDefault:{
                color: color,
                size: this.state.chooseDefault.size
            }
        })
    }

    render() {
        const products = this.state.products.filter(item => item.status);
        return (
            <div>
                <div className="container app-top">
                    <div className="row">
                        <div className="col-sm-6">
                            <ColorPicker
                                outChosenColor={this.onChosenColor}
                                chooseDefault={this.state.chooseDefault}
                            />
                        </div>
                        <div className="col-sm-6">
                            <FontSize/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Reset
                                outChosenColor = {this.onChosenColor}
                                chooseDefault = {this.state.chooseDefault}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Input/>
                        </div>
                    </div>
                    <div className="row app-top">
                        <div className="col-sm-12">
                            <ResultList
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
