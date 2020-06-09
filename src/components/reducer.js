import actonTypes from "./actionCreators/actonTypes";
import getTodoItemByIdRoute from "./assets/getTodoItemByIdRoute";
const { SET_TODOS } = actonTypes;
export default function reducer(state, action) {
	switch (action.type) {
		case SET_TODOS:
			const { value, isChecked, idRoute } = action;
			const newTodoItem = {
				value,
				id: state.id,
				isChecked,
				todos: [],
			};

			const newState = Object.assign({}, state);
			newState.id = state.id + 1;
			getTodoItemByIdRoute(newState, idRoute).todos.push(newTodoItem);

			return newState;

		default:
			return state;
	}
}
