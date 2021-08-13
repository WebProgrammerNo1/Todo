import initialState from "./initialState"
import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_VALUE, TASK_DOWN, TASK_UP, TOGGLE_TASK } from "./type";

const reducer = (state = initialState, action) => {
	let  tasks, i;

	switch (action.type) {
		case SET_VALUE:
			return {
				...state,
				value: action.payload
			};

		case ADD_TASK:
			return {
				...state,
				value: "",
				tasks: [...state.tasks, { title: action.payload }]
			};

				case EDIT_TASK:
					tasks = [...state.tasks];
					tasks[action.payload.index].title = action.payload.value;
		
					return { ...state, tasks }
				
			case DELETE_TASK:
				tasks = [...state.tasks];
				tasks.splice(action.payload, 1)
				return {...state, tasks}

			case TASK_UP:
				tasks = [...state.tasks];
				i =action.payload;
				if(i>0)
					[tasks[i-1], tasks[i]]=[tasks[i], tasks[i-1]]
					else tasks = [ ...tasks.splice(1), tasks[0]]
				return {...state, tasks}

			case TASK_DOWN:
				tasks = [...state.tasks];
				i =action.payload;
				if(i>tasks.length-1)
					[tasks[i-1], tasks[i]]=[tasks[i], tasks[i-1]]
					else tasks = [tasks[i], ...tasks.splice(0,i)]
				return {...state, tasks}

			case TOGGLE_TASK:
				tasks = [...state.tasks];
				i =action.payload;
				tasks[i].completed = !tasks[i].completed
				return {...state, tasks}

		default: return state;
	}
};
export default reducer;