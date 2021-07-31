import {Component} from "react";

class ColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            colors: ['red', 'blue', 'green', '#ccc']
        }
    }

    showColor(color) {
        const obj = {
            backgroundColor: color,
        }
        return obj;
    }

    onChoose(color) {
        // const btnColor = document.getElementsByClassName('chose-active');
        // for(const btn of btnColor){
        //     btn.classList.remove('chose-active');
        // }
        // const btnChosen = document.getElementById('btnColor-'+index);
        // if(btnChosen){
        //     btnChosen.classList.add('chose-active');
        // }

        //Out to app component
        this.props.outChosenColor(color);
    }


    render() {
        let elementColor = this.state.colors.map((item, index) =>{
            return <button
                id={'btnColor-'+index}
                onClick={() => this.onChoose(item)}
                className={'space-item'}
                key={index}
                style={this.showColor(item)}
                className={(this.props.chooseDefault.color === item ? 'chose-active' : '')}
            >{item}</button>
        });
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Color picker</h5>
                    <div className="card-body">
                        {elementColor}
                        {/*<button className="btn btn-primary space-item">Primary</button>*/}
                        {/*<button className="btn btn-secondary space-item">Secondary</button>*/}
                        {/*<button className="btn btn-danger space-item">Danger</button>*/}
                        {/*<button className="btn btn-info space-item">Info</button>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
