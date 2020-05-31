import React, { useState } from "react";
import TodoInterface from "./TodoInterface";

function TodoItem(props) {
	const [inputValue, setInputValue] = useState("");
	return (
		<li>
			<p>{props.todoValue}</p>
			<TodoInterface
				todoItemInterface={true}
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				addTodoHandler={() => {
					return;
				}}
			/>
		</li>
	);
}

export default TodoItem;
