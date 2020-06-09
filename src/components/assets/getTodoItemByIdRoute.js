export default function getTodoItemByIdRoute(state, idRoute) {
	return idRoute.reduce((acc, idRouteItem) => {
		return acc.todos.find((item) => item.id === idRouteItem);
	}, state);
}
