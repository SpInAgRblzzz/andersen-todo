import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoItem from "./TodoItem";

function TodoList() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([11, 22, 33, 44]); //set to []

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
					: todos.map((item) => (
							<TodoItem todoValue={item}>
								<TodoList />
							</TodoItem>
					  ))}
			</ul>
		</div>
	);
}

export default TodoList;
