
import {ADD_TASK, DELETE_TASK, EDIT_TASK, SET_VALUE, TASK_DOWN, TASK_UP, TOGGLE_TASK} from "./type"

export const setValue= (dispatch, value) => {
    const action = { type: SET_VALUE, payload: value };
    dispatch(action);
};

export const addTask= (dispatch, value) => {
    const action = { type: ADD_TASK, payload: value };
    dispatch(action);
};


export const deleteTask  = (dispatch, index )=> {
    const action = { type: DELETE_TASK, payload: index };
    dispatch(action);
};

export const editTask = (dispatch,index, value )=> {
    const action = { type: EDIT_TASK, payload: {index,value} };
    dispatch(action);
};

export const taskUp = (dispatch, index )=> {
    const action = { type: TASK_UP, payload: index };
    dispatch(action);
};

export const taskDown = (dispatch, index )=> {
    const action = { type: TASK_DOWN, payload: index };
    dispatch(action);
};

export const toggleTask = (dispatch, index )=> {
    const action = { type: TOGGLE_TASK, payload: index };
    dispatch(action);
};