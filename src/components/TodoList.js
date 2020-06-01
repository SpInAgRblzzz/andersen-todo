import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoItem from "./TodoItem";

function TodoList(props) {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([
		{ value: 11, id: 0 },
		{ value: 22, id: 1 },
		{ value: 33, id: 2 },
		{ value: 44, id: 3 },
	]); //set to []
	const [id, setId] = useState(4); // set to 0

	return (
		<div>
			<TodoInterface
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					if (inputValue.trim() === "") {
						return;
					}
					setTodos([...todos, { value: inputValue, id: id }]);
					setId(id + 1);
					setInputValue("");
				}}
			/>
			<ul>
				{todos.length === 0
					? "The list is empty"
					: todos.map((todoItem) => (
							<TodoItem
								todoValue={todoItem.value}
								key={todoItem.id}
								handleDelete={() => {
									setTodos(
										todos.filter(
											(item) => todoItem.id !== item.id
										)
									);
								}}
							/>
					  ))}
			</ul>
		</div>
	);
}

export default TodoList;
