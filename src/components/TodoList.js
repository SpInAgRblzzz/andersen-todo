import React, { useState } from "react";
import TodoInterface from "./TodoInterface";

function TodoList() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<TodoInterface
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					if (inputValue.trim() === "") {
						return;
					}
					setTodos([...todos, inputValue]);
					setInputValue("");
				}}
			/>
			<ul>
				{todos.length === 0
					? "The list is empty"
					: todos.map((item) => <li>{item}</li>)}
			</ul>
		</div>
	);
}

export default TodoList;
