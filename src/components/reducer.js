import /* { SET_TODOS } */ a from "./actionCreators/actonTypes";

export default function reducer(state, action) {
	switch (action.type) {
		case a.SET_TODOS:
			return Object.assign({}, state, {
				todos: [...state.todos, action.payload],
			});
		default:
			return state;
	}
}
