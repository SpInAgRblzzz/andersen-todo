import actionTypes from "./actonTypes";
const { SET_TODOS } = actionTypes;

export default function setTodos(newTodo) {
	return {
		type: SET_TODOS,
		payload: newTodo,
	};
}
