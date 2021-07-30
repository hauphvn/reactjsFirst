import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import Product from "./components/Product"

class App extends Component {
    render() {
        const products = [
            {
                name: 'coffee 1',
                price: 40
            },
            {
                name: 'coffee 2',
                price: 50
            }
        ];

        let mapProducts = products.map((item, index) => {
            return(
                <div>
                    <Product
                        name={item.name}
                        price={item.price}
                    />
                </div>
            );
        });
        return (
            <div>
                <h1>App component</h1>
                <Header/>
                <hr/>
                {mapProducts}
            </div>
        );
    }
}

export default App;
