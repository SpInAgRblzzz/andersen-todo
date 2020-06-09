import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoList from "./TodoList";
import "./TodoItem.css";

function TodoItem({ todoValue, isChecked, setTodos, todos, id }) {
	const [inputValue, setInputValue] = useState(todoValue);
	const [subTodoAdded, setSubTodoAdded] = useState(false);
	const [correctionMode, setCorrectionMode] = useState(false);
	const [checkStatus, setCheck] = useState(isChecked);
	function submitChanges(e) {
		e.preventDefault();
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					item.value = inputValue;
					return item;
				}
				return item;
			})
		);
		setCorrectionMode(!correctionMode);
	}
	function toggleCheck() {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					item.isChecked = !checkStatus;
				}
				return item;
			})
		);
		setCheck(!checkStatus);
	}
	return (
		<li>
			{correctionMode ? (
				<form onSubmit={submitChanges}>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<input type="submit" value="Submit" />
				</form>
			) : (
				<p
					className={checkStatus ? "checked" : null}
					onClick={toggleCheck}>
					{inputValue}
				</p>
			)}
			<TodoInterface
				todoItemInterface={true}
				inputValue={inputValue}
				inputHandler={(e) => setInputValue(e.target.value)}
				handleAddTodo={() => {
					setSubTodoAdded(!subTodoAdded);
				}}
				correctionMode={correctionMode}
				toggleCorrectionMode={() => {
					setCorrectionMode(!correctionMode);
				}}
				subTodoAdded={subTodoAdded}
				handleDelete={() => {
					setTodos(todos.filter((item) => id !== item.id));
				}}
			/>
			{subTodoAdded ? <TodoList /> : null}
		</li>
	);
}

export default TodoItem;
