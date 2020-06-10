import React from "react";
import { bindActionCreators } from "redux";
import TodoItem from "./TodoItem";
import correctTodo from "./actionCreators/correctTodo";
import deleteTodo from "./actionCreators/deleteTodo";
import toggleCheck from "./actionCreators/toggleCheck";
import { connect } from "react-redux";

function List({ todos, setTodos, idRoute, dispatch }) {
	const boundActionCreators = bindActionCreators(
		{ correctTodo, deleteTodo, toggleCheck },
		dispatch
	);
	return (
		<ul>
			{todos.length === 0
				? "The list is empty"
				: todos.map((todoItem) => {
						const ConnectedTodoItem = connect((state) => ({
							todoValue: todoItem.value,
							id: todoItem.id,
							isChecked: todoItem.isChecked,
							idRoute: [...idRoute, todoItem.id],
						}))(TodoItem);
						return (
							<ConnectedTodoItem
								key={todoItem.id}
								{...boundActionCreators}
							/>
						);
				  })}
		</ul>
	);
}

export default List;
