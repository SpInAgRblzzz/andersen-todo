import React from "react";
import TodoItem from "./TodoItem";

function List({ todos, setTodos, idRoute }) {
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
						/>
				  ))}
		</ul>
	);
}

export default List;
