import React from "react";
import { bindActionCreators } from "redux";
import TodoItem from "./TodoItem";
import correctTodo from "./actionCreators/correctTodo";
import deleteTodo from "./actionCreators/deleteTodo";

function List({ todos, setTodos, idRoute, dispatch }) {
	const boundActionCreators = bindActionCreators(
		{ correctTodo, deleteTodo },
		dispatch
	);
	return (
		<ul>
			{todos.length === 0
				? "The list is empty"
				: todos.map((todoItem) => (
						<TodoItem
							todoValue={todoItem.value}
							key={todoItem.id}
							id={todoItem.id}
							isChecked={todoItem.isChecked}
							todos={todos}
							setTodos={setTodos}
							idRoute={[...idRoute, todoItem.id]}
							{...boundActionCreators}
						/>
				  ))}
		</ul>
	);
}

export default List;
