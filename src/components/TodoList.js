import React, { useState } from "react";

function TodoList() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<nav>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					type="submit"
					onClick={() => {
						if (inputValue.trim() === "") {
							return;
						}
						setTodos([...todos, inputValue]);
						setInputValue("");
					}}>
					Add ToDo
				</button>
			</nav>
			<ul>
				{todos.length === 0
					? "The list is empty"
					: todos.map((item) => <li>{item}</li>)}
			</ul>
		</div>
	);
}

export default TodoList;
