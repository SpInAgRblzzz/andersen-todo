import { SET_TODOS } from "./actonTypes";

export default function setTodos(newTodo) {
	return {
		type: SET_TODOS,
		payload: newTodo,
	};
}
