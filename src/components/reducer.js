import actonTypes from "./actionCreators/actonTypes";
import getTodoItemByIdRoute from "./assets/getTodoItemByIdRoute";
const { SET_TODOS, CHANGE_TODO } = actonTypes;
export default function reducer(state, action) {
	const { value, isChecked, idRoute } = action;
	const newState = Object.assign({}, state);

	switch (action.type) {
		case SET_TODOS:
			const newTodoItem = {
				value,
				id: state.id,
				isChecked,
				todos: [],
			};

			newState.id = state.id + 1;
			getTodoItemByIdRoute(newState, idRoute).todos.push(newTodoItem);
			console.log(newState);
			return newState;

		case CHANGE_TODO:
			getTodoItemByIdRoute(newState, idRoute).value = value;
			console.log(newState);
			return newState;

		default:
			return state;
	}
}
