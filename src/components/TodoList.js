import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoItem from "./TodoItem";

function TodoList(props) {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [id, setId] = useState(0);

	return (
		<div>
			<TodoInterface
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					if (inputValue.trim() === "") {
						return;
					}
					setTodos([
						...todos,
						{ value: inputValue, id: id, isChecked: false },
					]);
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
								id={todoItem.id}
								isChecked={todoItem.isChecked}
								todos={todos}
								setTodos={setTodos}
							/>
					  ))}
			</ul>
		</div>
	);
}

export default TodoList;
