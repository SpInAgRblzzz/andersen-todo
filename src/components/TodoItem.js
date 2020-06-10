import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoList from "./TodoList";
import "./TodoItem.css";

function TodoItem({
	todoValue,
	isChecked,
	setTodos,
	todos,
	id,
	idRoute,
	correctTodo,
	deleteTodo,
	toggleCheck,
}) {
	const [inputValue, setInputValue] = useState(todoValue);
	const [subTodoAdded, setSubTodoAdded] = useState(false);
	const [correctionMode, setCorrectionMode] = useState(false);

	function submitChanges(e) {
		e.preventDefault();
		correctTodo(inputValue, idRoute);
		setCorrectionMode(!correctionMode);
	}

	function toggleCheckStatus() {
		toggleCheck(isChecked, idRoute);
	}

	const handleInput = (e) => setInputValue(e.target.value);
	const handleAddTodo = () => {
		setSubTodoAdded(!subTodoAdded);
	};
	const toggleCorrectionMode = () => {
		setCorrectionMode(!correctionMode);
	};
	const handleDelete = () => {
		deleteTodo(id, idRoute);
	};
	return (
		<li>
			{correctionMode ? (
				<form onSubmit={submitChanges}>
					<input value={inputValue} onChange={handleInput} />
					<input type="submit" value="Submit" />
				</form>
			) : (
				<p
					className={isChecked ? "checked" : null}
					onClick={toggleCheckStatus}>
					{inputValue}
				</p>
			)}
			<TodoInterface
				todoItemInterface={true}
				inputValue={inputValue}
				inputHandler={handleInput}
				handleAddTodo={handleAddTodo}
				correctionMode={correctionMode}
				toggleCorrectionMode={toggleCorrectionMode}
				subTodoAdded={subTodoAdded}
				handleDelete={handleDelete}
			/>
			{subTodoAdded ? <TodoList currentIdRoute={idRoute} /> : null}
		</li>
	);
}

export default TodoItem;
