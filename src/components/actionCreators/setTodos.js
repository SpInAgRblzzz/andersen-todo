import actionTypes from "./actonTypes";
const { SET_TODOS } = actionTypes;

export default function setTodos(inputValue, isChecked, idRoute) {
	return {
		type: SET_TODOS,
		value: inputValue,
		isChecked,
		idRoute,
	};
}
