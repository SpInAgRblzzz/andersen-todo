import actonTypes from "./actionCreators/actonTypes";
const { SET_TODOS, UPDATE_ID } = actonTypes;
export default function reducer(state, action) {
	switch (action.type) {
		case SET_TODOS:
			const { value, isChecked } = action;
			const newTodoItem = {
				value,
				id: state.id,
				isChecked,
			};
			return Object.assign({}, state, {
				todos: [...state.todos, newTodoItem],
			});
		case UPDATE_ID:
			return Object.assign({}, state, {
				id: state.id + 1,
			});
		default:
			return state;
	}
}
