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
	let id = 4; // set to 0

	return (
		<div>
			<TodoInterface
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					if (inputValue.trim() === "") {
						return;
					}
					setTodos([...todos, { value: inputValue, id: id++ }]);
					setInputValue("");
				}}
			/>
			<ul>
				{todos.length === 0
					? "The list is empty"
					: todos.map((item) => (
							<TodoItem todoValue={item.value} key={item.id}>
								<TodoList />
							</TodoItem>
					  ))}
			</ul>
		</div>
	);
}

export default TodoList;
