import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoList from "./TodoList";

function TodoItem(props) {
	const [inputValue, setInputValue] = useState(props.todoValue);
	const [subTodoAdded, setSubTodoAdded] = useState(false);
	const [correctionMode, setCorrectionMode] = useState(false);
	return (
		<li>
			{correctionMode ? (
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			) : (
				<p>{props.todoValue}</p>
			)}
			<TodoInterface
				todoItemInterface={true}
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					setSubTodoAdded(!subTodoAdded);
					return;
				}}
				correctionModeHandler={() => {
					setCorrectionMode(!correctionMode);
				}}
				subTodoAdded={subTodoAdded}
			/>
			{subTodoAdded ? <TodoList /> : null}
		</li>
	);
}

export default TodoItem;
