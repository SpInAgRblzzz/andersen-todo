import actonTypes from "./actionCreators/actonTypes";
import getTodoItemByIdRoute from "./assets/getTodoItemByIdRoute";
const { SET_TODOS, CHANGE_TODO, DELETE_TODO, TOGGLE_CHECK } = actonTypes;
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

			return newState;

		case CHANGE_TODO:
			getTodoItemByIdRoute(newState, idRoute).value = value;

			return newState;

		case DELETE_TODO:
			const deleteId = idRoute.pop();
			const newTodos = getTodoItemByIdRoute(
				newState,
				idRoute
			).todos.filter((item) => item.id !== deleteId);
			getTodoItemByIdRoute(newState, idRoute).todos = newTodos;

			return newState;

		case TOGGLE_CHECK:
			getTodoItemByIdRoute(newState, idRoute).isChecked = isChecked;

			return newState;

		default:
			return state;
	}
}
