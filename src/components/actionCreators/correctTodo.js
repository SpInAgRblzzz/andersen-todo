import actionTypes from "./actonTypes";
const { CHANGE_TODO } = actionTypes;

export default function changeTodoValue(value, idRoute) {
	return {
		type: CHANGE_TODO,
		value,
		idRoute,
	};
}
