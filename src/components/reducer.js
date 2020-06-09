import actonTypes from "./actionCreators/actonTypes";
const { SET_TODOS } = actonTypes;
export default function reducer(state, action) {
	switch (action.type) {
		case SET_TODOS:
			return Object.assign({}, state, {
				todos: [...state.todos, action.payload],
			});
		default:
			return state;
	}
}
