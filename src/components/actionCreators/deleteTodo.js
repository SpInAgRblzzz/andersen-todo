import actionTypes from "./actonTypes";
const { DELETE_TODO } = actionTypes;

export default function deleteTodo(id, idRoute) {
	return {
		type: DELETE_TODO,
		id,
		idRoute: idRoute.slice(),
	};
}
