import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import TodoList from "./TodoList";
import "./TodoItem.css";

function TodoItem(props) {
	const [inputValue, setInputValue] = useState(props.todoValue);
	const [subTodoAdded, setSubTodoAdded] = useState(false);
	const [correctionMode, setCorrectionMode] = useState(false);
	const [isChecked, setCheck] = useState(props.isChecked);
	function submitChanges() {
		props.setTodos(
			props.todos.map((item) => {
				if (item.id === props.id) {
					item.value = inputValue;
					return item;
				}
				return item;
			})
		);
		setCorrectionMode(!correctionMode);
	}
	function toggleCheck() {
		props.setTodos(
			props.todos.map((item) => {
				if (item.id === props.id) {
					item.isChecked = !isChecked;
				}
				return item;
			})
		);
		setCheck(!isChecked);
	}
	return (
		<li>
			{correctionMode ? (
				<div>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button onClick={submitChanges}>Submit</button>
				</div>
			) : (
				<p
					className={isChecked ? "checked" : null}
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
					props.setTodos(
						props.todos.filter((item) => props.id !== item.id)
					);
				}}
			/>
			{subTodoAdded ? <TodoList /> : null}
		</li>
	);
}

export default TodoItem;
