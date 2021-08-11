import { createStore } from "redux";

const initialState = {
	value: "task",
	tasks: [{ title: "task" }]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				value: action.payload
			};
		case "ADD_TASK":
			return {
				...state,
				value: "",
				tasks: [...state.tasks, { title: action.payload }]
			};
		case "DELETE":
			let tasks = [...state.tasks];
			tasks.splice(action.payload, 1)
			return {...state, tasks}

		default: return state;
	}
};
const store = createStore(reducer);
export default store;
