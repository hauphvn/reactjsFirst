const data = JSON.parse(localStorage.getItem('tasks'));
let initialState = (data) ? data : [];

let myReducer = (state = initialState, action) => {
    return state;
}

export default myReducer;
