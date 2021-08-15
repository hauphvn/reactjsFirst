import {createStore} from "redux";
import {status} from "./actions/index"
import myReducer from "./reducers/index"


const store = createStore(myReducer);
store.dispatch(status());
console.log("----------demo redux---------");
console.log(store.getState());

