import * as types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('tasks'));
let initialState = (data) ? data : [];
let  onHandleSaveNewTask = (data) =>{
    initialState.push({
        id: initialState.length + 1,
        name: data.task.txtJobName,
        status: data.task.selectStatus
    });
    localStorage.setItem('tasks',JSON.stringify(initialState));
}
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            onHandleSaveNewTask(action);
            return [...state];
        default:
            return state;
    }
    return state;
}

export default myReducer;
