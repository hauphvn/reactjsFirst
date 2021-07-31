import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            txtFullName: '',
            txtEmail: '',
            sltCity: -1,
            rdGender: "1",
            checkboxStatus: true
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit(event){
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card-default">
                                <div className="card-header">Form</div>
                                <div className="card-body">
                                    <form onSubmit={this.onHandleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full name</label>
                                            <input
                                                onChange={this.onHandleChange}
                                                value={this.state.txtFullName}
                                                id={"idInputFullName"}
                                                type="text"
                                                name={"txtFullName"}
                                                className={"form-control"}
                                                placeholder={"Enter full name"}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                onChange={this.onHandleChange}
                                                value={this.state.txtEmail}
                                                id={"idEmail"}
                                                type="email"
                                                name={"txtEmail"}
                                                className={"form-control"}
                                                placeholder={"Enter email"}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="gender">City</label>
                                            <select
                                                onChange={this.onHandleChange}
                                                value={this.state.sltCity}
                                                name="sltGender"
                                                className={"form-control"}
                                                id="gender">
                                                <option value={-1}>Choose city</option>
                                                <option value={0}>Ho Chi Minh</option>
                                                <option value={1}>Vung Tau</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    onChange={this.onHandleChange}
                                                    className={"form-check-input"}
                                                    id={"idGender"}
                                                    name={'rdGender'}
                                                    value={1}
                                                    checked={this.state.rdGender === "1"}
                                                    type="radio"/>
                                                <label htmlFor={"idGender"}>Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    onChange={this.onHandleChange}
                                                    className={"form-check-input"}
                                                    id={"idGenderFemale"}
                                                    name={'rdGender'}
                                                    value={0}
                                                    checked={this.state.rdGender === "0"}
                                                    type="radio"/>
                                                <label htmlFor={"idGenderFemale"}>Female</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    onChange={this.onHandleChange}
                                                    className={"form-check-input"}
                                                    id={"idStatus"}
                                                    name={'checkboxStatus'}
                                                    value={this.state.checkboxStatus}
                                                    checked={this.state.checkboxStatus}
                                                    type="checkbox"/>
                                                <label htmlFor={"idStatus"}>Status</label>
                                            </div>
                                        </div>


                                        <button type={"submit"} className={"btn btn-primary space-btn"}> Save</button>
                                        <button type={"reset"} className={"btn btn-warning space-btn"}> Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
