export const setValue= (dispatch, value) => {
    const action = { type: "SET_VALUE", payload: value };
    dispatch(action);
};

export const addTask= (dispatch, value) => {
    if (value.length === 0) {
        return;
    }
    const action = { type: "ADD_TASK", payload: value };

    dispatch(action);
};


export const removTask = (dispatch, index )=> {
    const action = { type: "DELETE", payload: index };
    dispatch(action);
};